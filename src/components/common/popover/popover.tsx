import {Popover as PopoverUI, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {Props} from './types'
import {cn} from '@/lib/utils'

export const Popover = ({children, content, className}: Props) => (
  <PopoverUI>
    <PopoverTrigger asChild>{children}</PopoverTrigger>
    <PopoverContent className={cn('max-w-[320px] max-h-[160px] overflow-auto', className)}>{content}</PopoverContent>
  </PopoverUI>
)
