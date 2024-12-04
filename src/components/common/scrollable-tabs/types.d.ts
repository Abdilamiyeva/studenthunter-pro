import {ReactNode} from 'react'

type Link = {
  id: string
  label: string
}

export type Props = {
  links: Link[]
  children: ReactNode
  sideBarTitle: string
  topSize?: number
}
