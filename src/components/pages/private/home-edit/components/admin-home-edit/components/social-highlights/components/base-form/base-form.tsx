/* eslint-disable no-console */
import {Field, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {Props} from './types'

export const BaseForm = ({close, open, form, onSubmit, loading}: Props) => (
  <FormModal
    open={open}
    close={close}
    loading={loading}
    wrapForm={content => (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>{content}</form>
      </Form>
    )}
  >
    <Field
      control={form.control}
      name="link"
      type="second-input"
      componentProps={{label: 'Instragram link', required: true}}
    />
  </FormModal>
)
