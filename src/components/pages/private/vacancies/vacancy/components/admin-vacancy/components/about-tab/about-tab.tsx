import {Loader, ScrollableTabs} from '@/components/common'
import {VacancyPageSections} from './constants/vacancy-page-sections'
import {AboutJob, Company, Overview, Skills} from './components'
import {useGetJobQuery} from '@/features/jobs'
import {Navigate, useParams} from 'react-router-dom'

export const AboutTab = () => {
  const {id} = useParams()
  const {data: {data: vacancy} = {}, isFetching} = useGetJobQuery({id: id as string})

  if (isFetching) {
    return (
      <div className="h-80 relative">
        <Loader className="absolute" />
      </div>
    )
  }

  if (!vacancy) {
    return <Navigate to="/dashboard/vacancies" />
  }

  return (
    <ScrollableTabs links={VacancyPageSections} sideBarTitle="Vacancy">
      <Overview vacancy={vacancy} />
      <AboutJob vacancy={vacancy} />
      <Skills vacancy={vacancy} />
      <Company vacancy={vacancy} />
    </ScrollableTabs>
  )
}
