import {TableCell} from '@/components/common/table/components'
import {TableRow} from '@/components/ui/table'
import {Props} from './types'
import {EditIcon, TrashIcon} from '@/icons'
import {DotsDropdown} from '@/components/common'
import {Link} from 'react-router-dom'

const salaryTypeMap = {
  monthly: 'per month',
  yearly: 'per year',
}

export const VacancyRow = ({index, vacancy}: Props) => {
  const formatSalary = (salary: number) => {
    if (salary >= 10000) {
      return `$${Math.floor(salary / 1000)}k`
    }
    return `$${salary.toLocaleString()}`
  }
  return (
    <TableRow>
      <TableCell className="pr-2 pl-4 font-semibold text-xs">{index + 1}</TableCell>
      <TableCell>
        <div className="flex flex-col">
          <Link to={`/dashboard/vacancies/${vacancy.id}`}>
            <span className="font-bold text-sm cursor-pointer hover:text-blue-9 transition-colors">
              {vacancy?.title}
            </span>
          </Link>
          <span className="text-xs font-normal text-blue-1">{`${vacancy?.city}, ${vacancy?.country}`}</span>
        </div>
      </TableCell>
      <TableCell>
        <span className="font-medium text-sm text-blue-1">{vacancy?.company}</span>
      </TableCell>
      <TableCell>
        <span className="rounded-sm px-6 py-2 bg-green text-white font-bold">
          {vacancy?.applications || 1 > 0 ? '+' : ''}
          {vacancy?.applications}
        </span>
      </TableCell>
      <TableCell>
        <span className="font-medium text-sm text-blue-1">{vacancy?.specialities}</span>
      </TableCell>
      <TableCell>
        <div className="flex flex-col">
          {vacancy.salary_type === 'negotiable' ? (
            <span className="text-sm font-semibold capitalize">{vacancy.salary_type}</span>
          ) : (
            <>
              <span className="text-sm font-semibold">{formatSalary(vacancy?.salary)}</span>
              <span className="text-xs font-normal text-blue-1">{salaryTypeMap[vacancy?.salary_type]}</span>
            </>
          )}
        </div>
      </TableCell>
      <TableCell>
        <div className="grid place-content-center">
          <DotsDropdown
            buttons={[
              {
                label: 'Delete',
                icon: <TrashIcon className="w-3.5 h-3.5" />,
                className: 'text-orange hover:!text-orange hover:!bg-orange/10',
              },
              {
                label: 'Edit',
                icon: <EditIcon className="w-3.5 h-3.5" />,
                className: 'text-green hover:!text-green hover:!bg-green/10',
              },
            ]}
          />
        </div>
      </TableCell>
    </TableRow>
  )
}
