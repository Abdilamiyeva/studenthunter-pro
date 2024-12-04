import {ReactNode} from 'react'

export type Card = {
  card: ReactNode
}

export type Props = {
  cards: Card[]
  className?: string
  type: 'default' | 'coverflow'
  wrapBtnsClassName?: string
}
