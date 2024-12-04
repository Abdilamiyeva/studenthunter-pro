import {useGetUserQuery} from '@/features/auth'

export const useUserRole = () => {
  const {data: user} = useGetUserQuery('')

  return user?.data?.role
}
