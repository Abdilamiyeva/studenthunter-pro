import {VacanciesTable} from './components'

export const AdminVacancies = () => (
  <section className="h-full flex flex-col ">
    <h1 className="text-3xl sm:text-4xl font-bold pb-4 sm:pb-8">Vacancies</h1>
    <VacanciesTable />
  </section>
)
