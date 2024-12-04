import {DownIcon} from '@/icons'
import {Checkbox, Popover} from '..'
import {cn} from '@/lib/utils'
import {Props} from './types'
import {ChangeEvent, useMemo, useState} from 'react'

export const CheckboxesDropdown = ({
  label,
  placeholder,
  className,
  options,
  contentClassName,
  required,
  value,
  onChange,
}: Props) => {
  const [values, setValues] = useState(
    Object.fromEntries(
      typeof value === 'string'
        ? value.split(', ').map(key => [key, true])
        : options.map(option => [option.value, Boolean((value as any)?.[option.value])]),
    ),
  )
  const selectedValuesStr = useMemo(
    () =>
      Object.entries(values)
        .filter(([, val]) => val)
        .map(([key]) => key)
        .join(', '),
    [values],
  )

  const onCheckBox = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    const updatedValue = {
      ...values,
      [key]: event.target.checked,
    }
    setValues(updatedValue)
    if (onChange) {
      onChange(
        Object.entries(updatedValue)
          .filter(([, val]) => val)
          .map(([k]) => k)
          .join(', '),
      )
    }
  }

  return (
    <Popover
      className={contentClassName}
      content={
        <div className="flex flex-col gap-4">
          {options.map(option => (
            <Checkbox
              key={option.value}
              {...option}
              checked={values[option.value]}
              onChange={event => onCheckBox(event, option.value)}
            />
          ))}
        </div>
      }
    >
      <div>
        {label && (
          <span className="block mb-2.5 text-blue-1 leading-6 font-bold">
            {label} {required && <span className="text-orange">*</span>}
          </span>
        )}
        <div
          className={cn(
            'border border-input shadow-box-sm bg-blue-7 rounded-lg py-4 px-3 w-full text-blue-2 flex items-center justify-between cursor-pointer',
            className,
          )}
        >
          <span className={cn('text-sm line-clamp-1', selectedValuesStr ? 'text-blue' : 'text-blue-2')}>
            {selectedValuesStr || placeholder || 'Select values'}
          </span>
          <DownIcon className="w-3 h-3" />
        </div>
      </div>
    </Popover>
  )
}
