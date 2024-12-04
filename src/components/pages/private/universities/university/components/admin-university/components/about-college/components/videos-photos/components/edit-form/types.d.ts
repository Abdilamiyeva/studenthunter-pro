import {University} from '@/types/university'

export type Props = {
  open: boolean
  close: () => void
  university: University
}
