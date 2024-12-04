import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Avatar, DotsDropdown} from '@/components/common'
import {useMemo} from 'react'
import {cn} from '@/lib/utils'
import {MailIcon, TrashIcon} from '@/icons'
import {Link, useNavigate} from 'react-router-dom'
import {getImageURL} from '@/utils/get-image'
import {ConsultingContractStatus} from '@/constants/statusues'
import {useDeleteConsultingMutation} from '@/features/consulting/consulting'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'

export const ConsultingRow = ({index, consulting}: Props) => {
  const [deleteConsulting, {isLoading: isDeleting}] = useDeleteConsultingMutation()
  const handleRequest = useHandleRequest()
  const navigate = useNavigate()
  const {toast} = useToast()
  const themeClassNames = useMemo(() => {
    switch (consulting.contract) {
      case ConsultingContractStatus.INACTIVE:
        return 'bg-orange'
      case ConsultingContractStatus.ACITVE:
        return 'bg-green'
    }
  }, [consulting.contract])

  const onDelete = async () => {
    await handleRequest({
      request: async () => {
        const result = await deleteConsulting({consultingID: consulting._id})
        return result
      },
      onSuccess: () => {
        toast({title: 'Consulting successfully deleted!'})
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
      <TableCell className="text-sm font-semibold leading-5 text-center">{consulting.partners_count}</TableCell>
      <TableCell>
        <div className="grid place-content-center">
          <DotsDropdown
            buttons={[
              {
                label: 'Message',
                icon: <MailIcon className="w-3.5 h-3.5" />,
                className: 'text-green hover:!text-green hover:!bg-green/10',
                onClick: () => navigate(`/dashboard/chat?tab=consulting&id=${consulting._id}`),
              },
              {
                label: 'Delete',
                icon: <TrashIcon className="w-3.5 h-3.5" />,
                className: 'text-orange hover:!text-orange hover:!bg-orange/10',
                loaderClassName: 'border-orange',
                onClick: onDelete,
                loading: isDeleting,
              },
            ]}
          />
        </div>
      </TableCell>
    </TableRow>
  )
}
