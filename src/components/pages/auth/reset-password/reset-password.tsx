import {Button, Field, Image} from '@/components/common'
import {Form} from '@/components/ui/form'
import {useToast} from '@/components/ui/use-toast'
import {useResetPasswordMutation} from '@/features/auth'
import {ResetPasswordResponse} from '@/features/auth/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useQuery} from '@/hooks/use-query'
import {useStorage} from '@/utils/storage'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Link, Navigate} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {FormDataI} from './types'
import {useHandleError} from '@/hooks/use-handle-error'

export const ResetPasswordPage = () => {
  const [resetPassword, {isLoading: isResetingPassword}] = useResetPasswordMutation()
  const form = useForm<FormDataI>()
  const handleRequest = useHandleRequest()
  const handleError = useHandleError()
  const query = useQuery()
  const navigate = useNavigate()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<FormDataI> = async formData => {
    if (formData.newPassword !== formData.confirmPassword) {
      return handleError('Confirmation password in not correct!')
    }

    await handleRequest({
      request: async () => {
        delete formData.confirmPassword

        const response = await resetPassword({
          token: query.get('token') || '',
          body: formData,
        })
        return response
      },
      onSuccess: (data: ResetPasswordResponse) => {
        useStorage.setCredentials({
          token: data.token,
          refreshToken: data.refreshToken,
        })
        toast({
          title: 'Password successfully updated!',
        })
        navigate('/dashboard')
      },
    })
  }

  if (!query.get('token')) {
    return <Navigate to="/" />
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
        <h1 className="hidden md:block text-8xl font-bold leading-17 text-center">Reset your password</h1>
        <h2 className="block md:hidden text-4xl font-bold leading-10 mb-0.5">Sign up</h2>
        <p className="md:mt-4 mb-7 md:mb-20 text-base md:text-2xl leading-6.5 text-blue-8 md:text-center">
          Enter your details to proceed further
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-7">
            <Field
              type="second-input"
              control={form.control}
              name="newPassword"
              componentProps={{
                type: 'password',
                label: 'New Password',
                placeholder: 'Enter your new password',
                required: true,
              }}
            />
            <Field
              type="second-input"
              control={form.control}
              name="confirmPassword"
              componentProps={{
                type: 'password',
                label: 'Confirm New Password',
                placeholder: 'Re-enter your new password',
                required: true,
              }}
            />
            <Button htmlType="submit" loading={isResetingPassword} className="py-3 mt-3 rounded md:rounded-lg">
              Reset Password
            </Button>
          </form>
        </Form>
        <div className="mt-32">
          <span>Remembered password?</span>
          <Link to="/auth/login" className="font-bold">
            {' '}
            | Log in
          </Link>
        </div>
      </div>
    </div>
  )
}
