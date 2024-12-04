import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Link} from 'react-router-dom'
import {DotsDropdown, Image} from '@/components/common'
import {useMemo} from 'react'
import {cn} from '@/lib/utils'
import {EditIcon, TrashIcon} from '@/icons'

export const UniversityRow = ({index}: Props) => {
  const status = useMemo(() => (index % 2 === 0 ? 0 : 1), [index])
  const themeClassNames = useMemo(() => {
    switch (status) {
      case 0:
        return 'bg-orange'
      case 1:
        return 'bg-green'
    }
  }, [status])

  return (
    <TableRow>
      <TableCell className="text-blue text-xs font-semibold leading-5 pl-4">{index + 1}</TableCell>
      <TableCell className="text-left">
        <Link to="/dashboard/universities/university-id">
          <div className="flex items-center gap-x-4">
            <div>
              <Image src="/images/demo-company.svg" alt="Demo university" />
            </div>
            <div className="flex flex-col ">
              <span className="text-sm font-bold leading-8">Hult International University</span>
              <span className="text-blue-1 text-xs leading-4">Boston, Cambridge, United States</span>
            </div>
          </div>
        </Link>
      </TableCell>
      <TableCell className="text-center text-sm font-medium leading-7">
        <div
          className={cn('px-3 py-0.5 rounded text-white text-sm font-medium leading-5 w-max mx-auto', themeClassNames)}
        >
          {
            {
              0: 'Inactive',
              1: 'Active',
            }[status]
          }
        </div>
      </TableCell>
      <TableCell className="text-center">
        <div className="min-w-[74px] w-max text-center mx-auto py-1 rounded text-sm font-bold leading-5 bg-green text-white">
          +1450
        </div>
      </TableCell>
      <TableCell className="text-center text-xs font-semibold leading-5">25</TableCell>
      <TableCell className="text-center text-xs font-semibold leading-5">184</TableCell>
      <TableCell className="text-center text-xs font-semibold leading-5">
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
