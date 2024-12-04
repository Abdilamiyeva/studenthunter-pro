import {SubmitHandler, useForm} from 'react-hook-form'
import {BaseForm} from '..'
import {Props} from './types'
import {UpdateFeedbackRequestBody} from '@/features/home-edit/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {useUpdateFeedbackMutation} from '@/features/home-edit'
import {useUploadFiles} from '@/hooks/use-upload-files'

export const EditForm = ({close, open, feedback, type}: Props) => {
  const [updateFeedback, {isLoading}] = useUpdateFeedbackMutation()
  const [uploadFiles, isUploadingFiles] = useUploadFiles()
  const form = useForm<UpdateFeedbackRequestBody>({
    defaultValues: feedback,
  })
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<UpdateFeedbackRequestBody> = async formData => {
    await handleRequest({
      request: async () => {
        if (typeof formData.image !== 'string') {
          formData.image = (await uploadFiles([formData.image as any]))[0]
        }
        const result = await updateFeedback({feedbackID: feedback._id, body: formData})
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'Feedback successfully updated!'})
      },
    })
  }

  return (
    <BaseForm
      close={close}
      open={open}
      form={form}
      onSubmit={onSubmit}
      loading={isUploadingFiles || isLoading}
      type={type}
    />
  )
}
