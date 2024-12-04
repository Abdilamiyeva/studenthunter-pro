import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {AdminConsultings} from './components'

export const ConsultingsPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminConsultings />
    case Role.ADMIN:
      return <AdminConsultings />
    default:
      return <Navigate to="/dashboard" />
  }
}
