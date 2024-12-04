import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Button, Image} from '@/components/common'
import {MailIcon} from '@/icons'
import {Link} from 'react-router-dom'

export const CompanyRow = ({index}: Props) => (
  <TableRow>
    <TableCell className="text-xs font-semibold leading-5">{index + 1}</TableCell>
    <TableCell>
      <Link to="/dashboard/companies/user/company-id" className="flex items-center gap-6">
        <Image src="/images/demo-company.svg" alt="Demo company" />
        <span className="text-sm font-semibold leading-5">Eliasen group</span>
      </Link>
    </TableCell>
    <TableCell className="text-sm font-medium leading-5 text-center">
      <a href="tel:(208) 555-0112" className="text-sky-1 hover:text-sky-1/90 duration-default">
        (208) 555-0112
      </a>
    </TableCell>
    <TableCell className="text-blue-1 text-sm font-bold leading-5 text-center">23</TableCell>
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
