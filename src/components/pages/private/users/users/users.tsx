import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {AdminUsers} from './components'

export const UsersPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminUsers />
    case Role.ADMIN:
      return <AdminUsers />
    default:
      return <Navigate to="/dashboard" />
  }
}
