import {Breadcrumb, Loader} from '@/components/common'
import {AboutPrograms} from './components/about-programs'
import {Admission} from './components/admission'
import {Costs} from './components/costs'
import {VideosPhotos} from './components/videos-photos'
import {OverviewCard} from './components/overview'
import {ContactInfo} from './components/contact-info'
import {BreadcrumbData} from './constants/programs-about'
import {ProgramsFromUniversity} from './components/programs-from-university'
import {useGetPublicProgramQuery} from '@/features/programs'
import {Navigate, useParams} from 'react-router-dom'
import {ProgramsItemCard} from './components/programs-item-card'
import {PublicPrograms} from '@/types/program'

export const ProgramPage = () => {
  const {id: programId} = useParams()
  const {data: {data: program} = {}, isLoading} = useGetPublicProgramQuery({id: programId as string})

  if (isLoading) {
    return (
      <div className="h-80 relative">
        <Loader className=" absolute " />
      </div>
    )
  }

  if (!program) {
    return <Navigate to="/" />
  }

  return (
    <section className="pt-4 pb-7">
      <div className="px-4 md:container">
        <Breadcrumb links={[...BreadcrumbData, {label: program?.program as string}]} />
        <div className="lg:px-32">
          <ProgramsItemCard program={program as PublicPrograms} />
          <div className="flex flex-col-reverse md:flex-row lg:flex-nowrap gap-y-10 gap-x-[30px] mt-10">
            <div className="w-full lg:w-[71%]">
              <AboutPrograms program={program as PublicPrograms} />
              <Admission program={program as PublicPrograms} />
              <Costs program={program as PublicPrograms} />
              <VideosPhotos program={program as PublicPrograms} />
              <ProgramsFromUniversity />
            </div>
            <div className="w-full hidden md:block lg:w-[35%]">
              <OverviewCard program={program as PublicPrograms} />
              <ContactInfo program={program as PublicPrograms} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
