import {TableHeader as TableHeaderUI, TableRow} from '@/components/ui/table'
import {Props} from './types'
import {cn} from '@/lib/utils'

export const TableHeader = ({children, className}: Props) => (
  <TableHeaderUI className=" !w-full bg-blue-7">
    <TableRow className={cn('w-full', className)}>{children}</TableRow>
  </TableHeaderUI>
)
