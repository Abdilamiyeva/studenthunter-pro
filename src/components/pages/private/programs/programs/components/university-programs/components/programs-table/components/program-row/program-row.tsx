import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Link} from 'react-router-dom'
import {DotsDropdown} from '@/components/common'
import {EditIcon, TrashIcon} from '@/icons'

export const ProgramRow = ({index}: Props) => (
  <TableRow>
    <TableCell className="text-center text-xs font-semibold leading-5">{index + 1}</TableCell>
    <TableCell>
      <Link
        to="/dashboard/programs/program-id"
        className="text-sm font-semibold leading-5 hover:text-sky-1 duration-default"
      >
        Web design
      </Link>
    </TableCell>
    <TableCell className="text-blue-1 text-sm leading-5">Faculty of Arts</TableCell>
    <TableCell>
      <div className="flex flex-col text-end">
        <p className="text-sm font-semibold leading-5">$55,000</p>
        <span className="text-blue-1 text-xss leading-3">yearly</span>
      </div>
    </TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">5.5</TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">1450</TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">Sep 28, 2023</TableCell>
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
