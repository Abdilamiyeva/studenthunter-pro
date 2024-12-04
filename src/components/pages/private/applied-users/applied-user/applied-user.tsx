import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {CompanyUser, UniversityUser} from './components'

export const AppliedUserPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.COMPANY:
      return <CompanyUser />
    case Role.UNIVERSITY:
      return <UniversityUser />
    default:
      return <Navigate to="/dashboard" />
  }
}
