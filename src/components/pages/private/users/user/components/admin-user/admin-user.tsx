import {BoldTabs, Button, DashboardBack, Loader} from '@/components/common'
import {DownloadIcon} from '@/icons'
import {UserUniversities, UserProfile} from './components'
import {Navigate, useParams} from 'react-router-dom'
import {useGetApplicantQuery} from '@/features/applicant/applicant'
import {useToast} from '@/components/ui/use-toast'

export const AdminUser = () => {
  const {id} = useParams()
  const {data: {data: user} = {}, isFetching: isFetchingUser} = useGetApplicantQuery({applicantID: id as string})
  const {toast} = useToast()

  if (isFetchingUser) {
    return (
      <div className="h-80 relative">
        <Loader className="absolute" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/dashboard/users" />
  }

  return (
    <>
      <DashboardBack link="/dashboard/users">Back to all users</DashboardBack>
      <BoldTabs
        tabs={[
          {label: 'User Profile', children: <UserProfile user={user} />},
          {label: 'User Colleges', children: <UserUniversities userID={user._id} />},
          // {label: 'User Companies', children: <UserCompanies userID={user._id} />},
          // {label: 'User Vacancies', children: <UserVacancies userID={user._id} />},
        ]}
        leftSideContent={
          <div className="flex flex-col sm:flex-row w-full xl:w-auto justify-end">
            <Button
              onClick={() => toast({title: 'Download featrue coming soon!'})}
              theme="orange"
              icon={<DownloadIcon className="w-4 h-4" />}
              className="bg-orange-6 border-orange-6 hover:bg-orange-6/90 text-sm font-bold leading-6 px-4 py-2"
            >
              Download
            </Button>
          </div>
        }
        tabsClassName="flex flex-wrap xl:flex-nowrap items-start justify-between gap-3 mt-6"
      />
    </>
  )
}
