import {Loader} from '@/components/common'
import {Props} from './types'

export const TableLoader = ({colSpan}: Props) => (
  <tr>
    <td colSpan={colSpan} className="bg-white">
      <div className="relative h-56">
        <Loader className="absolute" />
      </div>
    </td>
  </tr>
)
