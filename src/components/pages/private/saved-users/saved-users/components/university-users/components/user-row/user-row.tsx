import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Link} from 'react-router-dom'
import {Image} from '@/components/common'
import {useMemo} from 'react'
import {cn} from '@/lib/utils'

export const UserRow = ({index}: Props) => {
  const status = useMemo(() => (index % 2 === 0 ? 0 : 1), [index])
  const statusThemeClassName = useMemo(() => {
    switch (status) {
      case 0:
        return 'bg-orange'
      case 1:
        return 'bg-green'
    }
  }, [status])

  return (
    <TableRow>
      <TableCell>
        <div className="grid place-content-center text-xs font-bold leading-5">{index + 1}</div>
      </TableCell>
      <TableCell>
        <Link to="/dashboard/users/user-id" className="flex items-center gap-4 group">
          <Image src="/images/demo-user.svg" alt="Demo user" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col gap-px">
            <p className="group-hover:text-sky-1 text-sm leading-5 font-bold duration-150">Akbar</p>
            <p className="text-blue-2 text-xs leading-4">Aliyev</p>
          </div>
        </Link>
      </TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5">Cambridge international college</TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">5</TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">5.5</TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">1450</TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">
        <div
          className={cn(
            'w-max mx-auto px-3 py-0.5 rounded text-sm font-medium leading-5 text-white',
            statusThemeClassName,
          )}
        >
          {
            {
              0: 'Inactive',
              1: 'Active',
            }[status]
          }
        </div>
      </TableCell>
    </TableRow>
  )
}
