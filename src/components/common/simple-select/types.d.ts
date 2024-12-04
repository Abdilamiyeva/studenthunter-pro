import {ReactNode} from 'react'

export type SimpleSelectOption = {
  label: ReactNode
  value: string
}

export type Props = {
  options: SimpleSelectOption[]
  prefix?: ReactNode
  suffix?: ReactNode
  value?: string
  onChange?: (value: string) => void
  className?: string
  iconClassName?: string
}

export type SelectProps = {
  value?: string
  onValueChange?: (value: string) => void
  open?: boolean
}
