import {Field} from '@/components/common'
import {Props} from './types'

export const WhatToLearn = ({form}: Props) => (
  <Field
    type="cv-builder-md-editor"
    control={form.control}
    name="what_to_learn"
    componentProps={{
      id: 'create-skill-what-to-learn-md-editor',
      placeholder:
        'Have a deep understanding of typography, color theory, photos, layout, blocking and other design theory and skills',
    }}
  />
)
