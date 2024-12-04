import {Button} from '@/components/common'
import {EditIcon} from '@/icons'
import {Props} from './types'

export const EditButton = ({onClick}: Props) => (
  <Button onClick={onClick} className="py-2 px-7 text-sm rounded" icon={<EditIcon className="w-3 h-3" />}>
    Edit
  </Button>
)
