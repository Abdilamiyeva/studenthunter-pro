import {DashboardBack, Loader, ScrollableTabs} from '@/components/common'
import {TABS} from './constants/tabs'
import {About, Overview, Vacancies} from './components'
import {Navigate, useParams} from 'react-router-dom'
import {useGetCompanyQuery} from '@/features/company'

export const AdminCompany = () => {
  const {id} = useParams()
  const {data: {data: company} = {}, isFetching} = useGetCompanyQuery({companyID: id as string})

  if (isFetching) {
    return (
      <div className="relative h-80">
        <Loader className="absolute" />
      </div>
    )
  }

  if (!company) {
    return <Navigate to="/dashboard/companies" />
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-7 gap-y-3">
        <DashboardBack link="/dashboard/companies">Back to all companies</DashboardBack>
      </div>
      <ScrollableTabs links={TABS} sideBarTitle="Company profile" topSize={210}>
        <Overview company={company} />
        <About company={company} />
        <Vacancies company={company} />
      </ScrollableTabs>
    </div>
  )
}
