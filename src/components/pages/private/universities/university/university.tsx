import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {AdminUniversity, UserUniversity} from './components'

export const UniversityPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminUniversity />
    case Role.ADMIN:
      return <AdminUniversity />
    case Role.APPLICANT:
      return <UserUniversity />
    default:
      return <Navigate to="/dashboard" />
  }
}
