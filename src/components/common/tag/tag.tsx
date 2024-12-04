import {cn} from '@/lib/utils'
import {Props} from './types'

export const Tag = ({title, className}: Props) => (
  <span
    className={cn(
      'flex justify-center items-center w-max rounded-md text-xs font-bold text-blue-2 bg-blue-7 px-4 h-9 cursor-pointer',
      className,
    )}
  >
    {title}
  </span>
)
