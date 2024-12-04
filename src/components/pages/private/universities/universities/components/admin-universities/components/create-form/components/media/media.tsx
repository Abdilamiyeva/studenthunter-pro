import {Field} from '@/components/common'
import {Props} from './types'

export const Media = ({form}: Props) => (
  <div>
    <Field type="card-images-uploader" name="media" control={form.control} />
  </div>
)
