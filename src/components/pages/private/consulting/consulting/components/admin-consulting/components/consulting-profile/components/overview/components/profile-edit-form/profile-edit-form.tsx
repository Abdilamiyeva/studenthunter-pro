/* eslint-disable no-console */
import {Field, FormModal} from '@/components/common'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Props} from './types'
import {Form} from '@/components/ui/form'
import {UpdateConsultingRequestBody} from '@/features/consulting/types'
import {useUpdateConsultingMutation} from '@/features/consulting/consulting'
import {useToast} from '@/components/ui/use-toast'
import {useUploadFiles} from '@/hooks/use-upload-files'
import {useHandleRequest} from '@/hooks/use-handle-request'

export const ProfileEditForm = ({close, open, consulting}: Props) => {
  const [updateConsulting, {isLoading: isUpdating}] = useUpdateConsultingMutation()
  const [uploadFiles, isUploadingFiles] = useUploadFiles()
  const form = useForm<UpdateConsultingRequestBody>({
    defaultValues: {
      logo: consulting.logo,
      telegram: consulting.socials?.telegram,
      instagram: consulting.socials?.instagram,
      linkedin: consulting.socials?.linkedin,
      facebook: consulting.socials?.facebook,
    },
  })
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<UpdateConsultingRequestBody> = async formData => {
    await handleRequest({
      request: async () => {
        formData.logo = (await uploadFiles([formData.logo as any]))[0]

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
      open={open}
      close={close}
      loading={isUploadingFiles || isUpdating}
      wrapForm={content => (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>{content}</form>
        </Form>
      )}
    >
      <Field control={form.control} name="logo" type="single-image-upload" componentProps={{required: true}} />
      <div className="mt-10">
        <h2 className="text-blue text-xl font-bold leading-8 mb-7">Social profiles</h2>
      </div>
      <div className="grid gap-y-7 gap-x-6 grid-cols-2">
        <Field control={form.control} name="telegram" type="second-input" componentProps={{label: 'Telegram'}} />
        <Field control={form.control} name="instagram" type="second-input" componentProps={{label: 'Instagram'}} />
        <Field control={form.control} name="linkedin" type="second-input" componentProps={{label: 'LinkedIn'}} />
        <Field control={form.control} name="facebook" type="second-input" componentProps={{label: 'Facebook'}} />
      </div>
    </FormModal>
  )
}
