import {Breadcrumb, Loader} from '@/components/common'
import {useMemo} from 'react'
import {CompanyItemCard} from './components/company-item-card'
import {AboutCompany} from './components/company'
import {ContactInformation} from './components/contact-information'
import {Vacancies} from './components/vacancies'
import {useGetPublicCompanyQuery} from '@/features/company'
import {useParams} from 'react-router-dom'
import {Navigate} from 'react-router-dom'

export const CompanyPage = () => {
  const {id: companyId} = useParams()
  const {data: {data: company} = {}, isLoading} = useGetPublicCompanyQuery({id: companyId as string})
  const BreadcrumbData = useMemo(
    () => [{label: 'Home', path: '/'}, {label: 'Vacancies', path: '/jobs'}, {label: company?.title || ''}],
    [company],
  )

  if (isLoading) {
    return (
      <div className="h-80 relative">
        <Loader className="absolute" />
      </div>
    )
  }

  if (!company) {
    return <Navigate to="/" />
  }

  return (
    <section>
      <div className="container py-6">
        <Breadcrumb links={BreadcrumbData} />
        <div className="px-4 my-10">
          <CompanyItemCard company={company} />
          <div className="flex items-stretch my-16 lg:flex-nowrap flex-wrap  justify-between gap-y-4 lg:gap-x-7 ">
            <div className="w-full lg:w-10/12">
              <AboutCompany company={company} />
            </div>
            <div className="w-full lg:w-1/4">
              <ContactInformation company={company} />
            </div>
          </div>
          <Vacancies />
        </div>
      </div>
    </section>
  )
}
