import {Field} from '@/components/common'
import {Props} from './types'

export const About = ({form}: Props) => (
  <div className="flex flex-col gap-6">
    <div>
      <p className="text-blue-1 font-bold leading-6 mb-2.5">Description in English:</p>
      <Field
        control={form.control}
        name="description_en"
        type="cv-builder-md-editor"
        componentProps={{
          id: 'create-university-about-editor-en',
        }}
      />
    </div>
    <div>
      <p className="text-blue-1 font-bold leading-6 mb-2.5">Description in Russia:</p>
      <Field
        control={form.control}
        name="description_ru"
        type="cv-builder-md-editor"
        componentProps={{
          id: 'create-university-about-editor-ru',
        }}
      />
    </div>
    <div>
      <p className="text-blue-1 font-bold leading-6 mb-2.5">Description in Uzbek:</p>
      <Field
        control={form.control}
        name="description_uz"
        type="cv-builder-md-editor"
        componentProps={{
          id: 'create-university-about-editor-uz',
        }}
      />
    </div>
  </div>
)
