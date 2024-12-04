import {FAQ} from '@/types/faq'

export type Props = {
  open: boolean
  close: () => void
  faq: FAQ
}
