import {
  AcceptedUserIcon,
  AppliedUsersIcon,
  RejectedUserIcon,
  SavedUsersIcon,
  ShortlistedUserIcon,
  UsersIcon,
} from '@/icons'
import {DashboardCard} from './components'
import {DashboardChart} from '..'

export const ConsultingDashboard = () => (
  <div>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-7">
      <DashboardCard icon={<UsersIcon className="w-6 h-6 text-purple-2" />} text="Total Viewed" count={544} />
      <DashboardCard icon={<AppliedUsersIcon className="w-6 h-6 text-sky-5" />} text="Applied users" count={87} />
      <DashboardCard icon={<SavedUsersIcon className="w-6 h-6 text-sky-3" />} text="Saved users" count={234} />
      <DashboardCard icon={<AcceptedUserIcon className="w-6 h-6 text-green" />} text="Accepted users" count={13} />
      <DashboardCard icon={<RejectedUserIcon className="w-6 h-6 text-orange" />} text="Rejected users" count={4} />
      <DashboardCard icon={<ShortlistedUserIcon className="w-6 h-6 text-yellow-2" />} text="Shortlist" count={0} />
    </div>
    <DashboardChart />
  </div>
)
