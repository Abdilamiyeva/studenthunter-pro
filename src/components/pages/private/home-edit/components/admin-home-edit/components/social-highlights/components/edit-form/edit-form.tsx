import {SubmitHandler, useForm} from 'react-hook-form'
import {BaseForm} from '..'
import {Props} from './types'
import {UpdateInstagramHighlightRequestBody} from '@/features/home-edit/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {useUpdateHighlightMutation} from '@/features/home-edit'

export const EditForm = ({close, open, highlight}: Props) => {
  const [updateHighlight, {isLoading}] = useUpdateHighlightMutation()
  const form = useForm<UpdateInstagramHighlightRequestBody>({
    defaultValues: {link: highlight.link},
  })
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<UpdateInstagramHighlightRequestBody> = async formData => {
    await handleRequest({
      request: async () => {
        const result = await updateHighlight({highlightID: highlight._id, body: formData})
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'Instragram highlight successfully updated!'})
      },
    })
  }

  return <BaseForm close={close} open={open} form={form} onSubmit={onSubmit} loading={isLoading} />
}
