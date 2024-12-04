import {Field} from '@/components/common'
import {Props} from './types'

export const Profile = ({form}: Props) => (
  <div>
    <Field name="logo" control={form.control} type="single-image-upload" />
    <h5 className="text-blue text-xl font-bold leading-8 mt-10 mb-7">Social profiles</h5>
    <div className="grid grid-cols-2 gap-x-6 gap-y-7">
      <Field
        name="telegram"
        componentProps={{
          label: 'Telegram',
        }}
        control={form.control}
        type="second-input"
      />
      <Field
        name="instagram"
        componentProps={{
          label: 'Instagram',
        }}
        control={form.control}
        type="second-input"
      />
      <Field
        name="linkedin"
        componentProps={{
          label: 'LinkedIn',
        }}
        control={form.control}
        type="second-input"
      />
      <Field
        name="facebook"
        componentProps={{
          label: 'Facebook',
        }}
        control={form.control}
        type="second-input"
      />
    </div>
  </div>
)
