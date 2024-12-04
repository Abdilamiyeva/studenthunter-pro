import {PublicPrograms} from '@/types/program'

export type UniversityItem = {
  img: string
  universityName: string
  locations: string[]
  program: string
}

export type Props = {
  program: PublicPrograms
}
