import {Field} from '@/components/common'
import {Props} from './types'

export const About = ({form}: Props) => (
  <div>
    <h2 className="text-blue text-base font-bold leading-7 mb-3 ">About Program</h2>
    <Field name="about" type="cv-builder-md-editor" componentProps={{id: 'params_id'}} control={form.control} />
  </div>
)
