import {Avatar, Button} from '@/components/common'
import {EditIcon, TrashIcon} from '@/icons'
import {EditForm} from '..'
import {useState} from 'react'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'
import {useDeleteHighlightMutation} from '@/features/home-edit'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useToast} from '@/components/ui/use-toast'

export const HighLightCard = ({highlight}: Props) => {
  const [deleteHighlight, {isLoading}] = useDeleteHighlightMutation()
  const [open, setOpen] = useState(false)
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onDelete = async () => {
    await handleRequest({
      request: async () => {
        const result = await deleteHighlight({highlightID: highlight._id})
        return result
      },
      onSuccess: () => {
        toast({title: 'Instagram highlight successfully updated!'})
      },
    })
  }

  return (
    <div className="bg-white shadow-box pt-3 pb-5 px-3 rounded-2xl">
      <a target="_blank" href={highlight.link} className="relative">
        <Avatar
          src={getImageURL('')}
          fullName="Instagram Post"
          className="min-h-[200px] md:min-h-[300px] max-h-[300px] rounded-none w-full"
          baseClassName="rounded-none"
        />
        {/* <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] border-2 border-white bg-white/50 grid place-content-center rounded-full text-white">
          <VideoPlayIcon className="w-8 h-8" />
        </button>
        <InstagramIcon className="absolute bottom-4 right-4 text-white w-7 h-7" /> */}
      </a>
      <div className="grid grid-cols-2 gap-5 pt-3 px-3">
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
      <EditForm open={open} close={() => setOpen(false)} highlight={highlight} />
    </div>
  )
}
