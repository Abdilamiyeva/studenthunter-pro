import {Consulting} from '@/types/consulting'

export type Props = {
  open: boolean
  close: () => void
  consulting: Consulting
}
