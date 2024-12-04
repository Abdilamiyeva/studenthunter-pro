import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {AdminUser} from './components'

export const UserPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminUser />
    case Role.ADMIN:
      return <AdminUser />
    default:
      return <Navigate to="/dashboard" />
  }
}
