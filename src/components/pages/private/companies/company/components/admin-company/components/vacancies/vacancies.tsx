import {Props} from './types'
import {VacancyCard} from './components'

export const Vacancies = ({company}: Props) => (
  <section id="vacancies" className="section mt-10 md:mt-20">
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
      <h5 className="text-xl font-bold leading-7.5">Vacancies</h5>
      {/*
        MIGHT BE USED LATER ON:
          <Button
            icon={<EditIcon className="w-3 h-3" />}
            className="w-full sm:w-auto px-7 py-1 rounded text-sm font-bold leading-6 mt-2 sm:mt-0"
          >
            Edit
          </Button>
      */}
    </div>
    <div className="flex flex-col gap-10">
      {company.vacancies?.length ? (
        company.vacancies?.map(vacancy => <VacancyCard key={vacancy._id} vacancy={vacancy} company={company} />)
      ) : (
        <p className="text-xs text-blue-2 text-center my-8">No any vacancies yet...</p>
      )}
    </div>
  </section>
)
