import {SubmitHandler, useForm} from 'react-hook-form'
import {BaseForm} from '..'
import {Props} from './types'
import {CreateFAQsRequest} from '@/features/home-edit/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {useCreateFAQMutation} from '@/features/home-edit'

export const AddForm = ({close, open}: Props) => {
  const [createFAQ, {isLoading}] = useCreateFAQMutation()
  const form = useForm<CreateFAQsRequest>()
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<CreateFAQsRequest> = async formData => {
    await handleRequest({
      request: async () => {
        const result = await createFAQ(formData)
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'FAQ successfully created!'})
      },
    })
  }

  return <BaseForm close={close} open={open} form={form} onSubmit={onSubmit} loading={isLoading} />
}
