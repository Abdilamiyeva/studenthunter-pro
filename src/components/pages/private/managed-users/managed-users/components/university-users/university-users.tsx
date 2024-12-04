import {BoldTabs} from '@/components/common'
import {AcceptedUsers, RejectedUsers, ShortlistUsers} from './components'

export const UniversityUsers = () => (
  <BoldTabs
    tabs={[
      {label: 'Accepted', children: <AcceptedUsers />},
      {label: 'Rejected', children: <RejectedUsers />},
      {label: 'Shortlist', children: <ShortlistUsers />},
    ]}
  />
)
