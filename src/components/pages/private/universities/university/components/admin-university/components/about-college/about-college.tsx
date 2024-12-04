import {TABS} from './constants'
import {About, Overview, VideosPhotos} from './components'
import {Loader, ScrollableTabs} from '@/components/common'
import {useGetUniversityQuery} from '@/features/university'
import {Navigate, useParams} from 'react-router-dom'

export const AboutCollege = () => {
  const params = useParams()
  const {data: {data: university} = {}, isFetching} = useGetUniversityQuery(params.id as string)

  if (isFetching) {
    return (
      <div className="h-80 relative">
        <Loader className="absolute" />
      </div>
    )
  }

  if (!university) {
    return <Navigate to="/dashboard/universities" />
  }

  return (
    <ScrollableTabs links={TABS} sideBarTitle="University profile">
      <Overview university={university} />
      <About university={university} />
      {/*
        MIGHT BE USED LATER ON:
        <AvailablePrograms /> 
        <Admission /> 
        <Costs />
      */}
      <VideosPhotos university={university} />
    </ScrollableTabs>
  )
}
