import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {UniversityPrograms} from './components'

export const ProgramsPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.UNIVERSITY:
      return <UniversityPrograms />
    default:
      return <Navigate to="/dashboard" />
  }
}
