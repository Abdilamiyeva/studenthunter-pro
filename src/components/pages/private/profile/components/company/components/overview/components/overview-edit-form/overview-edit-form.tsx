/* eslint-disable no-console */
import {Field, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {Props} from './types'
import {useForm} from 'react-hook-form'

export const OverViewEditForm = ({close, open}: Props) => {
  const form = useForm()
  return (
    <FormModal
      className="min-w-[785px]"
      open={open}
      close={close}
      wrapForm={content => (
        <form onSubmit={form.handleSubmit(data => console.log(data))}>
          <Form {...form}>{content}</Form>
        </form>
      )}
    >
      <h2 className="text-blue text-xl font-bold leading-7 mb-7">Overview</h2>
      <div className="grid gap-x-6 gap-y-10 grid-cols-2">
        <Field
          control={form.control}
          name="name"
          type="second-input"
          componentProps={{label: 'Company  name', required: true}}
        />
        <Field
          control={form.control}
          name="description"
          type="second-input"
          componentProps={{type: 'tel', label: 'Telephone number', required: true}}
        />
        <Field
          control={form.control}
          name="country"
          type="select"
          componentProps={{label: 'Country', required: true, options: []}}
        />
        <Field
          control={form.control}
          name="city"
          type="second-input"
          componentProps={{label: 'City', required: true, placeholder: 'Enter city name'}}
        />
        <Field
          control={form.control}
          name="contact_person_name"
          type="second-input"
          componentProps={{label: 'Contact person name', required: true, placeholder: 'Contact person name'}}
        />
        <Field
          control={form.control}
          name="contact_person_position"
          type="second-input"
          componentProps={{label: 'Contact person position', required: true, placeholder: 'Contact person position'}}
        />
        <Field
          control={form.control}
          name="company_website"
          type="second-input"
          componentProps={{label: 'Company website', required: true, placeholder: 'Company website'}}
        />
        <Field
          control={form.control}
          name="tax_number"
          type="second-input"
          componentProps={{label: 'Tax number', required: true, placeholder: 'Tax number'}}
        />
      </div>
    </FormModal>
  )
}
