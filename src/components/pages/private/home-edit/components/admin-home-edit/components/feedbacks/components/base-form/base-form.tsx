import {Field, FormModal} from '@/components/common'
import {Props} from './types'
import {Form} from '@/components/ui/form'

export const BaseForm = ({close, open, form, onSubmit, loading}: Props) => (
  <FormModal
    open={open}
    close={close}
    loading={loading}
    wrapForm={content => (
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Form {...form}>{content}</Form>
      </form>
    )}
  >
    <Field control={form.control} name="image" type="single-image-upload" componentProps={{required: true}} />
    <div className="mt-10">
      <Field control={form.control} name="name" type="second-input" componentProps={{label: 'Name', required: true}} />
    </div>
    <div className="mt-10">
      <Field
        control={form.control}
        name="position"
        type="second-input"
        componentProps={{label: 'Position', required: true}}
      />
    </div>
    <div className="mt-10">
      <Field
        control={form.control}
        name="feedback"
        type="cv-builder-md-editor"
        componentProps={{id: 'description', required: true}}
      />
    </div>
  </FormModal>
)
