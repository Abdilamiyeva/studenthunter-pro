import {useValidationOptions} from '@/hooks/use-validation-options'
import {Field} from '@/components/common/field'
import {Props} from './types'

export const PersonalDetails = ({form}: Props) => {
  const getValidationOptions = useValidationOptions()

  return (
    <div>
      <h1 className="text-xl lg:text-6xl leading-14.5 font-bold">Personal Details</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20 mt-7">
        <Field
          control={form.control}
          name="profession"
          type="second-input"
          componentProps={{
            label: 'Profession',
            placeholder: 'Enter your profession',
            required: true,
          }}
        />
        <Field control={form.control} name="userImage" type="image-uploader" rules={getValidationOptions(true)} />
        <Field
          control={form.control}
          name="firstName"
          type="second-input"
          componentProps={{
            label: 'Name',
            placeholder: 'Enter your name',
            required: true,
          }}
        />
        <Field
          control={form.control}
          name="lastName"
          type="second-input"
          componentProps={{
            label: 'Surname',
            placeholder: 'Enter your surname',
            required: true,
          }}
        />
        <Field
          control={form.control}
          name="email"
          type="second-input"
          rules={getValidationOptions(true, 2, 100, {
            validate: (email: string) =>
              !(email.includes('@') && email.includes('.')) ? 'Please enter correct email' : undefined,
          })}
          componentProps={{
            label: 'Email',
            placeholder: 'Enter your email',
            required: true,
          }}
        />
        <Field
          control={form.control}
          name="phoneNumber"
          type="second-input"
          componentProps={{
            type: 'tel',
            label: 'Phone',
            placeholder: 'Enter your phone number',
            required: true,
          }}
        />
        <Field
          control={form.control}
          name="country"
          type="second-input"
          componentProps={{
            label: 'Country',
            placeholder: 'Enter country name',
            required: true,
          }}
        />
        <Field
          control={form.control}
          name="address"
          type="second-input"
          componentProps={{
            label: 'Address',
            placeholder: 'Enter address name',
            required: true,
          }}
        />
      </div>
    </div>
  )
}
