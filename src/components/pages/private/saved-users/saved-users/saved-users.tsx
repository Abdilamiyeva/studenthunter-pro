import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {CompanyUsers, UniversityUsers} from './components'
import {Navigate} from 'react-router-dom'

export const SavedUsersPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.COMPANY:
      return <CompanyUsers />
    case Role.UNIVERSITY:
      return <UniversityUsers />
    default:
      return <Navigate to="/dashboard" />
  }
}
