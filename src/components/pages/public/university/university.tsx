import {Breadcrumb} from '@/components/common/breadcrumb'
import {BreadcrumbData} from './constants/university-about'
import {UniversityItemCard} from './components/university-item-card'
import {AboutUniversity} from './components/about-university'
import {OverviewCard} from './components/overview'
import {AvailablePrograms} from './components/available-programs'
import {Admission} from './components/admission'
import {Costs} from './components/costs'
import {VideosPhotos} from './components/videos-photos'
import {ContactInfo} from './components/contact-info'
import {Navigate, useParams} from 'react-router-dom'
import {University} from '@/types/university'
import {useGetUniversityQuery} from '@/features/university'
import {Loader} from '@/components/common'
import {useState} from 'react'

export const UniversityPage = () => {
  const {id} = useParams()
  const [selectProgram, setSelectProgram] = useState('')
  const {data: university, isLoading} = useGetUniversityQuery(id as string)

  if (isLoading) {
    return (
      <div className="relative h-80 ">
        <Loader className="absolute" />
      </div>
    )
  }
  if (!university) {
    return <Navigate to="/" />
  }

  return (
    <section className="pt-4 pb-7">
      <div className="px-4 md:container">
        <Breadcrumb links={[...BreadcrumbData, {label: university?.data.title || '', path: ''}]} />
        <div className="lg:px-32">
          <UniversityItemCard selectProgram={selectProgram} universityItem={university?.data as University} />
          <div className="flex flex-col-reverse md:flex-row lg:flex-nowrap gap-9 mt-10">
            <div className="w-full lg:w-[66%]">
              <AboutUniversity aboutuniversity={university?.data as University} />
              <AvailablePrograms selectProgram={selectProgram} setSelectProgram={setSelectProgram} />
              <Admission universityItem={university?.data as University} />
              <Costs selectProgram={selectProgram} university={university.data} />
              <VideosPhotos videosphotos={university?.data as University} />
            </div>
            <div className="w-full lg:w-[33%] rounded-2xl border border-blue-4 md:rounded-none md:border-none">
              <OverviewCard overview={university?.data as University} />
              <ContactInfo contact={university?.data as University} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
