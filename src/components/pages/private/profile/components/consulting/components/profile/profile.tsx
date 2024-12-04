import {ScrollableTabs} from '@/components/common'
import {TABS} from './constants/tabs'
import {About, Overview} from './components'

export const Profile = () => (
  <ScrollableTabs sideBarTitle="Profile" links={TABS} topSize={230}>
    <Overview />
    <About />
  </ScrollableTabs>
)
