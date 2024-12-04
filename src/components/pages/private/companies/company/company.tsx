import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {AdminCompany, UserCompany} from './components'

export const CompanyPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminCompany />
    case Role.ADMIN:
      return <AdminCompany />
    case Role.APPLICANT:
      return <UserCompany />
    default:
      return <Navigate to="/dashboard" />
  }
}
