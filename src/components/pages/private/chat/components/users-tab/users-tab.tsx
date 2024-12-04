import {useMemo, useState} from 'react'
import {ChatList} from '../base-ui/chat-list'
import {CurrentChat} from '../base-ui/current-chat'
import {USERS} from './mock'

export const UsersTab = () => {
  const [currentChatID, setCurrentChatID] = useState()

  const currentChat = useMemo(() => USERS.find(user => user.id === currentChatID), [currentChatID])

  return (
    <div className="flex flex-col flex-1  overflow-auto h-[calc(100vh-230px)]">
      <div className="border border-blue-4 rounded-t-2xl h-full overflow-hidden bg-white flex ">
        <ChatList selectChat={setCurrentChatID} currentChat={currentChat} users={USERS} />
        <CurrentChat isUser={true} currentChat={currentChat} />
      </div>
    </div>
  )
}
