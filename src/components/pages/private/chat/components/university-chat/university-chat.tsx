import {BoldTabs} from '@/components/common'
import {AdminTab, UsersTab} from '..'

export const UniversityChat = () => (
  <section className="h-full flex flex-col">
    <BoldTabs
      tabs={[
        {label: 'Users', children: <UsersTab />},
        {label: 'Admin', children: <AdminTab />},
      ]}
    />
  </section>
)