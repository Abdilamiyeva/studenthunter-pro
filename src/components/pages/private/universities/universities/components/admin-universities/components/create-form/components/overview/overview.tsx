import {Field} from '@/components/common'
import {Props} from './types'
import {useValidationOptions} from '@/hooks/use-validation-options'
import {COUNTRIES, STATES} from '@/constants/countries'
import {STUDY_LEVELS} from '@/constants/study-levels'

export const Overview = ({form}: Props) => {
  const getValidationOptions = useValidationOptions()
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10">
      <Field
        name="title"
        componentProps={{
          label: 'University name',
          placeholder: 'Hult International Univer...',
          required: true,
        }}
        control={form.control}
        type="second-input"
        rules={getValidationOptions(true)}
      />
      <Field
        name="study_level"
        componentProps={{
          label: 'Study level',
          required: true,
          options: STUDY_LEVELS,
        }}
        control={form.control}
        type="checkboxes-dropdown"
        rules={getValidationOptions(true)}
      />
      <Field
        name="country"
        componentProps={{
          label: 'Country',
          required: true,
          options: COUNTRIES.map(country => ({label: country.name, value: country.name})),
        }}
        control={form.control}
        type="select"
        rules={getValidationOptions(true)}
      />
      <Field
        name="city"
        componentProps={{
          label: 'State',
          required: true,
          options: STATES.filter(state => form.watch('country') === state.country).map(state => ({
            label: state.name,
            value: state.name,
          })),
        }}
        control={form.control}
        type="select"
        rules={getValidationOptions(true)}
      />
      <Field
        name="contact_person"
        componentProps={{
          label: 'Contact person name',
          placeholder: 'Contact person',
          required: true,
        }}
        control={form.control}
        type="second-input"
        rules={getValidationOptions(true)}
      />
      <Field
        name="contact_role"
        componentProps={{
          label: 'Contact person position',
          placeholder: 'Contact person position',
          required: true,
        }}
        control={form.control}
        type="second-input"
        rules={getValidationOptions(true)}
      />
      <Field
        name="programs_count"
        componentProps={{
          type: 'number',
          label: 'Programs',
          placeholder: 'Enter Programs Count',
          required: true,
        }}
        control={form.control}
        type="second-input"
        rules={getValidationOptions(true)}
      />
      <Field
        name="rating"
        componentProps={{
          label: 'Rating',
          placeholder: "Enter University's Rating",
          required: true,
        }}
        control={form.control}
        type="second-input"
        rules={getValidationOptions(true)}
      />
      <Field
        name="tuition_fee"
        componentProps={{
          label: 'Tution fee is US Dollars',
          placeholder: 'Tution fee',
          required: true,
        }}
        control={form.control}
        type="second-input"
        rules={getValidationOptions(true)}
      />
      <Field
        name="phone_number"
        componentProps={{
          type: 'tel',
          label: 'Telephone number',
          required: true,
        }}
        control={form.control}
        type="second-input"
        rules={getValidationOptions(true)}
      />
      <Field
        name="email"
        componentProps={{
          label: 'University email',
          placeholder: 'University email',
          required: true,
        }}
        control={form.control}
        type="second-input"
        rules={getValidationOptions(true)}
      />
      <Field
        name="password"
        componentProps={{
          type: 'password',
          label: 'Password',
          placeholder: '******',
          required: true,
        }}
        control={form.control}
        type="second-input"
        rules={getValidationOptions(true)}
      />
    </div>
  )
}
