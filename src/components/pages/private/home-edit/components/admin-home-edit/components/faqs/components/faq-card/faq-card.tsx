import {Button} from '@/components/common'
import {EditIcon, TrashIcon} from '@/icons'
import {EditForm} from '..'
import {useState} from 'react'
import {Props} from './types'
import {useDeleteFAQMutation} from '@/features/home-edit'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'

export const FAQCard = ({faq}: Props) => {
  const [deleteFAQ, {isLoading}] = useDeleteFAQMutation()
  const [open, setOpen] = useState(false)
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onDelete = async () => {
    await handleRequest({
      request: async () => {
        const result = await deleteFAQ({faqID: faq._id})
        return result
      },
      onSuccess: () => {
        toast({title: 'FAQ successfully deleted!'})
      },
    })
  }

  return (
    <div className="bg-white shadow-box rounded-2xl h-max">
      <div className="px-6 pt-6 pb-5 border-b border-blue-15">
        <h5 className="text-base font-bold leading-6.5 mb-4">{faq.question}</h5>
        <p className="text-blue-1 text-xs leading-5 line-clamp-5">{faq.answer}</p>
      </div>
      <div className="grid grid-cols-2 gap-5 py-5 px-6">
        <Button
          variant="outline"
          icon={<EditIcon className="min-w-[16px] min-h-[16px] w-4 h-4" />}
          className="text-sm font-bold leading-5.5 px-0 py-2 border-blue rounded"
          onClick={() => setOpen(true)}
        >
          Edit
        </Button>
        <Button
          onClick={onDelete}
          loading={isLoading}
          variant="outline"
          theme="orange"
          icon={<TrashIcon className="min-w-[16px] min-h-[16px]" />}
          className="text-sm font-bold leading-5.5 px-0 py-2 rounded"
        >
          Delete
        </Button>
      </div>
      <EditForm close={() => setOpen(false)} open={open} faq={faq} />
    </div>
  )
}
