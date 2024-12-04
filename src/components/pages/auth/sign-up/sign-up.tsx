import {Button, Field, Image} from '@/components/common'
import {Link} from 'react-router-dom'
import {useLoginUserMutation, useSignUpUserMutation} from '@/features/auth'
import {SignUpUserRequest} from '@/features/auth/types'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useHandleError} from '@/hooks/use-handle-error'
import {useToast} from '@/components/ui/use-toast'
import {Form} from '@/components/ui/form'
import {formatBackToShortNumber} from '@/utils/format-phone-number'
import {EmailSucceeded} from '../components'
import {useValidationOptions} from '@/hooks/use-validation-options'

export const SignUpPage = () => {
  const [signUpUser, {isLoading: isSigningUp, data: result}] = useSignUpUserMutation()
  const [loginUser, {isLoading: isLoggingIn}] = useLoginUserMutation()
  const form = useForm<SignUpUserRequest>()
  const handleRequest = useHandleRequest()
  const handleError = useHandleError()
  const getValidationOptions = useValidationOptions()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<SignUpUserRequest> = async formData => {
    if (formData.password !== (formData as any).confirmPassword) {
      return handleError('Confirmation password in not correct!')
    }

    if (!(formData as any).acceptTerms) {
      return handleError('Please accept terms & conditions!')
    }

    if (!(formData as any).acceptSharePolicy) {
      return handleError('Please accept share policy!')
    }

    await handleRequest({
      request: async () => {
        formData.isApplicant = true
        formData.phone_number = formatBackToShortNumber(formData.phone_number)

        const response = await signUpUser(formData)
        return response
      },
      onSuccess: () => {
        toast({
          title: 'Verification link successfully send to your email!',
        })
      },
    })
  }

  const onTryAgain = async () => {
    await handleRequest({
      request: async () => {
        const response = await loginUser({
          email: form.getValues('email'),
          password: form.getValues('password'),
        })

        return response
      },
      onSuccess: () => {
        toast({
          title: 'Email successfully resent!',
        })
      },
    })
  }

  if (result?.success) {
    return <EmailSucceeded email={form.getValues('email') || ''} onTryAgain={onTryAgain} tryingAgain={isLoggingIn} />
  }

  return (
    <div className="flex flex-col md:grid grid-cols-2 md:h-screen">
      <div className="bg-blue h-44 md:h-full grid place-content-center">
        <Image
          src="/images/logo-white.svg"
          alt="Student hunter"
          imageClassName="lg:w-[500px] md:w-[300px] w-32 lg:h-[500px] md:h-[300px] h-32"
        />
      </div>
      <div className="px-5 md:px-20 py-7 md:py-24 h-full overflow-auto">
        <h1 className="hidden md:block text-8xl font-bold leading-17 text-center">Sign up to your account</h1>
        <h2 className="block md:hidden text-4xl font-bold leading-10 mb-0.5">Sign up</h2>
        <p className="md:mt-4 mb-7 md:mb-20 text-base md:text-2xl leading-6.5 text-blue-8 md:text-center">
          Enter your details to proceed further
        </p>
        <div className="mt-7 md:mt-20">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-7">
              <div className="grid md:grid-cols-2 gap-7 md:gap-16">
                <Field
                  type="second-input"
                  name="first_name"
                  control={form.control}
                  componentProps={{
                    label: 'First name',
                    placeholder: 'Enter your first name',
                    required: true,
                  }}
                />
                <Field
                  type="second-input"
                  name="last_name"
                  control={form.control}
                  componentProps={{
                    label: 'Last name',
                    placeholder: 'Enter your last name',
                    required: true,
                  }}
                />
              </div>
              <Field
                type="second-input"
                name="email"
                control={form.control}
                rules={getValidationOptions(true, 2, 100, {
                  validate: (email: string) =>
                    !(email.includes('@') && email.includes('.')) ? 'Please enter correct email' : undefined,
                })}
                componentProps={{
                  label: 'Email',
                  placeholder: 'Enter your email',
                  required: true,
                }}
              />
              <Field
                type="second-input"
                name="password"
                control={form.control}
                componentProps={{
                  type: 'password',
                  label: 'Password',
                  placeholder: 'Enter your password',
                  required: true,
                }}
              />
              <Field
                type="second-input"
                name="confirmPassword"
                control={form.control}
                componentProps={{
                  type: 'password',
                  label: 'Confirm Password',
                  placeholder: 'Confirm your password',
                  required: true,
                }}
              />
              <Field
                type="second-input"
                name="phone_number"
                control={form.control}
                componentProps={{
                  type: 'tel',
                  label: 'Phone',
                  required: true,
                }}
              />
              <div className="flex flex-col gap-5">
                <Field
                  type="circle-checkbox"
                  name="acceptTerms"
                  control={form.control}
                  componentProps={{
                    label: 'I agree with terms & conditions',
                    required: true,
                  }}
                />
                <Field
                  type="circle-checkbox"
                  name="acceptSharePolicy"
                  control={form.control}
                  componentProps={{
                    label: '“StudentHunter” can share my contact info with colleges - “StudentHunter” can contact me.',
                    required: true,
                  }}
                />
              </div>
              <Button htmlType="submit" loading={isSigningUp} className="py-3 md:py-4 mt-3 rounded md:rounded-lg">
                Sign up
              </Button>
            </form>
          </Form>
        </div>
        <div className="flex items-center gap-2 mt-32">
          <p>Already have an account?</p>
          <Link to="/auth/login" className="font-bold">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
