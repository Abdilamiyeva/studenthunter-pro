/* eslint-disable no-console */
import {Field, FormModal} from '@/components/common'
import {Props} from './types'
import {SubmitHandler, useForm} from 'react-hook-form'
import {Form} from '@/components/ui/form'
import {useUpdateUniversityMutation} from '@/features/university'
import {UpdateUniversityRequestBody} from '@/features/university/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useUploadFiles} from '@/hooks/use-upload-files'

export const EditForm = ({close, open, university}: Props) => {
  const [updateUniversity, {isLoading: isUpdating}] = useUpdateUniversityMutation()
  const form = useForm<UpdateUniversityRequestBody>({
    defaultValues: {
      media: university.media,
    },
  })
  const handleRequest = useHandleRequest()
  const [uploadFiles, isUploadingFiles] = useUploadFiles()

  const onSubmit: SubmitHandler<UpdateUniversityRequestBody> = async formData => {
    await handleRequest({
      request: async () => {
        const existedMedia = formData.media?.filter(media => typeof media === 'string') || []
        let currentUploadedMedia =
          (formData.media as any)?.filter((media: File | string) => media instanceof File) || []
        currentUploadedMedia = await uploadFiles(currentUploadedMedia)

        formData.media = [...existedMedia, ...currentUploadedMedia]

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
      open={open}
      close={close}
      loading={isUploadingFiles || isUpdating}
      wrapForm={content => (
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Form {...form}>{content}</Form>
        </form>
      )}
    >
      <div>
        <Field type="card-images-uploader" name="media" control={form.control} />
      </div>
    </FormModal>
  )
}
