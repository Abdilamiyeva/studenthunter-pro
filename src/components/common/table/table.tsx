import {Table as TableUI} from '@/components/ui/table'
import {Props} from './types'
import {cn} from '@/lib/utils'

export const Table = ({children, className, parentClassName}: Props) => (
  <div className={cn('rounded-2xl border border-blue-4 overflow-hidden', parentClassName)}>
    <TableUI className={cn('min-w-max lg:min-w-full', className)}>{children}</TableUI>
  </div>
)
