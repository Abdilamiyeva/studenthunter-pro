import {UseFormReturn} from 'react-hook-form'

export type Props = {
  open: boolean
  close: () => void
  form: UseFormReturn<any>
  onSubmit: (formData: any) => void
  loading: boolean
}
