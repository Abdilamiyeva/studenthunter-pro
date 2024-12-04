import {BoldTabs, DashboardBack} from '@/components/common'
import {AboutTab} from './components/about-tab'
import {AppliedUsersTab} from './components/applied-users-tab'
import {SavedUsersTab} from './components/saved-users-tab'

export const AdminVacancy = () => (
  <>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-3 text-blue cursor-pointer mb-6">
      <DashboardBack link="/dashboard/vacancies">Back to all vacancies</DashboardBack>
    </div>
    <BoldTabs
      tabs={[
        {
          label: 'About vacancy',
          children: <AboutTab />,
        },
        {
          label: 'Applied users',
          children: <AppliedUsersTab />,
        },
        {
          label: 'Saved users',
          children: <SavedUsersTab />,
        },
      ]}
    />
  </>
)
