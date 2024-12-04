import {Avatar, Button} from '@/components/common'
import {EditIcon, TrashIcon} from '@/icons'
import {useState} from 'react'
import {EditForm} from '..'
import {Props} from './types'
import MDEditor from '@uiw/react-md-editor'
import {getImageURL} from '@/utils/get-image'
import {useDeleteFeedbackMutation} from '@/features/home-edit'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'

export const FeedbackCard = ({feedback}: Props) => {
  const [deleteFeedback, {isLoading}] = useDeleteFeedbackMutation()
  const [open, setOpen] = useState(false)
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onDelete = async () => {
    await handleRequest({
      request: async () => {
        const result = await deleteFeedback({feedbackID: feedback._id})
        return result
      },
      onSuccess: () => {
        toast({title: 'Feedback successfully deleted!'})
      },
    })
  }

  return (
    <div className="bg-white shadow-box rounded-2xl">
      <div className="border-b border-blue-15 pt-6 pb-7 px-6">
        <div className="flex items-center gap-4 mb-6">
          <Avatar
            src={getImageURL(feedback.image)}
            fullName={feedback.name}
            className="min-w-[60px] min-h-[60px] rounded-full"
          />
          <div>
            <h5 className="text-base font-bold leading-6.5 mb-1">{feedback.name}</h5>
            <p className="text-blue-1 text-xs leading-4">{feedback.position}</p>
          </div>
        </div>
        <MDEditor.Markdown className="text-blue-1" source={feedback.feedback} />
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
          loading={isLoading}
          onClick={onDelete}
          variant="outline"
          theme="orange"
          icon={<TrashIcon className="min-w-[16px] min-h-[16px]" />}
          className="text-sm font-bold leading-5.5 px-0 py-2 rounded"
        >
          Delete
        </Button>
      </div>
      <EditForm open={open} close={() => setOpen(false)} feedback={feedback} type={feedback.type} />
    </div>
  )
}
