import {TableRow as TableRowUI} from '@/components/ui/table'
import {Props} from './types'

export const TableRow = ({children, className}: Props) => <TableRowUI className={className}>{children}</TableRowUI>
