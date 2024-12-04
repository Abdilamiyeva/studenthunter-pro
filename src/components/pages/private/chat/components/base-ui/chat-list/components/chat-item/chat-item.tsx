import {Avatar} from '@/components/common/avatar/avatar'
import {Props} from './types'
import {DotsColIcon, MailIcon, StarIcon, TrashIcon} from '@/icons'
import {Dropdown} from '@/components/common'
import {cn} from '@/lib/utils'

export const ChatItem = ({avatar, isOffline, selectChat, lastMessage, fullName, favorite, current}: Props) => {
  const currentChatBg = current && 'bg-blue-9'

  return (
    <div
      onClick={selectChat}
      className={cn('px-5 pt-4 cursor-pointer active:bg-blue-5 duration-default', currentChatBg)}
    >
      <div className="flex justify-between">
        <div className="flex gap-3">
          <Avatar
            showIndicator
            className="pr-[0.5px] min-w-[40px]"
            src={avatar}
            fullName={fullName}
            isOffline={isOffline}
          />
          <div>
            <div className="flex items-baseline gap-2">
              <p className={cn('text-sm font-semibold', current && 'text-white')}>{fullName}</p>

              {favorite && <StarIcon className="w-3 h-3" />}
            </div>
            <p className={cn('text-xs font-normal text-blue-2 text-ellipsis', current && 'text-white')}>
              {lastMessage}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <p className={cn('text-xs font-medium text-blue-2', current && 'text-white')}>2d ago</p>
          <Dropdown
            buttons={[
              {label: 'Mark as read', icon: <MailIcon className="w-4 h-4" />, onClick: () => {}},
              {label: 'Delete', icon: <TrashIcon className="w-4 h-4" />, onClick: () => {}},
            ]}
          >
            <button className="flex items-center gap-x-3 font-bold ">
              <DotsColIcon className={cn('w-4 h-4 text-blue-2', current && 'text-white')} />
            </button>
          </Dropdown>
        </div>
      </div>
      <div className={cn('w-full border-b border-b-blue-5 pt-4', current && 'border-b-blue-9')}></div>
    </div>
  )
}
