import {DashboardBack, ScrollableTabs} from '@/components/common'
import {TABS} from './constants/tabs'
import {About, Admission, Costs, Overview} from './components'

export const UniversityProgram = () => (
  <>
    <DashboardBack link="/dashboard/programs">Back to all program</DashboardBack>
    <div className="mt-9">
      <ScrollableTabs links={TABS} sideBarTitle="Program">
        <Overview />
        <About />
        <Admission />
        <Costs />
      </ScrollableTabs>
    </div>
  </>
)
