import {Avatar, Button} from '@/components/common'
import {TableCell, TableRow} from '@/components/common/table/components'
import {MailIcon} from '@/icons'
import {Link} from 'react-router-dom'
import {Props} from './types'

export const ListItem = ({university, index}: Props) => {
  const getStatusBtnColor = (status: string) => {
    switch (status) {
      case 'applied':
        return 'bg-green-4 text-green'
      case 'in process':
        return 'bg-orange-11 text-orange-6'
      case 'cancelled':
        return 'bg-orange-10 text-orange'
    }
  }
  return (
    <TableRow>
      <TableCell className="text-blue text-xs font-semibold leading-5 pl-4">{index + 1}</TableCell>
      <TableCell className="text-left">
        <Link to={`/dashboard/user-universities/${university.id}`}>
          <div className="flex items-center gap-x-4">
            <div>
              <Avatar src={university.img} fullName={university.name} />
            </div>
            <div className="flex flex-col ">
              <span className="text-sm font-bold leading-8">{university?.name}</span>
              <span className="text-blue-2 text-xs font-normal leading-4">{university?.location}</span>
            </div>
          </div>
        </Link>
      </TableCell>
      <TableCell className="text-sm font-medium leading-5">
        {university.applicationStatus === 'in process' ? (
          <p className="text-blue-9">To finish process choose the faculty</p>
        ) : (
          <p>{university.program}</p>
        )}
      </TableCell>
      <TableCell className="text-sm  font-medium leading-7 ">
        <div className="w-full flex justify-center">
          <p
            className={` font-bold capitalize w-24 rounded-sm text-center ${getStatusBtnColor(
              university.applicationStatus,
            )}`}
          >
            {university.applicationStatus}
          </p>
        </div>
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
    </TableRow>
  )
}
