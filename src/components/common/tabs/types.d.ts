import {ReactNode} from 'react'

export type Tab = {
  label: string
  key: string
  children: ReactNode
}

export type Props = {
  tabs: Tab[]
  defaultKey?: string
  tabItemClassName?: string
  rightElement?: ReactNode
  className?: string
  rightElementWrapperClassName?: string
  selectedTab?: string
  onChange?: (value: string) => void
}

export type ExtraProps = {
  value?: string
  onValueChange?: (value: string) => void
}
