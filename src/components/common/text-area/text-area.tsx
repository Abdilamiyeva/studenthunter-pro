import {cn} from '@/lib/utils'
import {Props} from './types'

export const TextArea = ({label, className, placeholder, baseClassName}: Props) => (
  <label>
    {label && <span className={cn('text-sm', className)}>{label}</span>}
    <textarea
      autoComplete="new-password"
      placeholder={placeholder}
      className={cn(
        'bg-white py-2 px-3 border border-blue-4 rounded-md focus:border-blue-3 duration-default text-base placeholder:text-blue-4 w-full',
        baseClassName,
      )}
    />
  </label>
)
