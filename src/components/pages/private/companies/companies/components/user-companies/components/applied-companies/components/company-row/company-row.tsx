import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Button, Image} from '@/components/common'
import {useMemo} from 'react'
import {cn} from '@/lib/utils'
import {MailIcon} from '@/icons'
import {Link} from 'react-router-dom'

export const CompanyRow = ({index}: Props) => {
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
        <Link to="/dashboard/companies/user/company-id" className="flex items-center gap-6">
          <Image src="/images/demo-company.svg" alt="Demo company" />
          <span className="text-sm font-semibold leading-5">Eliasen group</span>
        </Link>
      </TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">Arts & Design</TableCell>
      <TableCell className="text-blue-1 text-sm font-bold leading-5 text-center">23</TableCell>
      <TableCell>
        <div
          className={cn(
            'max-w-[92px] min-w-max mx-auto rounded text-center py-0.5 px-1 text-sm font-bold leading-5',
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
    </TableRow>
  )
}
