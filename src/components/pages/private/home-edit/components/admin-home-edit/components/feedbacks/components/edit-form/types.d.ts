import {FeedbackType} from '@/constants/statusues'
import {Feedback} from '@/types/feedback'

export type Props = {
  open: boolean
  close: () => void
  feedback: Feedback
  type: FeedbackType
}
