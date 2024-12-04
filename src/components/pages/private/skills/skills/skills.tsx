import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {AdminSkills} from './components'

export const SkillsPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminSkills />
    case Role.ADMIN:
      return <AdminSkills />
    default:
      return <Navigate to="/dashboard" />
  }
}
