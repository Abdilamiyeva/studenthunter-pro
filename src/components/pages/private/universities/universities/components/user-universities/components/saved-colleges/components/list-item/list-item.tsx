import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Link} from 'react-router-dom'
import {Avatar, Button} from '@/components/common'
import {MailIcon} from '@/icons'

export const ListItem = ({index, university}: Props) => (
  <TableRow>
    <TableCell className="text-blue text-xs font-semibold leading-5 pl-4">{index + 1}</TableCell>
    <TableCell className="text-left">
      <Link to={`/dashboard/user-universities/${university.id}`}>
        <div className="flex items-center gap-x-4">
          <div>
            <Avatar src={university.img} fullName={university.name} />
          </div>
          <div className="flex flex-col ">
            <span className="text-sm font-bold leading-8 hover:text-blue-9 duration-100">{university?.name}</span>
            <span className="text-blue-2 text-xs font-normal leading-4">{university?.location}</span>
          </div>
        </div>
      </Link>
    </TableCell>
    <TableCell className="text-sm font-medium leading-5">
      <p className="text-blue-9">{university.phone}</p>
    </TableCell>
    <TableCell>
      <div className="w-full flex justify-center">
        <Button
          variant="outline"
          className="flex items-center gap-1.5 bg-blue-5 border border-blue-4 px-4 py-2 text-sm font-bold leading-5 rounded"
          icon={<MailIcon />}
          noSpaceBetweenIcon
        >
          Message
        </Button>
      </div>
    </TableCell>
    <TableCell>
      <div className="w-full flex justify-center">
        <Button
          variant="outline"
          theme="orange"
          className="bg-transparent border-orange text-orange rounded px-[26px] py-2 text-sm font-medium leading-5"
        >
          Remove
        </Button>
      </div>
    </TableCell>
  </TableRow>
)
