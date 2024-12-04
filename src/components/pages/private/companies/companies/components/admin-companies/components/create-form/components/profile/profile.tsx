import {Field} from '@/components/common'
import {Props} from './types'

export const Profile = ({form}: Props) => (
  <div>
    <Field type="single-image-upload" name="logo" control={form.control} />
    <div className="mt-10">
      <h5 className="text-xl font-bold leading-7.5 mb-7">Social profiles</h5>
      <div className="grid grid-cols-2 gap-x-6 gap-y-7">
        <Field
          type="second-input"
          name="telegram"
          control={form.control}
          componentProps={{
            label: 'Telegram',
          }}
        />
        <Field
          type="second-input"
          name="instagram"
          control={form.control}
          componentProps={{
            label: 'Instagram',
          }}
        />
        <Field
          type="second-input"
          name="linkedin"
          control={form.control}
          componentProps={{
            label: 'LinkedIn',
          }}
        />
        <Field
          type="second-input"
          name="facebook"
          control={form.control}
          componentProps={{
            label: 'Facebook',
          }}
        />
      </div>
    </div>
  </div>
)
