import {Button, DashboardBack, ScrollableTabs} from '@/components/common'
import {UniversityIcon} from '@/icons'
import {TABS} from './constants/tabs'
import {About, Overview, Vacancies} from './components'

export const UserCompany = () => (
  <>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-7 gap-y-3">
      <DashboardBack link="/dashboard/companies/user">Back to all saved companies</DashboardBack>
      <Button
        theme="orange"
        icon={<UniversityIcon className="w-4 h-4" />}
        className="bg-orange-6 border-orange-6 hover:bg-orange-6/90 px-7 py-2 text-sm font-bold leading-6"
      >
        &nbsp;Explore more colleges
      </Button>
    </div>
    <ScrollableTabs links={TABS} sideBarTitle="Company profile">
      <Overview />
      <About />
      <Vacancies />
    </ScrollableTabs>
  </>
)
