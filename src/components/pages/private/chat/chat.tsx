import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {AdminChat, CompanyChat, UniversityChat, UserChat} from './components'
import {Navigate} from 'react-router-dom'

export const ChatPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminChat />
    case Role.ADMIN:
      return <AdminChat />
    case Role.COMPANY:
      return <CompanyChat />
    case Role.UNIVERSITY:
      return <UniversityChat />
    case Role.APPLICANT:
      return <UserChat />
    default:
      return <Navigate to="/dashboard" />
  }
}
