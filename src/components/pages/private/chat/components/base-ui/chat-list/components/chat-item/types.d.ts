export interface Props {
  lastMessage: string
  avatar: string
  isOffline: boolean
  fullName: string
  favorite?: boolean
  current?: boolean
  selectChat: () => void
}
