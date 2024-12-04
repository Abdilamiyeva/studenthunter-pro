import {HomeUniversity} from '@/types/university'

export type Props = {
  open: boolean
  close: () => void
  universities: HomeUniversity[]
}
