import {TableRow} from '@/components/common/table/components'
import {TableCell} from '@/components/ui/table'
import {Props} from './types'
import {ProgramsIcon} from '@/icons'
import {DotsDropdown} from '@/components/common'
import {TrashIcon} from '@radix-ui/react-icons'
import {useNavigate} from 'react-router-dom'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useDeleteFacultyMutation} from '@/features/faculty'
import {useToast} from '@/components/ui/use-toast'

export const FacultyRow = ({index, faculty}: Props) => {
  const [deleteFaculty, {isLoading: isDeleting}] = useDeleteFacultyMutation()
  const navigate = useNavigate()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onDelete = async () => {
    await handleRequest({
      request: async () => {
        const result = await deleteFaculty({universityFacultyID: faculty._id})
        return result
      },
      onSuccess: () => {
        toast({
          title: 'Faculty successfully deleted!',
        })
      },
    })
  }

  return (
    <TableRow>
      <TableCell className="text-blue text-xs font-semibold leading-5 pl-4 py-7">{index + 1}</TableCell>
      <TableCell className="text-sm font-semibold leading-6 text-blue pl-4">{faculty.program}</TableCell>
      <TableCell className="text-sm font-normal leading-6 text-blue-1 pl-6">{faculty.level}</TableCell>
      <TableCell className="text-right">
        <p className="text-sm font-medium leading-5 ">${faculty.fee || 0}</p>
        <p className="text-[10px] font-normal leading-3">yearly</p>
      </TableCell>
      <TableCell className="text-center">N/A</TableCell>
      <TableCell className="text-center">N/A</TableCell>
      <TableCell className="text-center">N/A</TableCell>
      <TableCell>
        <div className="grid place-content-center">
          <DotsDropdown
            contentClassName="w-36"
            buttons={[
              {
                label: 'View Program',
                icon: <ProgramsIcon className="w-3.5 h-3.5" />,
                onClick: () => navigate(`/programs/${faculty._id}`),
              },
              {
                label: 'Delete',
                icon: <TrashIcon className="w-3.5 h-3.5" />,
                className: 'text-orange hover:!text-orange hover:!bg-orange/10',
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
