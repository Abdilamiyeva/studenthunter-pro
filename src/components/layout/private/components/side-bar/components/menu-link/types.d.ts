import {ReactNode} from 'react'

export type Props = {
  onClick?: () => void
  path?: string
  label: string
  icon: ReactNode
  isHiddenLabel?: boolean
}
