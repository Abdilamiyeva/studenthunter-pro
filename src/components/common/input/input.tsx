/* eslint-disable react-hooks/exhaustive-deps */
import {ChangeEvent, HTMLProps, useMemo, useState} from 'react'
import {Props} from './types'
import {cn} from '@/lib/utils'
import {EyeHiddenIcon, EyeIcon, SearchIcon} from '@/icons'
import {formatInputValueAsPhoneNumber} from '@/utils/format-phone-number'
import {formatPrice} from '@/utils/format-price'
import {Spinner} from '../spinner'

export const Input = ({
  label,
  type,
  placeholder,
  className,
  onChange,
  value,
  onBlur,
  onFocus,
  isSearching,
  baseClassName,
  inputRef,
  maxLength,
  minLength,
}: Props) => {
  const [showPwd, setShowPwd] = useState(false)
  const inputType = useMemo(() => {
    switch (type) {
      case 'password':
        return showPwd ? 'text' : 'password'
      case 'number':
        return 'number'
      default:
        return 'text'
    }
  }, [type, showPwd])
  const classNames = useMemo(() => {
    let baseClassNames = cn(
      'bg-white py-2 px-3 border border-blue-4 rounded-md focus:border-blue-3 duration-default text-base placeholder:text-blue-4 w-full shadow-box',
      baseClassName,
    )

    switch (type) {
      case 'search':
        baseClassNames = cn(baseClassNames, 'pl-10 bg-blue-7 placeholder:text-blue-2')
        break
      case 'tel':
        baseClassNames = cn(baseClassNames, 'pl-14')
        break
    }

    return baseClassNames
  }, [type, baseClassName])
  const defaultPlaceholder = useMemo(() => {
    switch (type) {
      case 'number':
        return '10000'
      case 'password':
        return '******'
      case 'price':
        return '1 000 000'
      case 'search':
        return 'Search...'
      case 'tel':
        return '99 222 33 11'
      case 'text':
        return 'Type here...'
    }
  }, [type])

  const onInputType = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value
    switch (type) {
      case 'tel':
        newValue = formatInputValueAsPhoneNumber(e.target.value)
        break
      case 'number':
        newValue = e.target.value.replace(/\D/g, '')
        break
      case 'price':
        newValue = formatPrice(e.target.value)
    }

    e.target.value = newValue

    if (onChange) {
      onChange(e)
    }
  }

  const inputProps = useMemo(() => {
    const props: HTMLProps<HTMLInputElement> = {
      type: inputType,
      onChange: onInputType,
      onBlur,
      onFocus,
      minLength,
      maxLength,
      className: classNames,
      placeholder: placeholder || defaultPlaceholder,
    }

    if (onChange || value) {
      props.value = value || ''
    }

    if (inputRef) {
      props.ref = inputRef
    }

    return props
  }, [value, inputType, classNames, placeholder])

  return (
    <label className={cn('relative', className)}>
      {label && <span className="text-sm">{label}</span>}
      {type === 'search' &&
        (isSearching ? (
          <Spinner className="border-black-4 top-[10%] left-4 -translate-y-1/2 w-3.5 h-3.5 absolute border-2" />
        ) : (
          <SearchIcon className="absolute !text-blue-2 top-1/2 left-4 -translate-y-1/2 w-3.5 h-3.5 text-black-4" />
        ))}

      {type === 'tel' && <span className="absolute -bottom-[3px] left-4 text-base text-black">+998</span>}
      <input {...inputProps} autoComplete="new-password" />
      {type === 'password' && (
        <button
          type="button"
          onClick={() => setShowPwd(prev => !prev)}
          className="text-black-4 absolute -bottom-[1.5px] right-4"
        >
          {showPwd ? <EyeIcon className="w-5 h-5" /> : <EyeHiddenIcon className="w-5 h-5" />}
        </button>
      )}
    </label>
  )
}
