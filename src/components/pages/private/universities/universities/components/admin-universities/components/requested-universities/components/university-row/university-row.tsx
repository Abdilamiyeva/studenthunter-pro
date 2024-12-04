import {TableRow, TableCell} from '@/components/common/table/components'
import {Props} from './types'
import {Avatar, Button} from '@/components/common'
import {CheckIcon, XIcon} from '@/icons'
import {Link} from 'react-router-dom'
import {getImageURL} from '@/utils/get-image'
import {useState} from 'react'
import {ConfirmForm} from './components'
import {useRejectMemberMutation} from '@/features/auth'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {Role} from '@/constants/roles'
import {useToast} from '@/components/ui/use-toast'

export const UniversityRow = ({index, university}: Props) => {
  const [rejectMember, {isLoading: isRejecting}] = useRejectMemberMutation()
  const [openConfirmForm, setOpenConfirmForm] = useState(false)
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onReject = async () => {
    await handleRequest({
      request: async () => {
        const result = await rejectMember({
          member_id: university._id,
          role: Role.UNIVERSITY,
        })

        return result
      },
      onSuccess: () => {
        toast({
          title: 'University successfully rejected!',
        })
      },
    })
  }

  return (
    <TableRow>
      <TableCell className="text-blue text-xs font-semibold leading-5 pl-4">{index + 1}</TableCell>
      <TableCell>
        <Link to={`/dashboard/universities/${university._id}`} className="group">
          <div className="flex items-center gap-x-4">
            <div>
              <Avatar src={getImageURL(university.logo)} fullName={university.title} />
            </div>
            <div className="flex flex-col ">
              <span className="text-sm font-bold leading-8 group-hover:text-sky duration-default">
                {university.title}
              </span>
              <span className="text-blue-2 text-xs font-normal leading-4">
                {university.country} {university.city}
              </span>
            </div>
          </div>
        </Link>
      </TableCell>
      <TableCell className="text-center">
        {university.phone_number ? (
          <a href={`tel:${university.phone_number}`} className="text-sky hover:text-sky/90 duration-100">
            {university.phone_number}
          </a>
        ) : (
          <div className="inline-block text-orange px-2 bg-orange-8 text-xs font-bold leading-5 rounded">Not set</div>
        )}
      </TableCell>
      <TableCell className="text-center">
        {university.faculties.length || (
          <div className="inline-block text-orange px-2 bg-orange-8 text-xs font-bold leading-5 rounded">Not set</div>
        )}
      </TableCell>
      <TableCell className="text-center">
        <div className="inline-block">
          <Button
            onClick={() => setOpenConfirmForm(true)}
            icon={<CheckIcon className="w-3.5 h-3.5" />}
            className="py-2 px-3 rounded"
          >
            Confirm
          </Button>
        </div>
        <ConfirmForm open={openConfirmForm} close={() => setOpenConfirmForm(false)} memberID={university._id} />
      </TableCell>
      <TableCell className="text-center">
        <div className="inline-block">
          <Button
            onClick={onReject}
            loading={isRejecting}
            theme="orange"
            icon={<XIcon className="w-3.5 h-3.5" />}
            className="py-2 px-3 bg-orange border-none hover:bg-orange/90 rounded"
          >
            Reject
          </Button>
        </div>
      </TableCell>
    </TableRow>
  )
}
