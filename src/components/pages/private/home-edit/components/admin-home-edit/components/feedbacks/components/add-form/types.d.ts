import {FeedbackType} from '@/constants/statusues'

export type Props = {
  open: boolean
  close: () => void
  type: FeedbackType
}
