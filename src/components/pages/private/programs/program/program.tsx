import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {UniversityProgram} from './components'

export const ProgramPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.UNIVERSITY:
      return <UniversityProgram />
    default:
      return <Navigate to="/dashboard" />
  }
}
