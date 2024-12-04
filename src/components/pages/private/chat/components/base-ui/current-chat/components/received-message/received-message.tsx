import {MessageBubble} from '../message-bubble'
import {Props} from './types'

export const ReceivedMessage = ({text, createdAt}: Props) => (
  <div className="flex w-full justify-start">
    <MessageBubble createdAt={createdAt} className="bg-white text-base max-w-lg" text={text} />
  </div>
)
