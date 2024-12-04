import {ChangeEvent, ReactNode, Ref} from 'react'

export type Props = {
  type?: 'password' | 'text' | 'number' | 'price' | 'search' | 'tel'
  placeholder?: string
  label?: string
  prefix?: ReactNode | string
  className?: string
  value?: string
  isSearching?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onFocus?: () => void
  onBlur?: () => void
  baseClassName?: string
  inputRef?: Ref
  minLength?: number
  maxLength?: number
}
