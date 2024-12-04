import {Avatar} from '@/components/common'
import {Props} from './types'
import {ReplyIcon, StarIcon, StarOutlineIcon, TrashIcon} from '@/icons'
import {cn} from '@/lib/utils'
import {ReceivedMessage, SentMessage} from './components'
import {TypingPrompt} from './components/typing-prompt'
import {MESSAGES} from './mock/messages'
import {Fragment} from 'react'

export const CurrentChat = ({currentChat, isUser}: Props) => {
  if (!currentChat) {
    return <div className="w-full h-full grid place-content-center text-lg font-semibold text-blue-2">Select Chat</div>
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="h-16 min-h-[64px] w-full px-10 py-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <Avatar
              fullName={currentChat?.fullName}
              src={currentChat?.avatar}
              isOffline={currentChat?.isOffline}
              className="min-w-[40px]"
            />
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold">{currentChat?.fullName}</p>
              {isUser && (
                <p
                  className={cn(
                    'text-xs font-normal text-ellipsis',
                    currentChat?.isOffline ? 'text-blue-2' : 'text-sky-1',
                  )}
                >
                  {currentChat?.isOffline ? 'offline' : 'online'}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-5">
            {currentChat?.favorite ? <StarIcon className="w-6 h-6" /> : <StarOutlineIcon className="w-6 h-6" />}
            <TrashIcon className="w-5 h-5 text-orange" />
            <ReplyIcon className="w-5 h-5" />
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
}
