import {BoldTabs} from '@/components/common'
import {AcceptedUsers, RejectedUsers, ShortlistedUsers} from './components'

export const CompanyUsers = () => (
  <>
    <BoldTabs
      tabs={[
        {label: 'Accepted', children: <AcceptedUsers />},
        {label: 'Rejected', children: <RejectedUsers />},
        {label: 'Shortlist', children: <ShortlistedUsers />},
      ]}
    />
  </>
)
