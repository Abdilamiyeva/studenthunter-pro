import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {CompanyProfile, ConsultingProfile} from './components'

export const ProfilePage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.CONSULTING:
      return <ConsultingProfile />
    case Role.COMPANY:
      return <CompanyProfile />
    default:
      return <Navigate to="/dashboard" />
  }
}
