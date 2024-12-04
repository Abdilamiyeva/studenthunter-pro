import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {AdminSkill} from './components'
import {Navigate} from 'react-router-dom'

export const SkillPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminSkill />
    case Role.ADMIN:
      return <AdminSkill />
    default:
      return <Navigate to="/dashboard" />
  }
}
