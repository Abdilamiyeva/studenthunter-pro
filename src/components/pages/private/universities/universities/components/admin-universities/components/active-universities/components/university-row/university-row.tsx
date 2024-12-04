import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Avatar, DotsDropdown} from '@/components/common'
import {MailIcon, TrashIcon, UserAvatar} from '@/icons'
import {Link, useNavigate} from 'react-router-dom'
import {getImageURL} from '@/utils/get-image'
import {useChangeUniversityStatusMutation} from '@/features/university'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {UniversityStatus} from '@/constants/statusues'
import {useToast} from '@/components/ui/use-toast'

export const UniversityRow = ({university, index}: Props) => {
  const [changeStatus, {isLoading: isArchiving}] = useChangeUniversityStatusMutation()
  const navigate = useNavigate()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onArchive = async () => {
    await handleRequest({
      request: async () => {
        const result = await changeStatus({
          universityID: university._id,
          params: {
            status: UniversityStatus.ARCHIVED,
          },
        })
        return result
      },
      onSuccess: () => {
        toast({
          title: 'University successfully archived!',
        })
      },
    })
  }

  return (
    <TableRow>
      <TableCell className="text-blue text-xs font-semibold leading-5 pl-4">{index + 1}</TableCell>
      <TableCell className="text-left">
        <Link to={`/dashboard/universities/${university._id}`} className="group">
          <div className="flex items-center gap-x-4">
            <div>
              <Avatar src={getImageURL(university.logo)} fullName={university.title} className="w-10 h-10" />
            </div>
            <div className="flex flex-col ">
              <span className="text-sm font-bold leading-5 mb-1 group-hover:text-sky duration-default">
                {university.title}
              </span>
              <span className="text-blue-2 text-xs font-normal leading-4">{university.country}</span>
            </div>
          </div>
        </Link>
      </TableCell>
      <TableCell className="text-center text-sm font-medium leading-7">
        <div className="inline-block px-3 w-20 rounded-sm text-center bg-green text-white">Active</div>
      </TableCell>
      <TableCell className="text-center">
        <div className={`inline-block py-1 w-20 rounded-sm text-center bg-green text-white`}>
          +{university.applicationsCount || 0}
        </div>
      </TableCell>
      <TableCell className="text-center text-xs font-semibold leading-5">{university.faculties.length}</TableCell>
      <TableCell className="text-center text-xs font-semibold leading-5">
        {university.applicationsCount || Math.floor(Math.random() * 500)}
      </TableCell>
      <TableCell className="text-center text-xs font-semibold leading-5">
        <DotsDropdown
          buttons={[
            {
              label: 'Profile',
              icon: <UserAvatar className="w-5 h-5" />,
              onClick: () => navigate(`/dashboard/universities/${university._id}`),
            },
            {
              label: 'Message',
              icon: <MailIcon className="w-4 h-4 text-green" />,
              className: 'text-green hover:!text-green hover:!bg-green/10',
              onClick: () => navigate(`/dashboard/chat?tab=university&id=${university._id}`),
            },
            {
              label: 'Archive',
              icon: <TrashIcon className="w-4 h-4 text-orange" />,
              className: 'text-orange hover:!text-orange hover:!bg-orange/10',
              loaderClassName: 'border-orange',
              loading: isArchiving,
              onClick: onArchive,
            },
          ]}
        />
      </TableCell>
    </TableRow>
  )
}
