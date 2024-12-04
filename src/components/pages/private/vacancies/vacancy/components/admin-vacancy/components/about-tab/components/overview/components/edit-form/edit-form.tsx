/* eslint-disable no-console */
import {Field, FormModal} from '@/components/common'
import {useForm} from 'react-hook-form'
import {Props} from './types'
import {Form} from '@/components/ui/form'
import {useValidationOptions} from '@/hooks/use-validation-options'

export const EditForm = ({close, open}: Props) => {
  const form = useForm()
  const getValidationOption = useValidationOptions()
  return (
    <FormModal
      open={open}
      close={close}
      wrapForm={content => (
        <form onSubmit={form.handleSubmit(data => console.log(data))}>
          <Form {...form}>{content}</Form>
        </form>
      )}
    >
      <h2 className="text-blue text-xl font-bold leading-8 mb-8">Overview</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-10">
        <Field
          type="second-input"
          name="title"
          rules={getValidationOption(true)}
          control={form.control}
          componentProps={{label: 'Job title', required: true}}
        />
        <Field
          type="select"
          name="experience_level"
          rules={getValidationOption(true)}
          control={form.control}
          componentProps={{label: 'Job title', required: true, options: []}}
        />

        <Field
          type="select"
          name="Specialities"
          rules={getValidationOption(true)}
          control={form.control}
          componentProps={{label: 'Specialities', required: true, options: []}}
        />
        <Field
          type="select"
          name="type"
          rules={getValidationOption(true)}
          control={form.control}
          componentProps={{label: 'Job type', required: true, options: []}}
        />

        <Field
          type="select"
          name="country"
          rules={getValidationOption(true)}
          control={form.control}
          componentProps={{label: 'Specialities', required: true, options: []}}
        />

        <Field
          type="select"
          name="city"
          rules={getValidationOption(true)}
          control={form.control}
          componentProps={{label: 'Job type', options: [], required: true, placeholder: 'Enter city'}}
        />
        <div className="col-span-2">
          <div className="flex gap-x-12">
            <Field
              type="radio-container"
              name="salary"
              control={form.control}
              componentProps={{
                options: [
                  {label: 'Exact', value: 'exact'},
                  {label: 'Negotiable', value: 'negotiable'},
                ],
              }}
            />
          </div>
        </div>
        <Field
          type="second-input"
          name="price"
          rules={getValidationOption(true)}
          control={form.control}
          componentProps={{type: '', label: 'Monthly Salary (USD)', required: true}}
        />
      </div>
    </FormModal>
  )
}
