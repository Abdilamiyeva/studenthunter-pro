import {SubmitHandler, useForm} from 'react-hook-form'
import {BaseForm} from '..'
import {Props} from './types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useCreateHighlightMutation} from '@/features/home-edit'
import {CreateInstagramHighlightRequest} from '@/features/home-edit/types'
import {useToast} from '@/components/ui/use-toast'

export const AddForm = ({close, open}: Props) => {
  const [createHighlight, {isLoading}] = useCreateHighlightMutation()
  const form = useForm<CreateInstagramHighlightRequest>()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<CreateInstagramHighlightRequest> = async formData => {
    await handleRequest({
      request: async () => {
        const result = await createHighlight(formData)
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'Instragram highlight successfully created!'})
      },
    })
  }

  return <BaseForm open={open} close={close} form={form} onSubmit={onSubmit} loading={isLoading} />
}
