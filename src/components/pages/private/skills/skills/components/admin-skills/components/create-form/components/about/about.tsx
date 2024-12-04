import {Field} from '@/components/common'
import {Props} from './types'

export const About = ({form}: Props) => (
  <div className="flex flex-col gap-[30px]">
    <Field
      type="second-input"
      control={form.control}
      name="title"
      componentProps={{label: 'Skill title', placeholder: 'Enter skill title', required: true}}
    />
    <Field
      type="cv-builder-md-editor"
      control={form.control}
      name="about"
      componentProps={{
        label: 'About group',
        id: 'create-skill-about-md-editor',
        placeholder:
          'Have a deep understanding of typography, color theory, photos, layout, blocking and other design theory and skills',
      }}
    />
  </div>
)
