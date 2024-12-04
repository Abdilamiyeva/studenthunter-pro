import {TableCell} from '@/components/common/table/components'
import {TableRow} from '@/components/ui/table'
import {Props} from './types'
import {MailIcon, TrashIcon} from '@/icons'
import {DotsDropdown} from '@/components/common'
import {Link, useNavigate} from 'react-router-dom'
import {useDeleteVacancyMutation} from '@/features/jobs'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'

export const VacanyRow = ({index, vacancy}: Props) => {
  const [deleteVacany, {isLoading: isDeleting}] = useDeleteVacancyMutation()
  const navigate = useNavigate()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const formatSalary = (salary: number) => {
    if (salary >= 10000) {
      return `$${Math.floor(salary / 1000)}k`
    }
    return `$${salary.toLocaleString()}`
  }

  const onDelete = async () => {
    await handleRequest({
      request: async () => {
        const result = await deleteVacany({vacancyID: vacancy._id})
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'Vacancy successfully deleted!'})
      },
    })
  }

  return (
    <TableRow>
      <TableCell className="pr-2 pl-4 font-semibold text-xs">{index + 1}</TableCell>
      <TableCell>
        <div className="flex flex-col">
          <Link to={`/dashboard/vacancies/${vacancy._id}`}>
            <span className="font-bold text-sm cursor-pointer hover:text-blue-9 transition-colors">
              {vacancy.specialties}
            </span>
          </Link>
          <span className="text-xs font-normal text-blue-1">{`${vacancy.city}, ${vacancy.country}`}</span>
        </div>
      </TableCell>
      <TableCell>
        <span className="font-medium text-sm text-blue-1">{vacancy.company.title}</span>
      </TableCell>
      <TableCell>
        <span className="rounded-sm px-6 py-2 bg-green text-white font-bold">{vacancy.applicants_count}</span>
      </TableCell>
      <TableCell>
        <span className="font-medium text-sm text-blue-1">{vacancy.specialties}</span>
      </TableCell>
      <TableCell>
        <span className="text-sm font-semibold">{formatSalary(vacancy.salary)}</span>
      </TableCell>
      <TableCell>
        <div className="grid place-content-center">
          <DotsDropdown
            buttons={[
              {
                label: 'Message',
                icon: <MailIcon className="w-3.5 h-3.5" />,
                className: 'text-green hover:!text-green hover:!bg-green/10',
                onClick: () => navigate(`/dashboard/chat?tab=company&id=${vacancy.company._id}`),
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
