import {CheckIcon} from '@/icons'
import {ComponentProps, Props} from './types'
import {useMemo} from 'react'

export const RadioContainer = ({options, onChange, name}: Props) => {
  const componentProps = useMemo(() => {
    const props: ComponentProps = {}

    if (onChange) {
      props.onChange = event => onChange(event.target.value)
    }

    return props
  }, [onChange])

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {options.map(option => (
        <label key={option.value} className="cursor-pointer w-max max-w-full flex items-center gap-2.5">
          <input type="radio" name={name} className="peer" value={option.value} hidden {...componentProps} />
          <div className="min-w-[16px] min-h-[16px] border border-blue bg-transparent peer-checked:bg-blue text-transparent peer-checked:text-white grid place-content-center rounded-full duration-100">
            <CheckIcon className="w-2 h-2" />
          </div>
          {option.label && <b className="text-blue text-base font-bold leading-4.5">{option.label}</b>}
        </label>
      ))}
    </div>
  )
}
