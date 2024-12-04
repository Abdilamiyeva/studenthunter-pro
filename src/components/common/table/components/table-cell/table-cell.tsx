import {TableCell as TableCellUI} from '@/components/ui/table'
import {Props} from './types'
import {cn} from '@/lib/utils'

export const TableCell = ({children, className}: Props) => (
  <TableCellUI className={cn('py-5 px-4 bg-white', className)}>{children}</TableCellUI>
)
