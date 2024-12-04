/* eslint-disable no-console */
import {Field, FormModal} from '@/components/common'
import {Props} from './types'
import {Form} from '@/components/ui/form'

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
    <div>
      <Field
        name="question"
        control={form.control}
        type="second-input"
        componentProps={{label: 'Question', required: true}}
      />
    </div>
    <div className="mt-10">
      <Field
        name="answer"
        control={form.control}
        type="second-input"
        componentProps={{label: 'Answer', required: true}}
      />
    </div>
  </FormModal>
)
