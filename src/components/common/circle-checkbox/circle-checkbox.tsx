import {CheckIcon} from '@/icons'
import {ComponentProps, Props} from './types'
import {useMemo} from 'react'

export const CircleCheckbox = ({label, required, checked, onChange}: Props) => {
  const componentProps = useMemo(() => {
    const props: ComponentProps = {}

    if (onChange) {
      props.onChange = event => onChange(event.target.checked)
      props.checked = Boolean(checked)
    }

    return props
  }, [checked, onChange])

  return (
    <label className="cursor-pointer w-max max-w-full flex items-center gap-2.5">
      <input type="checkbox" className="peer" hidden {...componentProps} />
      <div className="min-w-[16px] min-h-[16px] border border-blue bg-transparent peer-checked:bg-blue text-transparent peer-checked:text-white grid place-content-center rounded-full duration-100">
        <CheckIcon className="w-2 h-2" />
      </div>
      {label && (
        <p className="text-blue-1 leading-4.5 text-xs">
          {label} {required && <span className="text-orange">*</span>}
        </p>
      )}
    </label>
  )
}
