import {FeedbackType} from '@/constants/statusues'
import {UseFormReturn} from 'react-hook-form'

export type Props = {
  open: boolean
  close: () => void
  defaultValues?: object
  type: FeedbackType
  form: UseFormReturn<any>
  onSubmit: (formData: any) => void
  loading: boolean
}
