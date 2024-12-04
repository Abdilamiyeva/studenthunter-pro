import {ChangeEvent, useMemo, useRef, useState} from 'react'
import {Props} from './types'
import {CaretDownFill, Eye2Icon, EyeHidden2Icon} from '@/icons'
import {Select, SelectContent, SelectItem, SelectTrigger} from '@/components/ui/select'
import {COUNTRIES} from '@/constants/countries'
import {getCountryIcon} from '@/utils/get-country-icon'
import {cn} from '@/lib/utils'
import {formatGlobalPhoneNumber} from '@/utils/format-phone-number'

export const SecondInput = ({
  label,
  placeholder,
  required,
  type = 'text',
  value,
  onChange,
  onBlur,
  className,
  onKeyDown,
}: Props) => {
  const [showValue, setShowValue] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0].shortName)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const countryCode = useMemo(() => {
    const code = COUNTRIES.find(country => country.shortName === selectedCountry)?.code || ''

    return code
  }, [selectedCountry])
  const [phoneNumber, setPhoneNumber] = useState(value || '')

  const inputProps = useMemo(() => {
    const props: HTMLInputElement = {} as any

    if (type === 'tel') {
      props.value = countryCode + ' ' + phoneNumber
    } else if (onChange) {
      props.value = value || ''
    }

    return props
  }, [countryCode, phoneNumber, type, value, onChange])

  const formatPhoneNumber = (inputPhoneNumber?: string) => {
    const numericPhoneNumber = inputPhoneNumber?.slice(inputPhoneNumber.indexOf(' ') + 1).replace(' ', '')
    if (numericPhoneNumber) {
      return formatGlobalPhoneNumber(numericPhoneNumber, selectedCountry)
    }
  }

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputPhoneNumber = e.target.value
    if (type === 'tel' && inputPhoneNumber !== countryCode) {
      const formattedPhoneNumber = formatPhoneNumber(inputPhoneNumber)
      setPhoneNumber(formattedPhoneNumber || '')
    }

    if (onChange) {
      onChange(e)
    }

    if (onBlur) {
      onBlur(e)
    }
  }

  const onCountryChange = (shortName: string) => {
    setSelectedCountry(shortName)
    if (type === 'tel' && phoneNumber) {
      const formattedPhoneNumber = formatGlobalPhoneNumber(phoneNumber.replace(' ', ''), shortName)
      setPhoneNumber(formattedPhoneNumber || '')
    }
  }

  return (
    <label>
      {label && (
        <span className="block mb-2.5 text-blue-1 leading-6 font-bold">
          {label} {required && <span className="text-orange">*</span>}
        </span>
      )}
      <div className="relative">
        {type === 'tel' && (
          <Select value={selectedCountry} onValueChange={onCountryChange}>
            <SelectTrigger
              hideIcon
              className={cn(
                'absolute h-[60px] top-1/2 -translate-y-1/2 left-5 border-0 w-max p-0 !outline-0 !ring-0 shadow-none flex items-center gap-3',
                className,
              )}
            >
              <span>{getCountryIcon(selectedCountry, 'w-8 h-8')}</span>
              <CaretDownFill className="w-3 h-3" />
            </SelectTrigger>
            <SelectContent>
              {COUNTRIES.map(country => (
                <SelectItem key={country.shortName} value={country.shortName} className="cursor-pointer">
                  <div className="flex items-center gap-2">
                    <span>{getCountryIcon(country.shortName, 'w-4 h-4')}</span>
                    <span>{country.code}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        <input
          {...(inputProps as any)}
          type={type !== 'password' ? type : showValue ? 'text' : 'password'}
          className={cn(
            'block bg-blue-7 w-full rounded-lg py-4 px-6 text-xl leading-7.5 peer',
            type === 'tel' && 'pl-[90px]',
          )}
          placeholder={placeholder}
          onChange={handlePhoneNumberChange}
          ref={inputRef}
          onKeyDown={onKeyDown}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowValue(prev => !prev)}
            className="text-blue-2 absolute top-1/2 -translate-y-1/2 right-5"
          >
            {showValue ? <Eye2Icon className="w-6 h-6" /> : <EyeHidden2Icon className="w-7 h-7" />}
          </button>
        )}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue opacity-0 peer-focus:opacity-100 duration-100" />
      </div>
    </label>
  )
}
