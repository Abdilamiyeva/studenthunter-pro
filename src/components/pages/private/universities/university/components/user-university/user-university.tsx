import {DashboardBack, ScrollableTabs} from '@/components/common'
import {UNIVERSITY_SECTION_LINKS} from './constants'
import {About, Admission, Costs, Media, Overview} from './components'

export const UserUniversity = () => (
  <>
    <div className="mb-6">
      <DashboardBack link="/dashboard/user-universities">Back to all universities</DashboardBack>
    </div>
    <ScrollableTabs links={UNIVERSITY_SECTION_LINKS} sideBarTitle="University profile" topSize={210}>
      <Overview />
      <About />
      <Admission />
      <Costs />
      <Media />
    </ScrollableTabs>
  </>
)
