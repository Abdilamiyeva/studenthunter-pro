import {ReactNode} from 'react'

export type Props = {
  open?: boolean
  close?: () => void
  children?: ReactNode
  className?: string
  wrapForm: (children: ReactNode) => JSX.Element
  loading?: boolean
}
