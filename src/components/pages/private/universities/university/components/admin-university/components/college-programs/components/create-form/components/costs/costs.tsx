import {Field} from '@/components/common'
import {Props} from './types'
import {useValidationOptions} from '@/hooks/use-validation-options'

export const Costs = ({form}: Props) => {
  const getValidationOptions = useValidationOptions()

  return (
    <div className="grid grid-cols-2 gap-x-6">
      <Field
        componentProps={{label: 'Tuition fee (USD)', placeholder: 'Enter tuition fee', required: true}}
        name="fee"
        type="second-input"
        rules={getValidationOptions(true)}
        control={form.control}
      />
      <Field
        componentProps={{label: 'Fee description', placeholder: 'Enter fee description'}}
        name="fee_description"
        type="second-input"
        control={form.control}
      />
      <div className="col-span-2">
        <h2 className="text-blue font-bold leading-6 mt-10 mb-3">Description about scholarship</h2>
        <Field
          type="cv-builder-md-editor"
          control={form.control}
          componentProps={{id: 'description_about_scholarship_id'}}
          name="scholarship_description"
        />
      </div>
      <div className="col-span-2 pt-10">
        <p className="mb-2.5 text-blue-1 font-bold leading-6">
          Scholarship <span className="text-orange">(PDF)</span>
        </p>
        <Field type="file-input" control={form.control} name="scholarship" />
      </div>
    </div>
  )
}
