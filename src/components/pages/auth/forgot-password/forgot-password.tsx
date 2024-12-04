import {Button, Field, Image} from '@/components/common'
import {Form} from '@/components/ui/form'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'
import {useValidationOptions} from '@/hooks/use-validation-options'
import {useSendEmailToResetPasswordMutation} from '@/features/auth'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {SendEmailToResetPasswordRequest} from '@/features/auth/types'
import {EmailSucceeded} from '../components'
import {useToast} from '@/components/ui/use-toast'
import {useState} from 'react'

export const ForgotPasswordPage = () => {
  const [sendEmailToResetPwd, {isLoading: isSendingEmail}] = useSendEmailToResetPasswordMutation()
  const form = useForm<SendEmailToResetPasswordRequest>()
  const [requestSucceeded, setRequestSucceeded] = useState(false)
  const handleRequest = useHandleRequest()
  const getValidationOptions = useValidationOptions()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<SendEmailToResetPasswordRequest> = async formData => {
    await handleRequest({
      request: async () => {
        const response = await sendEmailToResetPwd(formData)
        return response
      },
      onSuccess: () => {
        toast({
          title: 'Email successfully sent!',
        })
        setRequestSucceeded(true)
      },
    })
  }

  if (requestSucceeded) {
    return (
      <EmailSucceeded
        email={form.getValues('email')}
        onTryAgain={() => onSubmit(form.getValues())}
        tryingAgain={isSendingEmail}
      />
    )
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
        <h1 className="text-4xl md:text-8xl font-bold leading-10 md:leading-17 md:text-center">Reset password</h1>
        <p className="md:mt-4 mb-7 md:mb-20 text-base md:text-2xl leading-6.5 text-blue-8 md:text-center">
          If you forgot your password, enter your email to reset it
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-7">
            <Field
              type="second-input"
              control={form.control}
              name="email"
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
            <Button htmlType="submit" loading={isSendingEmail} className="mt-3 py-3 rounded md:rounded-lg">
              Sign in
            </Button>
          </form>
        </Form>
        <div className="mt-32">
          <Link to="/auth/login">Remember password?</Link>
          <Link to="/auth/sign-up" className="font-bold">
            {' '}
            | Create an account
          </Link>
        </div>
      </div>
    </div>
  )
}
