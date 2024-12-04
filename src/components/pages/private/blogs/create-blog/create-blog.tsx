import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {AdminForm} from './components'
import {Navigate} from 'react-router-dom'

export const CreateBlogPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminForm />
    case Role.ADMIN:
      return <AdminForm />
    default:
      return <Navigate to="/dashboard" />
  }
}
