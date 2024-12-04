import {useGetPublicJobsQuery} from '@/features/jobs'
import {JobCard} from './components/job-card/job-card'

export const Vacancies = () => {
  const {data: {data: jobs} = {}} = useGetPublicJobsQuery({data: encodeURIComponent(JSON.stringify({per_page: 5}))})

  return (
    <div className="lg:mr-36">
      <h1 className="text-xl text-blue font-bold leading-8 mb-4">Open Vacancies</h1>
      {jobs?.map(job => <JobCard key={job._id} job={job} />)}
    </div>
  )
}
