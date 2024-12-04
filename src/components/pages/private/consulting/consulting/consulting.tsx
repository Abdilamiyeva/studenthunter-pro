import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {AdminConsulting} from './components'

export const ConsultingPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminConsulting />
    case Role.ADMIN:
      return <AdminConsulting />
    default:
      return <Navigate to="/dashboard" />
  }
}
