import {Field} from '@/components/common'
import {Props} from './types'

export const About = ({form}: Props) => (
  <div>
    <h2 className="text-blue text-xl font-bold leading-8 mt-16 mb-7">About Company</h2>
    <Field control={form.control} name="about" type="cv-builder-md-editor" componentProps={{id: 'about_id'}} />
  </div>
)
