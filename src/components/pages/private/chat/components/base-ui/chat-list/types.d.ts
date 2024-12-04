interface MockUser {
  id: number
  fullName: string
  isOffline: boolean
  avatar: string
  lastMessage: string
  favorite: boolean
}

export interface Props {
  users?: MockUser[]
  selectChat: SetStateAction<number>
  currentChat?: MockUser
}
