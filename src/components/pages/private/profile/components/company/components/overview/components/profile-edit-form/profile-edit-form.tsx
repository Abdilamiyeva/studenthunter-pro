/* eslint-disable no-console */
import {Field, FormModal} from '@/components/common'
import {useForm} from 'react-hook-form'
import {Props} from './types'
import {Form} from '@/components/ui/form'

export const ProfileEditForm = ({close, open}: Props) => {
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
      <Field control={form.control} name="avatar" type="single-image-upload" />
      <div className="mt-10">
        <h2 className="text-blue text-xl font-bold leading-8 mb-7">Social profiles</h2>
      </div>
      <div className="grid gap-y-7 gap-x-6 grid-cols-2">
        <Field control={form.control} name="telegram" type="second-input" componentProps={{label: 'Telegram'}} />
        <Field control={form.control} name="instagram" type="second-input" componentProps={{label: 'Instagram'}} />
        <Field control={form.control} name="linked-in" type="second-input" componentProps={{label: 'LinkedIn'}} />
        <Field control={form.control} name="facebook" type="second-input" componentProps={{label: 'Facebook'}} />
      </div>
    </FormModal>
  )
}
