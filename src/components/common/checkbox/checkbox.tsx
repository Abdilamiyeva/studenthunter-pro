import {HTMLProps, useMemo} from 'react'
import {Props} from './types'
import {CheckIcon} from '@/icons'
import {cn} from '@/lib/utils'

export const Checkbox = ({label, className, labelClassName, iconClassName, checked, onChange}: Props) => {
  const inputProps = useMemo(() => {
    const props: HTMLProps<HTMLInputElement> = {}

    if (onChange) {
      props.onChange = onChange
      props.checked = checked || false
    }

    return props
  }, [checked, onChange])

  return (
    <label className="cursor-pointer flex items-center gap-3 w-max max-w-full">
      <input type="checkbox" className="peer" hidden {...inputProps} />
      <div
        className={cn(
          'grid place-content-center min-w-[18px] min-h-[18px] rounded duration-75 border border-blue-4 bg-blue-4 peer-checked:border-blue peer-checked:bg-blue text-blue-4 peer-checked:text-white',
          className,
        )}
      >
        <CheckIcon className={cn('w-3 h-2.5', iconClassName)} />
      </div>
      {label && (
        <span
          className={cn(
            'text-xs font-medium leading-4.5 text-blue-2 peer-checked:text-blue duration-75 line-clamp-1',
            labelClassName,
          )}
        >
          {label}
        </span>
      )}
    </label>
  )
}
