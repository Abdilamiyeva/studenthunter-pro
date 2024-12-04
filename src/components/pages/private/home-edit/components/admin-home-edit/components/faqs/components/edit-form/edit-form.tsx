import {SubmitHandler, useForm} from 'react-hook-form'
import {BaseForm} from '..'
import {Props} from './types'
import {UpdateFAQsRequestBody} from '@/features/home-edit/types'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'
import {useUpdateFAQMutation} from '@/features/home-edit'

export const EditForm = ({close, open, faq}: Props) => {
  const [updateFAQ, {isLoading}] = useUpdateFAQMutation()
  const form = useForm<UpdateFAQsRequestBody>({
    defaultValues: {
      question: faq.question,
      answer: faq.answer,
    },
  })
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onSubmit: SubmitHandler<UpdateFAQsRequestBody> = async formData => {
    await handleRequest({
      request: async () => {
        const result = await updateFAQ({faqID: faq._id, body: formData})
        return result
      },
      onSuccess: () => {
        close()
        toast({title: 'FAQ successfully updated!'})
      },
    })
  }

  return <BaseForm open={open} close={close} onSubmit={onSubmit} form={form} loading={isLoading} />
}
