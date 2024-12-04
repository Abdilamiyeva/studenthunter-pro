import {InstagramHightlight} from '@/types/instagram-highlight'

export type Props = {
  open: boolean
  close: () => void
  highlight: InstagramHightlight
}
