import {UseFormReturn} from 'react-hook-form'
import {CreateCompanyRequest} from '@/features/company/types'

export type Props = {
  form: UseFormReturn<CreateCompanyRequest>
}
