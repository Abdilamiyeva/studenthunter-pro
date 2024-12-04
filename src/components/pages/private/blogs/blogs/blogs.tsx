import {Navigate} from 'react-router-dom'
import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {AdminBlogs} from './components'

export const BlogsPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminBlogs />
    case Role.ADMIN:
      return <AdminBlogs />
    default:
      return <Navigate to="/dashboard" />
  }
}
