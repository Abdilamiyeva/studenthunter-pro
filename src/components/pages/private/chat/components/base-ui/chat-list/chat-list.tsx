import {Dropdown} from '@/components/common'
import {DropdownButton} from '@/components/common/dropdown/types'
import {ArrowUpIcon} from '@/icons'
import {ChatItem, SavedMessages} from './components'
import {cn} from '@/lib/utils'
import {Props} from './types'
import {useMemo} from 'react'

export const ChatList = ({users, selectChat, currentChat}: Props) => {
  const buttons = useMemo(() => [{label: 'Favourites'}, {label: 'Saved messages'}] as DropdownButton[], [])

  return (
    <div className={cn('flex flex-col min-w-80 w-full max-w-md h-full overflow-auto border-r border-r-blue-4')}>
      <div className="h-16 w-full p-6 ">
        <Dropdown buttons={buttons}>
          <button className="flex items-center gap-x-3 font-bold ">
            All messages
            <ArrowUpIcon />
          </button>
        </Dropdown>
      </div>
      <div className="overflow-auto">
        <SavedMessages />
        {users?.map(user => (
          <ChatItem
            current={currentChat?.id === user.id}
            selectChat={() => selectChat(user.id)}
            key={user.id}
            {...user}
          />
        ))}
      </div>
    </div>
  )
}
