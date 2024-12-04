import {BoldTabs} from '@/components/common'
import {AdminTab, CompaniesTab, UniversitiesTab, UsersTab} from '..'

export const UserChat = () => (
  <section className="h-full flex flex-col">
    <BoldTabs
      tabs={[
        {label: 'Users', children: <UsersTab />},
        {label: 'Universities', children: <UniversitiesTab />},
        {label: 'Companies', children: <CompaniesTab />},
        {label: 'Admin', children: <AdminTab />},
      ]}
    />
  </section>
)
