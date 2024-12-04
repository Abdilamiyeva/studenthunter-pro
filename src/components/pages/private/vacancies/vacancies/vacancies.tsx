import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {AdminVacancies, CompanyVacancies, UserVacancies} from './components'

export const VacanciesPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminVacancies />
    case Role.ADMIN:
      return <AdminVacancies />
    case Role.COMPANY:
      return <CompanyVacancies />
    case Role.APPLICANT:
      return <UserVacancies />
    default:
      return <Navigate to="/dashboard" />
  }
}
