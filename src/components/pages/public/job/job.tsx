import {JobItemCard} from './components/job-item-card'
import {AboutJob} from './components/about-job'
import {DetailCard} from './components/details-card'
import {AboutCompany} from './components/company'
import {Breadcrumb} from '@/components/common/breadcrumb'
import {Skills} from './components/skills/skills'
import {useGetJobQuery} from '@/features/jobs'
import {Navigate, useParams} from 'react-router-dom'
import {Loader} from '@/components/common'
import {JobBreadCrumb} from './constants'

export const JobPage = () => {
  const {id: jobId} = useParams()
  const {data: {data: job} = {}, isLoading} = useGetJobQuery({id: jobId as string})
  if (isLoading) {
    return (
      <div className="h-80 relative">
        <Loader className="absolute" />
      </div>
    )
  }

  if (!job) {
    return <Navigate to="/" />
  }

  return (
    <section className="bg-white w-full">
      <div className="container py-8 flex flex-col gap-y-4">
        <Breadcrumb links={[...JobBreadCrumb, {label: job?.job_title || ''}]} />
        <div className="container px-4 md:px-10 flex flex-col">
          <JobItemCard vacancy={job} />
          <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2 lg:grid-cols-3 ">
            <div className="md:col-span-2">
              <div className="flex flex-col">
                <AboutJob vacancy={job} />
                <Skills vacancy={job} />
                <AboutCompany vacancy={job} />
              </div>
            </div>
            <div>
              <DetailCard vacancy={job} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
