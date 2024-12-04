/* eslint-disable react-hooks/exhaustive-deps */
import {Loader} from '@/components/common'
import {useVerifyEmailMutation} from '@/features/auth'
import {VerifyEmailResponse} from '@/features/auth/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useQuery} from '@/hooks/use-query'
import {useStorage} from '@/utils/storage'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export const EmailVerificationPage = () => {
  const [verifyEmail] = useVerifyEmailMutation()
  const handleRequest = useHandleRequest()
  const navigate = useNavigate()
  const query = useQuery()

  const authUser = async () => {
    const token = query.get('token')

    if (!token) {
      return navigate('/')
    }

    await handleRequest({
      request: async () => {
        const result = await verifyEmail({token: token as string})
        return result
      },
      onSuccess: (data: VerifyEmailResponse) => {
        useStorage.setCredentials({
          token: data.token,
          refreshToken: data.refreshToken,
        })
        navigate('/dashboard')
      },
      onError: () => navigate('/'),
    })
  }

  useEffect(() => {
    authUser()
  }, [])

  return <Loader />
}
