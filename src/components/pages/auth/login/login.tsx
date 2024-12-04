import {Button, Field, Image} from '@/components/common'
import {Form} from '@/components/ui/form'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Link, useNavigate} from 'react-router-dom'
import {LoginUserRequest, LoginUserResponse} from '@/features/auth/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useLoginUserMutation} from '@/features/auth'
import {useStorage} from '@/utils/storage'
import {useValidationOptions} from '@/hooks/use-validation-options'

export const LoginPage = () => {
  const [loginUser, {isLoading}] = useLoginUserMutation()
  const form = useForm<LoginUserRequest>()
  const handleRequest = useHandleRequest()
  const navigate = useNavigate()
  const getValidationOptions = useValidationOptions()

  const onSubmit: SubmitHandler<LoginUserRequest> = async formData => {
    await handleRequest({
      request: async () => {
        const result = await loginUser(formData)
        return result
      },
      onSuccess: (data: {data: LoginUserResponse}) => {
        useStorage.setCredentials({
          token: data.data.token,
          refreshToken: data.data.refreshToken,
        })
        navigate('/dashboard')
      },
    })
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
        <h1 className="hidden md:block text-8xl font-bold leading-17 text-center">Sign in to your account</h1>
        <h2 className="block md:hidden text-4xl font-bold leading-10 mb-0.5">Sign in</h2>
        <p className="md:mt-4 mb-7 md:mb-20 text-base md:text-2xl leading-6.5 text-blue-8 md:text-center">
          Enter your details to proceed further
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
            <Field
              type="second-input"
              control={form.control}
              name="password"
              componentProps={{
                type: 'password',
                label: 'Password',
                placeholder: 'Enter your password',
                required: true,
              }}
            />
            <Link to="/auth/forgot-password" className="md:hidden text-sm leading-5.5 text-end font-medium">
              Forgot password ?
            </Link>
            <Button htmlType="submit" loading={isLoading} className="py-3 mt-3 rounded md:rounded-lg">
              Sign in
            </Button>
          </form>
        </Form>
        <div className="mt-32">
          <Link to="/auth/forgot-password" className="hidden md:inline">
            Forgot password?
          </Link>
          <span className="md:hidden text-sm leading-5.5">Do not have an account?</span>
          <Link to="/auth/sign-up" className="font-bold">
            {' '}
            | Create an account
          </Link>
        </div>
      </div>
    </div>
  )
}
