import {TableHead as TableHeadUI} from '@/components/ui/table'
import {Props} from './types'
import {cn} from '@/lib/utils'

export const TableHead = ({children, className}: Props) => (
  <TableHeadUI className={cn('py-5 px-4 text-xs font-bold leading-4 text-blue-1 uppercase', className)}>
    {children}
  </TableHeadUI>
)
