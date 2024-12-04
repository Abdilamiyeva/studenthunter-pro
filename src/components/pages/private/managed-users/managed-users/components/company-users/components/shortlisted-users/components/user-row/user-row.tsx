import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {DotsDropdown, Image} from '@/components/common'
import {Link} from 'react-router-dom'
import {AcceptedUserIcon, MailIcon, ProfileIcon, RejectedUserIcon} from '@/icons'

export const UserRow = ({index}: Props) => (
  <TableRow>
    <TableCell className="text-blue text-xs font-semibold leading-5 pl-4 text-center">{index + 1}</TableCell>
    <TableCell>
      <Link to="/dashboard/users/user-id" className="flex items-center gap-4">
        <Image
          src="/images/demo-user.svg"
          alt="Demo user"
          imageClassName="min-w-[40px] w-10 min-h-[40px] h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-semibold leading-5">Mukhammadamin</p>
          <p className="text-blue-2 text-xs leading-4">Abdullayev</p>
        </div>
      </Link>
    </TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5">Graphic Designer</TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">3 yrs 2 mo</TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">5.5</TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">1450</TableCell>
    <TableCell>
      <div className="bg-orange-6 text-white w-max mx-auto px-3 py-0.5 text-sm font-medium leading-5 rounded">
        Shortlist
      </div>
    </TableCell>
    <TableCell>
      <div className="grid place-content-center">
        <DotsDropdown
          contentClassName="w-48"
          buttonClassName="text-sm leading-5"
          buttons={[
            {
              label: 'Profile',
              icon: <ProfileIcon className="w-5 h-5" />,
              className: 'text-blue-1 hover:!text-blue-1 hover:!bg-blue-1/10',
            },
            {
              label: 'Message',
              icon: <MailIcon className="w-5 h-5" />,
              className: 'text-blue-1 hover:!text-blue-1 hover:!bg-blue-1/10',
            },
            {
              label: 'Move to accepted',
              icon: <AcceptedUserIcon className="w-5 h-5" />,
              className: 'text-green hover:!text-green hover:!bg-green/10',
            },
            {
              label: 'Move to rejected',
              icon: <RejectedUserIcon className="w-5 h-5" />,
              className: 'text-orange hover:!text-orange hover:!bg-orange/10',
            },
          ]}
        />
      </div>
    </TableCell>
  </TableRow>
)
