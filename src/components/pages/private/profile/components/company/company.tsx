import {ScrollableTabs} from '@/components/common'
import {TABS} from './constants/tabs'
import {About, Overview} from './components'

export const CompanyProfile = () => (
  <ScrollableTabs links={TABS} sideBarTitle="Profile" topSize={160}>
    <Overview />
    <About />
  </ScrollableTabs>
)
