import {Button, DashboardBack, ScrollableTabs} from '@/components/common'
import {DownloadIcon} from '@/icons'
import {TABS} from './constants/tabs'
import {
  Achievements,
  Education,
  LicencesCertifications,
  Others,
  PassportInfo,
  PersonalInfo,
  Resume,
  WorkExperience,
} from './components'

export const CompanyUser = () => (
  <>
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-9 gap-y-3">
      <DashboardBack link="/dashboard/users/company/saved/user-id">Back to all saved users</DashboardBack>
      <Button
        theme="orange"
        icon={<DownloadIcon className="w-4 h-4" />}
        className="bg-orange-6 border-orange-6 hover:bg-orange-6/90 text-sm font-bold leading-6 px-4 py-2"
      >
        Download
      </Button>
    </div>
    <ScrollableTabs links={TABS} sideBarTitle="User profile" topSize={240}>
      <PersonalInfo />
      <PassportInfo />
      <Education />
      <LicencesCertifications />
      <Achievements />
      <WorkExperience />
      <Resume />
      <Others />
    </ScrollableTabs>
  </>
)
