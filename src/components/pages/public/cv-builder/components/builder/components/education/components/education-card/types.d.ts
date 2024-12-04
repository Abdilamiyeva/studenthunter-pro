import {UseFormReturn} from 'react-hook-form'
import {ResumeData} from '../../../../types'

export type Props = {
  remove: () => void
  index: number
  form: UseFormReturn<ResumeData>
}

export type Education = {
  degreeName: string
  schoolName: string
  city: string
  description: string
  dates: ValueType
}
