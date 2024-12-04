import {Role} from '@/constants/roles'
import {useUserRole} from '@/hooks/use-user-role'
import {Navigate} from 'react-router-dom'
import {AdminDashboard, CompanyDashboard, ConsultingDashboard, UniversityDashboard, UserDashboard} from './components'

export const DashboardPage = () => {
  const userRole = useUserRole()

  switch (userRole) {
    case Role.SUPER_ADMIN:
      return <AdminDashboard />
    case Role.ADMIN:
      return <AdminDashboard />
    case Role.COMPANY:
      return <CompanyDashboard />
    case Role.CONSULTING:
      return <ConsultingDashboard />
    case Role.UNIVERSITY:
      return <UniversityDashboard />
    case Role.APPLICANT:
      return <UserDashboard />
    default:
      return <Navigate to="/dashboard" />
  }
}
