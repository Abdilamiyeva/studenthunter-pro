import {UseFormReturn} from 'react-hook-form'
import {ResumeData} from '../../../../types'

export type Props = {
  remove: () => void
  form: UseFormReturn<ResumeData>
  index: number
}

export type Skill = {
  skillName: string
}
