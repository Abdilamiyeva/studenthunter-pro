import {Field} from '@/components/common'
import {Props} from './types'

export const Profile = ({form}: Props) => (
  <div>
    <Field control={form.control} name="logo" type="single-image-upload" componentProps={{required: true}} />
    <div className="mt-10">
      <h2 className="text-blue text-xl font-bold leading-7 mb-7"> Social profiles</h2>
      <div className="grid grid-cols-2 gap-y-7 gap-x-6">
        <Field name="telegram" control={form.control} type="second-input" componentProps={{label: 'Telegram'}} />
        <Field name="instagram" control={form.control} type="second-input" componentProps={{label: 'Instagram'}} />
        <Field name="linkedin" control={form.control} type="second-input" componentProps={{label: 'LinkedIn'}} />
        <Field name="facebook" control={form.control} type="second-input" componentProps={{label: 'Facebook'}} />
      </div>
    </div>
  </div>
)
