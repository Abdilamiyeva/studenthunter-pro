import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Avatar, DotsDropdown} from '@/components/common'
import {StatusBtn} from './components'
import {MailIcon, TrashIcon, UserAvatar} from '@/icons'
import {Link, useNavigate} from 'react-router-dom'
import {getImageURL} from '@/utils/get-image'
import {getCertificateScore} from '@/utils/get-certificate-score/get-certificate-score'
import {useDeleteApplicantMutation} from '@/features/applicant/applicant'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'

export const UserRow = ({user, index}: Props) => {
  const [deleteApplicant, {isLoading: isDeleting}] = useDeleteApplicantMutation()
  const navigate = useNavigate()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onDelete = async () => {
    await handleRequest({
      request: async () => {
        const result = await deleteApplicant({applicantID: user._id})
        return result
      },
      onSuccess: () => {
        toast({
          title: 'Applicant successfully deleted!',
        })
      },
    })
  }

  return (
    <TableRow>
      <TableCell>
        <div className="grid place-content-center text-xs font-bold leading-5">{index}</div>
      </TableCell>
      <TableCell>
        <Link to={`/dashboard/users/${user._id}`} className="flex items-center gap-4 group">
          <Avatar
            src={getImageURL(user.image)}
            fullName={user.first_name + ' ' + user.last_name}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col gap-px">
            <p className="group-hover:text-sky-1 text-sm leading-5 font-bold duration-150">{user.first_name}</p>
            <p className="text-blue-2 text-xs leading-4">{user.last_name}</p>
          </div>
        </Link>
      </TableCell>
      <TableCell>
        <StatusBtn status={user.status} applicantID={user._id} />
      </TableCell>
      <TableCell className="text-center">
        <a href={`tel:${user.phone_number}`} className="text-sky-1 font-medium text-sm leading-5">
          {user.phone_number}
        </a>
      </TableCell>
      <TableCell className="text-center">N/A</TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">
        {getCertificateScore(user.certificates, 'IELTS')}
      </TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">
        {getCertificateScore(user.certificates, 'SAT')}
      </TableCell>
      <TableCell>
        <div className="grid place-content-center">
          <DotsDropdown
            buttons={[
              {
                label: 'Profile',
                icon: <UserAvatar className="w-5 h-5" />,
                onClick: () => navigate(`/dashboard/users/${user._id}`),
              },
              {
                label: 'Message',
                icon: <MailIcon className="w-3.5 h-3.5" />,
                className: 'text-green hover:!text-green hover:!bg-green/10',
                onClick: () => navigate(`/dashboard/chat?tab=user&id=${user._id}`),
              },
              {
                label: 'Delete',
                icon: <TrashIcon className="w-3.5 h-3.5" />,
                className: 'text-orange hover:!text-orange hover:!bg-orange/10',
                onClick: onDelete,
                loading: isDeleting,
                loaderClassName: 'border-orange',
              },
            ]}
          />
        </div>
      </TableCell>
    </TableRow>
  )
}
