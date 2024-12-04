import {BoldTabs} from '@/components/common'
import {Profile, Universities} from './components'

export const ConsultingProfile = () => (
  <BoldTabs
    tabs={[
      {label: 'My Profile', children: <Profile />},
      {label: 'My Colleges', children: <Universities />},
    ]}
  />
)
