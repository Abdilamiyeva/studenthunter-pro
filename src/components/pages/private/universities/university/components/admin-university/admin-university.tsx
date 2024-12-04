import {BoldTabs, DashboardBack} from '@/components/common'
import {AboutCollege, CollegePrograms} from './components'
import {AppliedUsers} from './components/applied-users'
import {SavedUsers} from './components/saved-users'

export const AdminUniversity = () => (
  <div>
    <DashboardBack link="/dashboard/universities">Back to all colleges</DashboardBack>
    <div className="py-6">
      <BoldTabs
        tabs={[
          {
            label: 'About College',
            children: <AboutCollege />,
          },
          {
            label: 'College programs',
            children: <CollegePrograms />,
          },
          {
            label: 'Applied Users',
            children: <AppliedUsers />,
          },
          {
            label: 'Saved Users',
            children: <SavedUsers />,
          },
        ]}
      />
    </div>
  </div>
)
