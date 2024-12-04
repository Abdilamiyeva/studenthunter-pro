import {BoldTabs} from '@/components/common'
import {CompaniesTab, UniversitiesTab, UsersTab} from '..'

export const AdminChat = () => (
  <section className="h-full flex flex-col">
    <BoldTabs
      tabs={[
        {label: 'Users', children: <UsersTab />},
        {label: 'Universities', children: <UniversitiesTab />},
        {label: 'Companies', children: <CompaniesTab />},
      ]}
    />
  </section>
)
