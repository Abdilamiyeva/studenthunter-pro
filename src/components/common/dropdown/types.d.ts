import {ReactNode} from 'react'

export interface DropdownButton {
  label: ReactNode
  icon?: ReactNode
  onClick?: () => void
  className?: string
  loading?: boolean
  loaderClassName?: string
}

export type Props = {
  children: ReactNode
  buttons: DropdownButton[]
  className?: string
  buttonClassName?: string
}
