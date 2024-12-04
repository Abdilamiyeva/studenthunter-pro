import {Skill} from '@/types/skill'

export type Props = {
  open: boolean
  close: () => void
  skill: Skill
}
