import {Loader, ScrollableTabs} from '@/components/common'
import {TABS} from './constants/tabs'
import {About, Overview} from './components'
import {useGetConsultingQuery} from '@/features/consulting/consulting'
import {Navigate, useParams} from 'react-router-dom'

export const ConsultingProfile = () => {
  const {id} = useParams()
  const {data: {data: consulting} = {}, isFetching} = useGetConsultingQuery({consultingID: id as string})

  if (isFetching) {
    return (
      <div className="relative h-80">
        <Loader className="absolute" />
      </div>
    )
  }

  if (!consulting) {
    return <Navigate to="/dashboard/consultings" />
  }

  return (
    <ScrollableTabs sideBarTitle="Profile" links={TABS} topSize={230}>
      <Overview consulting={consulting} />
      <About consulting={consulting} />
    </ScrollableTabs>
  )
}
