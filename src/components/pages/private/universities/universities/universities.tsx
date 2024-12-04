import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {AdminUniversities, UserUniversities} from './components'

export const UniversitiesPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminUniversities />
    case Role.ADMIN:
      return <AdminUniversities />
    case Role.APPLICANT:
      return <UserUniversities />
    default:
      return <Navigate to="/dashboard" />
  }
}
