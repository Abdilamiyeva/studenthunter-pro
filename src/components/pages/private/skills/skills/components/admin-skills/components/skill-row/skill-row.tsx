import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {DotsDropdown} from '@/components/common'
import {Link} from 'react-router-dom'
import {TrashIcon} from '@radix-ui/react-icons'
import {useDeleteSkillMutation} from '@/features/skills'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'

export const SkillRow = ({index, skill}: Props) => {
  const [deleteSkill, {isLoading: isDeleting}] = useDeleteSkillMutation()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onDelete = async () => {
    await handleRequest({
      request: async () => {
        const result = await deleteSkill({skillID: skill._id})
        return result
      },
      onSuccess: () => {
        toast({title: 'Skill successfully deleted!'})
      },
    })
  }

  return (
    <TableRow>
      <TableCell className="text-blue text-xs font-semibold leading-5 pl-4">{index + 1}</TableCell>
      <TableCell className="pl-4 font-bold leading-6 text-blue text-sm w-80">
        <Link to={`/dashboard/skills/${skill._id}`}>{skill.title}</Link>
      </TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 pl-8">{skill.categories.join(', ')}</TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">{skill.created_by}</TableCell>
      <TableCell className="text-blue text-sm font-semibold leading-5 text-center">${skill.price}</TableCell>
      <TableCell className="text-right px-5">
        <div className="grid place-content-center">
          <DotsDropdown
            buttons={[
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
