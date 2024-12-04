import {TableBody as TableBodyUI} from '@/components/ui/table'
import {Props} from './types'
import {cn} from '@/lib/utils'

export const TableBody = ({children, className}: Props) => (
  <TableBodyUI className={cn(className)}>{children}</TableBodyUI>
)
