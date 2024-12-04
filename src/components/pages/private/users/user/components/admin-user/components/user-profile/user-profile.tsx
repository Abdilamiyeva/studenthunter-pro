import {ScrollableTabs} from '@/components/common'
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
import {Props} from './types'

export const UserProfile = ({user}: Props) => (
  <ScrollableTabs links={TABS} sideBarTitle="User profile" topSize={290}>
    <PersonalInfo user={user} />
    <PassportInfo user={user} />
    <Education user={user} />
    <LicencesCertifications user={user} />
    <Achievements user={user} />
    <WorkExperience user={user} />
    <Resume user={user} />
    <Others user={user} />
  </ScrollableTabs>
)
