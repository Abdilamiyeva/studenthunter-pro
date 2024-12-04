import {DoubleTickIcon} from '@/icons'
import {MessageBubble} from '../message-bubble'
import {Props} from './types'

export const SentMessage = ({unread, text, createdAt}: Props) => (
  <div className="flex w-full justify-end">
    <MessageBubble
      tickIcon={!unread && <DoubleTickIcon className="w-4 h-4" />}
      createdAt={createdAt}
      className="bg-blue-9 text-white max-w-lg "
      text={text}
    />
  </div>
)
