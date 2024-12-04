import {FeedbackType} from '@/constants/statusues'

export interface Feedback {
  _id: string
  image: string
  name: string
  location: string
  position: string
  feedback: string
  type: FeedbackType
}
