/* eslint-disable no-console */
import {Field, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {useForm} from 'react-hook-form'
import {Props} from './types'

export const EditForm = ({close, open}: Props) => {
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
      <h2 className="text-blue text-xl font-bold leading-8 mb-3">About Company</h2>
      <Field
        control={form.control}
        name="about"
        type="cv-builder-md-editor"
        componentProps={{id: 'about_company_id'}}
      />
    </FormModal>
  )
}
