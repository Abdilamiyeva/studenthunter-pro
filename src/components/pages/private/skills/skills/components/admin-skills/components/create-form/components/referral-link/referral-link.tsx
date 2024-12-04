import {Field} from '@/components/common'
import {Props} from './types'

export const RefrralLink = ({form}: Props) => (
  <Field
    type="second-input"
    control={form.control}
    name="link"
    componentProps={{
      label: 'Link',
      required: true,
      placeholder: 'Enter link',
    }}
  />
)
