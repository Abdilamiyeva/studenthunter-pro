import {Props} from './types'

export const TableNotFound = ({colSpan, text}: Props) => (
  <tr>
    <td colSpan={colSpan}>
      <div className="grid place-content-center h-56 text-blue-2">{text || 'Nothing found...'}</div>
    </td>
  </tr>
)
