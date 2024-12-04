/* eslint-disable no-console */
import {Field, FormModal} from '@/components/common'
import {Props} from './types'
import {useForm} from 'react-hook-form'
import {Form} from '@/components/ui/form'

export const EditForm = ({close, open}: Props) => {
  const form = useForm()

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
      <h2 className="mb-7 text-blue text-xl font-bold leading-8">About job</h2>
      <Field type="cv-builder-md-editor" name="about" control={form.control} componentProps={{id: 'job_id'}} />
    </FormModal>
  )
}
