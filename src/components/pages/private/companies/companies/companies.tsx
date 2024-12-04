import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {AdminCompanies, UserCompanies} from './components'

export const CompaniesPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminCompanies />
    case Role.ADMIN:
      return <AdminCompanies />
    case Role.APPLICANT:
      return <UserCompanies />
    default:
      return <Navigate to="/dashboard" />
  }
}
