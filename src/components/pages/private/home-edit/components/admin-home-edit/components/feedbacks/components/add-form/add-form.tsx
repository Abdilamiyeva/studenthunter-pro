import {SubmitHandler, useForm} from 'react-hook-form'
import {BaseForm} from '..'
import {Props} from './types'
import {CreateFeedbackRequest} from '@/features/home-edit/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {useCreateFeedbackMutation} from '@/features/home-edit'
import {useUploadFiles} from '@/hooks/use-upload-files'

export const AddForm = ({close, open, type}: Props) => {
  const [createFeedback, {isLoading}] = useCreateFeedbackMutation()
  const [uploadFiles, isUploadingFiles] = useUploadFiles()
  const form = useForm<CreateFeedbackRequest>()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<CreateFeedbackRequest> = async formData => {
    await handleRequest({
      request: async () => {
        formData.image = (await uploadFiles([formData.image as any]))[0]
        const result = await createFeedback({...formData, type})
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'Feedback successfully created!'})
      },
    })
  }

  return (
    <BaseForm
      close={close}
      open={open}
      type={type}
      form={form}
      onSubmit={onSubmit}
      loading={isUploadingFiles || isLoading}
    />
  )
}
