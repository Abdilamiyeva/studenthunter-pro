import {ReactNode} from 'react'

export interface BoldTab {
  label: string
  children: ReactNode
}

export type Props = {
  tabs: BoldTab[]
  defaultTabIndex?: number
  contentClassName?: string
  tabsClassName?: string
  leftSideContent?: ReactNode
  tabClassName?: string
}
