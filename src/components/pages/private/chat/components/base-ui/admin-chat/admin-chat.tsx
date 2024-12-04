import {Fragment} from 'react'
import {TypingPrompt} from '../current-chat/components/typing-prompt'
import {MESSAGES} from '../current-chat/mock/messages'
import {ReceivedMessage, SentMessage} from '../current-chat/components'
import {TrashIcon} from '@/icons'

export const AdminChat = () => (
  <div className="flex flex-col w-full h-full">
    <div className="h-16 min-h-[64px] w-full px-10 py-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 justify-between w-full items-center pt-2">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold">Admin</p>
          </div>
          <TrashIcon className="w-5 h-5 text-orange" />
        </div>
      </div>
    </div>
    <div className="h-full bg-blue-10 flex flex-col overflow-auto justify-between">
      {MESSAGES.length ? (
        <div className="flex flex-col p-5 gap-4 max-h-full overflow-auto">
          {MESSAGES.map((message, index) => (
            <Fragment key={index}>
              {
                {
                  sent: <SentMessage {...message} unread={message.unread as boolean} />,
                  received: <ReceivedMessage {...message} />,
                }[message.type]
              }
            </Fragment>
          ))}
        </div>
      ) : (
        <div className="m-auto gap-4 flex flex-col">
          <img src="/images/no-message.svg" alt="no message" />
          <p className="text-xl font-bold">No messages here yet</p>
        </div>
      )}

      <TypingPrompt />
    </div>
  </div>
)
