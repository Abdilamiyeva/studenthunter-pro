import { Role } from '@/constants/roles'
import { useUserRole } from '@/hooks/use-user-role'
import { Navigate } from 'react-router-dom'
import { AdminHomeEdit } from './components'

export const HomeEditPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminHomeEdit />
    case Role.ADMIN:
      return <AdminHomeEdit />
    default:
      return <Navigate to="/dashboard" />
  }
}
