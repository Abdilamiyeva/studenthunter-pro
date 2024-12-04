import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Button} from '@/components/common'
import {MailIcon} from '@/icons'
import {Link} from 'react-router-dom'

export const VacancyRow = ({index}: Props) => (
  <TableRow>
    <TableCell className="text-xs font-semibold leading-5">{index + 1}</TableCell>
    <TableCell>
      <Link to="/dashboard/vacancies/user/vacancy-id" className="group">
        <h5 className="text-sm font-bold leading-5 group-hover:text-sky-1 duration-default">Graphic Designer</h5>
        <p className="text-blue-1 text-xs leading-4">Boston, USA</p>
      </Link>
    </TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">Elliassen Group</TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">Arts & Illustration</TableCell>
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
      <Button
        theme="orange"
        variant="outline"
        className="px-6 py-2 text-sm font-medium leading-5 rounded mx-auto w-max"
      >
        Remove
      </Button>
    </TableCell>
  </TableRow>
)
