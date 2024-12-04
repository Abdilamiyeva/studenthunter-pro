import {MouseEventHandler, ReactNode} from 'react'

export type LinkProps = {
  children?: ReactNode
  link: string
  onClick?: MouseEventHandler<HTMLButtonElement> | MouseEventHandler<HTMLAnchorElement>
}

export type ClickProps = {
  children?: ReactNode
  link?: string
  onClick: MouseEventHandler<HTMLButtonElement> | MouseEventHandler<HTMLAnchorElement>
}

export type Props = LinkProps | ClickProps
