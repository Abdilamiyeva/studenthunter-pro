import {Field} from '@/components/common'
import {Props} from './types'

export const About = ({form}: Props) => (
  <Field
    type="cv-builder-md-editor"
    name="description"
    control={form.control}
    componentProps={{
      id: 'create-company-description-editor',
      required: true,
    }}
  />
)
