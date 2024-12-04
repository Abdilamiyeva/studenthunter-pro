import {DashboardBack, ScrollableTabs} from '@/components/common'
import {TABS} from './constants/tabs'
import {About, Media, Overview} from './components'

export const ConsultingUniversity = () => (
  <>
    <div className="mb-8">
      <DashboardBack link="/dashboard/user-universities">Back</DashboardBack>
    </div>
    <ScrollableTabs links={TABS} sideBarTitle="University profile">
      <Overview />
      <About />
      <Media />
    </ScrollableTabs>
  </>
)
