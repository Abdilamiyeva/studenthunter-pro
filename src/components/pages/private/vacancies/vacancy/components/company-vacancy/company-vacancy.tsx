import {ScrollableTabs} from '@/components/common'
import {VacancyPageSections} from './constants/vacancy-page-sections'
import {AboutJob, Overview, Skills} from './components'

export const CompanyVacancy = () => (
  <ScrollableTabs links={VacancyPageSections} sideBarTitle="Vacancy" topSize={156}>
    <Overview />
    <AboutJob />
    <Skills />
  </ScrollableTabs>
)
