import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {AdminVacancy, CompanyVacancy, UserVacancy} from './components'

export const VacancyPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminVacancy />
    case Role.ADMIN:
      return <AdminVacancy />
    case Role.COMPANY:
      return <CompanyVacancy />
    case Role.APPLICANT:
      return <UserVacancy />
    default:
      return <Navigate to="/dashboard" />
  }
}
