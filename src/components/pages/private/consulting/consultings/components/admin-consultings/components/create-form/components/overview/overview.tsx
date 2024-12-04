import {Field} from '@/components/common'
import {Props} from './types'

export const Overview = ({form}: Props) => (
  <div className="grid grid-cols-2 gap-x-6 gap-y-7">
    <Field
      name="title"
      control={form.control}
      type="second-input"
      componentProps={{label: 'Consulting name', required: true, placeholder: 'Enter consulting name'}}
    />
    <Field
      name="phone_number"
      control={form.control}
      type="second-input"
      componentProps={{
        type: 'tel',
        label: 'Mobile number',
        required: true,
        placeholder: 'Enter consulting contact number',
      }}
    />
    <Field
      name="contact_person"
      control={form.control}
      type="second-input"
      componentProps={{label: 'Contact person name', required: true, placeholder: "Enter consulter's name"}}
    />
    <Field
      name="contact_role"
      control={form.control}
      type="second-input"
      componentProps={{label: 'Contact person position', required: true, placeholder: "Enter consulter's position"}}
    />
    <Field
      name="services_fee"
      control={form.control}
      type="second-input"
      componentProps={{
        type: 'number',
        label: 'Cost of service (USD)',
        required: true,
        placeholder: 'Enter consulting fee',
      }}
    />
    <Field
      name="website"
      control={form.control}
      type="second-input"
      componentProps={{label: 'Consulting website', required: true, placeholder: 'Enter consulting website'}}
    />
    <Field
      name="email"
      control={form.control}
      type="second-input"
      componentProps={{label: 'Company email', required: true, placeholder: 'Enter company email'}}
    />
    <Field
      name="password"
      control={form.control}
      type="second-input"
      componentProps={{label: 'Password', required: true, placeholder: '******'}}
    />
  </div>
)
