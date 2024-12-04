/* eslint-disable no-console */
import {Field, FormModal} from '@/components/common'
import {Form} from '@/components/ui/form'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Props} from './types'
import {useUpdateConsultingMutation} from '@/features/consulting/consulting'
import {UpdateConsultingRequestBody} from '@/features/consulting/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'

export const EditForm = ({close, open, consulting}: Props) => {
  const [updateConsulting, {isLoading: isUpdating}] = useUpdateConsultingMutation()
  const form = useForm<UpdateConsultingRequestBody>({
    defaultValues: {
      about: consulting.about,
    },
  })
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<UpdateConsultingRequestBody> = async formData => {
    await handleRequest({
      request: async () => {
        const result = await updateConsulting({consultingID: consulting._id, body: formData})
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'Consulting successfully updated!'})
      },
    })
  }

  return (
    <FormModal
      className="min-w-[785px]"
      open={open}
      close={close}
      loading={isUpdating}
      wrapForm={content => (
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
