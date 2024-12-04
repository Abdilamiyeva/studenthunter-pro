import {Props} from './types'
import {Field} from '@/components/common'

export const Uzbek = ({form}: Props) => (
  <div className="pb-10">
    <Field
      type="second-input"
      control={form.control}
      name="title_uz"
      componentProps={{
        label: <p className="text-blue-1 text-xl font-bold leading-7">Blog Title</p>,
        placeholder: 'Enter your blog title',
      }}
    />
    <h2 className="text-blue-1 text-xl font-bold leading-7 mt-7 mb-5">Description</h2>
    <Field
      type="cv-builder-md-editor"
      control={form.control}
      name="text_uz"
      componentProps={{id: 'text_uzb_id', placeholder: 'Write your blog here...'}}
    />
  </div>
)
