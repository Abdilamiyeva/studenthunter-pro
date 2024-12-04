import {ChangeEvent} from 'react'

export type Props = {
  checked?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  label?: string
  className?: string
  labelClassName?: string
  iconClassName?: string
}
