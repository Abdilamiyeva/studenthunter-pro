import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Avatar, Button} from '@/components/common'
import {CheckIcon, XIcon} from '@/icons'
import {Link} from 'react-router-dom'
import {getImageURL} from '@/utils/get-image'
import {useMemo, useState} from 'react'
import {ConsultingContractStatus} from '@/constants/statusues'
import {cn} from '@/lib/utils'
import {ConfirmForm} from './components'
import {useRejectMemberMutation} from '@/features/auth'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {Role} from '@/constants/roles'

export const ConsultingRow = ({index, consulting}: Props) => {
  const [rejectMember, {isLoading: isRejecting}] = useRejectMemberMutation()
  const [openConfirmForm, setOpenConfirmForm] = useState(false)
  const handleRequest = useHandleRequest()
  const {toast} = useToast()
  const themeClassNames = useMemo(() => {
    switch (consulting.contract) {
      case ConsultingContractStatus.INACTIVE:
        return 'bg-orange'
      case ConsultingContractStatus.ACITVE:
        return 'bg-green'
    }
  }, [consulting.contract])

  const onReject = async () => {
    await handleRequest({
      request: async () => {
        const result = await rejectMember({
          member_id: consulting._id,
          role: Role.CONSULTING,
        })

        return result
      },
      onSuccess: () => {
        toast({
          title: 'Consulting successfully rejected!',
        })
      },
    })
  }

  return (
    <TableRow>
      <TableCell className="text-center text-xs font-semibold leading-5">{index + 1}</TableCell>
      <TableCell>
        <Link to={`/dashboard/consultings/${consulting._id}`} className="flex items-center gap-4 group">
          <Avatar src={getImageURL(consulting.logo)} fullName={consulting.title} />
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-semibold leading-5 group-hover:text-sky-1 duration-default">
              {consulting.title}
            </p>
            <p className="text-blue-1 text-xs leading-4">{consulting.phone_number}</p>
          </div>
        </Link>
      </TableCell>
      <TableCell>
        <div
          className={cn('px-3 py-0.5 rounded text-white text-sm font-medium leading-5 w-max mx-auto', themeClassNames)}
        >
          {
            {
              [ConsultingContractStatus.INACTIVE]: 'Inactive',
              [ConsultingContractStatus.ACITVE]: 'Active',
            }[consulting.contract]
          }
        </div>
      </TableCell>
      <TableCell>
        <div className="min-w-[74px] w-max text-center mx-auto py-1 rounded text-sm font-bold leading-5 bg-green text-white">
          +{consulting.partners_count}
        </div>
      </TableCell>
      <TableCell>
        <Button
          onClick={() => setOpenConfirmForm(true)}
          icon={<CheckIcon className="w-3 h-3" />}
          className="text-sm font-bold leading-5 px-3 py-2 rounded w-max mx-auto"
        >
          Confirm
        </Button>
        <ConfirmForm open={openConfirmForm} close={() => setOpenConfirmForm(false)} memberID={consulting._id} />
      </TableCell>
      <TableCell>
        <Button
          loading={isRejecting}
          onClick={onReject}
          icon={<XIcon className="w-3 h-3" />}
          theme="orange"
          className="text-sm font-bold leading-5 px-3 py-2 rounded w-max mx-auto"
        >
          Reject
        </Button>
      </TableCell>
    </TableRow>
  )
}
