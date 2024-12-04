import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {Link} from 'react-router-dom'
import {DotsDropdown, Image} from '@/components/common'
import {useMemo} from 'react'
import {cn} from '@/lib/utils'
import {AcceptedUserIcon, MailIcon, ProfileIcon, RejectedUserIcon, ShortlistedUserIcon} from '@/icons'

export const UserRow = ({index}: Props) => {
  const status = useMemo<0 | 1 | 2 | 3>(() => (index % 2 === 0 ? 0 : 1), [index])
  const themeClassName = useMemo(() => {
    switch (status) {
      case 0:
        return 'bg-orange-6'
      case 1:
        return 'bg-green'
      case 2:
        return 'bg-orange'
      case 3:
        return 'text-blue-2'
    }
  }, [status])

  return (
    <TableRow>
      <TableCell>
        <div className="grid place-content-center text-xs font-bold leading-5">{index + 1}</div>
      </TableCell>
      <TableCell>
        <Link to="/dashboard/users/company/applied/user-id" className="flex items-center gap-4 group">
          <Image src="/images/demo-user.svg" alt="Demo user" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col gap-px">
            <p className="group-hover:text-sky-1 text-sm leading-5 font-bold duration-150">Akbar</p>
            <p className="text-blue-2 text-xs leading-4">Aliyev</p>
          </div>
        </Link>
      </TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">Web design</TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">5</TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">5.5</TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">1450</TableCell>
      <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">
        <div
          className={cn(
            'min-w-[80px] w-max text-white mx-auto rounded py-0.5 text-center text-sm font-medium leading-5',
            themeClassName,
          )}
        >
          {
            {
              0: 'Shortlist',
              1: 'Accepted',
              2: 'Rejected',
              3: 'Not set',
            }[status]
          }
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
              {
                label: 'Move to shortlist',
                icon: <ShortlistedUserIcon className="w-5 h-5" />,
                className: 'text-orange-6 hover:!text-orange-6 hover:!bg-orange-6/10',
              },
            ]}
          />
        </div>
      </TableCell>
    </TableRow>
  )
}
