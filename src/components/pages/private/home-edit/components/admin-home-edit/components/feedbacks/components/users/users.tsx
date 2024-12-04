import {FeedbackCard} from '..'
import {Props} from './types'

export const Users = ({feedbacks}: Props) => (
  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
    {feedbacks.length ? (
      feedbacks.map(feedback => <FeedbackCard key={feedback._id} feedback={feedback} />)
    ) : (
      <p>No reviews from users yet...</p>
    )}
  </div>
)
