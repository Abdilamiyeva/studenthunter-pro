import {Button} from '@/components/common'
import {VacancyCard} from './components'
import {useNavigate} from 'react-router-dom'
import {useGetPublicJobsQuery} from '@/features/jobs'
import {Job} from '@/types/job'

export const Vacancies = () => {
  const navigate = useNavigate()
  const {data: {data: jobs} = {}} = useGetPublicJobsQuery({data: encodeURIComponent(JSON.stringify({per_page: 5}))})

  return (
    <section id="vacancies" className="px-4 md:container mx-auto mt-14 md:mt-36 mb-20">
      <h2 className="text-4xl md:text-[50px] leading-9 md:leading-17 font-bold text-center">Vacancies of the day</h2>
      <p className="text-sm md:text-2xl leading-6 md:leading-8.5 text-blue-1 text-center mt-2 md:mt-3 pb-7 md:pb-14">
        Apply for unlimited number of latest vacancies
      </p>
      <div className="w-full mb-[50px]">
        <div className="items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {jobs?.map((vacancy: Job) => <VacancyCard key={vacancy._id} vacancy={vacancy} />)}
        </div>
      </div>
      <Button
        onClick={() => navigate('/jobs')}
        variant="outline"
        className="hidden md:block mx-auto text-2xl leading-8.5 px-14 py-3.5 border-2 border-blue bg-transparent"
      >
        View More
      </Button>
    </section>
  )
}
