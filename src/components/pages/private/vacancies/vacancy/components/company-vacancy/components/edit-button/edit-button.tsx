import {Button} from '@/components/common'
import {EditIcon} from '@/icons'

export const EditButton = () => (
  <Button className="py-1.5 px-7 text-sm rounded" icon={<EditIcon className="w-3 h-3" />}>
    Edit
  </Button>
)
