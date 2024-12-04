import {Field} from '@/components/common'
import {Props} from './types'
import {COUNTRIES, STATES} from '@/constants/countries'

export const Overview = ({form}: Props) => (
  <div className="grid grid-cols-2 gap-x-[25px] gap-y-10">
    <Field
      type="second-input"
      name="title"
      control={form.control}
      componentProps={{label: 'Company name', required: true, placeholder: 'Enter company name'}}
    />
    <Field
      type="second-input"
      name="phone_number"
      control={form.control}
      componentProps={{type: 'tel', label: 'Mobile number', required: true, placeholder: 'Enter mobile number'}}
    />
    <Field
      type="select"
      name="country"
      control={form.control}
      componentProps={{
        label: 'Country',
        required: true,
        placeholder: 'Select country',
        options: COUNTRIES.map(country => ({label: country.name, value: country.name})),
      }}
    />
    <Field
      type="select"
      name="city"
      control={form.control}
      componentProps={{
        label: 'City',
        required: true,
        placeholder: 'Select city',
        options: STATES.filter(state => form.watch('country') === state.country).map(state => ({
          label: state.name,
          value: state.name,
        })),
      }}
    />
    <Field
      type="second-input"
      name="contact_person"
      control={form.control}
      componentProps={{label: 'Contact person name', required: true, placeholder: 'Enter contact person name'}}
    />
    <Field
      type="second-input"
      name="contact_role"
      control={form.control}
      componentProps={{label: 'Contact person position', required: true, placeholder: 'Enter contact person position'}}
    />
    <Field
      type="second-input"
      name="website"
      control={form.control}
      componentProps={{label: 'Company website', placeholder: 'Enter company website'}}
    />
    <Field
      type="second-input"
      name="inn"
      control={form.control}
      componentProps={{label: 'Tax number', required: true, placeholder: 'Enter tax number'}}
    />
    <Field
      type="second-input"
      name="email"
      control={form.control}
      componentProps={{label: 'Company email', required: true, placeholder: 'Enter company email'}}
    />
    <Field
      type="second-input"
      name="password"
      control={form.control}
      componentProps={{type: 'password', label: 'Password', required: true, placeholder: 'Enter password'}}
    />
  </div>
)
