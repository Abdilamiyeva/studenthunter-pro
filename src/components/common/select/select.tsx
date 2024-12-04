import {SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {Select as UISelect} from '../../ui/select'
import {ComponentProps, Props} from './types'
import {useMemo} from 'react'
import {DownIcon} from '@/icons'
import {cn} from '@/lib/utils'

export const Select = ({label, required, options, value, onChange, defaultValue, className}: Props) => {
  const componentProps = useMemo(() => {
    const props: ComponentProps = {}

    if (onChange) {
      props.value = value || ''
      props.onValueChange = onChange
    }

    if (defaultValue) {
      props.defaultValue = defaultValue
    }

    return props
  }, [value, onChange, defaultValue])

  return (
    <label>
      {label && (
        <span className="block mb-2.5 text-blue-1 leading-6 font-bold">
          {label} {required && <span className="text-orange">*</span>}
        </span>
      )}
      <UISelect {...componentProps}>
        <SelectTrigger
          className={cn('flex bg-blue-7 h-[60px] w-full rounded-lg py-3.5 px-6 text-xl leading-7.5 ', className)}
          hideIcon
        >
          <SelectValue />
          <DownIcon className="w-4 h-4" />
        </SelectTrigger>
        <SelectContent className="max-h-[200px]">
          {options.map(option => (
            <SelectItem disabled={option.disabled} key={option.value} value={option.value} className="cursor-pointer">
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </UISelect>
    </label>
  )
}
