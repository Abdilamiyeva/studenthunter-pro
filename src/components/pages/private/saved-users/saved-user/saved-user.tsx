import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {CompanyUser, UniversityUser} from './components'
import {Navigate} from 'react-router-dom'

export const SavedUserPage = () => {
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
