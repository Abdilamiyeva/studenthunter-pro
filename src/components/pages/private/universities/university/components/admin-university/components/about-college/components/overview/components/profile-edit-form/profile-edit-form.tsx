/* eslint-disable no-console */
import {Field, FormModal} from '@/components/common'
import {Props} from './types'
import {Form} from '@/components/ui/form'
import {SubmitHandler, useForm} from 'react-hook-form'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useUpdateUniversityMutation} from '@/features/university'
import {UpdateUniversityRequestBody} from '@/features/university/types'

export const ProfileEditForm = ({close, open, university}: Props) => {
  const [updateUniversity, {isLoading: isUpdating}] = useUpdateUniversityMutation()
  const form = useForm<UpdateUniversityRequestBody>({
    defaultValues: university,
  })
  const handleRequest = useHandleRequest()

  const onSubmit: SubmitHandler<UpdateUniversityRequestBody> = async formData => {
    await handleRequest({
      request: async () => {
        const result = await updateUniversity({
          universityID: university._id,
          body: formData,
        })
        return result
      },
    })
  }

  return (
    <FormModal
      close={close}
      open={open}
      loading={isUpdating}
      wrapForm={content => (
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Form {...form}>{content}</Form>
        </form>
      )}
    >
      <div>
        <Field name="logo" control={form.control} type="single-image-upload" />
        <h1 className="text-blue text-xl font-bold leading-8 mt-10 mb-7">Social profiles</h1>
        <div className="grid grid-cols-2 gap-x-6 gap-y-7">
          <Field
            name="telegram"
            componentProps={{
              label: 'Telegram',
            }}
            control={form.control}
            type="second-input"
          />
          <Field
            name="instagram"
            componentProps={{
              label: 'Instagram',
            }}
            control={form.control}
            type="second-input"
          />
          <Field
            name="linkedin"
            componentProps={{
              label: 'LinkedIn',
            }}
            control={form.control}
            type="second-input"
          />
          <Field
            name="facebook"
            componentProps={{
              label: 'Facebook',
            }}
            control={form.control}
            type="second-input"
          />
        </div>
      </div>
    </FormModal>
  )
}
