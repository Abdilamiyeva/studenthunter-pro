import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {Props, SelectProps} from './types'
import {DownArrowIcon} from '@/icons'
import {useMemo} from 'react'
import {cn} from '@/lib/utils'

export const SimpleSelect = ({prefix, suffix, value, onChange, className, iconClassName, options}: Props) => {
  const selectProps = useMemo(() => {
    const props: SelectProps = {}

    if (onChange) {
      props.value = value
      props.onValueChange = onChange
    }

    if (options.length < 2) {
      props.open = false
    }

    return props
  }, [value, onChange, options])

  return (
    <Select {...selectProps}>
      <SelectTrigger className={cn('w-max border-0 text-black-3 shadow-none ring-0 focus:ring-0', className)} hideIcon>
        <div className="flex items-center">
          {prefix}
          <SelectValue className="flex justify-between" />
          {suffix}
        </div>
        {options.length > 1 && <DownArrowIcon className={cn('h-5 w-5 ml-2', iconClassName)} />}
      </SelectTrigger>
      {options.length ? (
        <SelectContent>
          <SelectGroup>
            {options.map(option => (
              <SelectItem key={option.value} value={option.value} className="cursor-pointer">
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      ) : (
        ''
      )}
    </Select>
  )
}
