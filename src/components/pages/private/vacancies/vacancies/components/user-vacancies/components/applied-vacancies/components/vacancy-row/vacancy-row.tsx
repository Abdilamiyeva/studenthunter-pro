import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {useMemo} from 'react'
import {cn} from '@/lib/utils'
import {Button, DotsDropdown} from '@/components/common'
import {EditIcon, MailIcon, TrashIcon} from '@/icons'
import {Link} from 'react-router-dom'

export const VacancyRow = ({index}: Props) => {
  const status = useMemo<0 | 1 | 2>(() => (index % 2 === 0 ? 0 : 1), [index])
  const statusThemeClassNames = useMemo(() => {
    switch (status) {
      case 0:
        return 'bg-orange-10 text-orange-6'
      case 1:
        return 'bg-green-4 text-green'
      case 2:
        return 'bg-orange-11 text-orange'
    }
  }, [status])

  return (
    <TableRow>
      <TableCell className="text-xs font-semibold leading-5">{index + 1}</TableCell>
      <TableCell>
        <Link to="/dashboard/vacancies/user/vacancy-id" className="group">
          <h5 className="text-sm font-bold leading-5 group-hover:text-sky-1 duration-default">Graphic Designer</h5>
          <p className="text-blue-1 text-xs leading-4">Boston, USA</p>
        </Link>
      </TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5">Elliassen Group</TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5">Arts & Illustration</TableCell>
      <TableCell>
        <div
          className={cn(
            'max-w-[92px] mx-auto rounded text-center py-0.5 text-sm font-bold leading-5',
            statusThemeClassNames,
          )}
        >
          {
            {
              0: 'In process',
              1: 'Applied',
              2: 'Cancelled',
            }[status]
          }
        </div>
      </TableCell>
      <TableCell>
        <Button
          variant="outline"
          icon={<MailIcon className="w-4 h-4" />}
          className="text-sm font-bold leading-5 px-4 py-2 rounded flex items-center w-max mx-auto"
        >
          Message
        </Button>
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
