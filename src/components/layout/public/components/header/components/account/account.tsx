import {Dropdown} from '@/components/common'
import {ArrowUpIcon, DashboardIcon, UserAvatar, ExitIcon} from '@/icons'
import {useNavigate} from 'react-router-dom'

export const Account = () => {
  const navagate = useNavigate()
  return (
    <div className="z-20">
      <Dropdown
        className="py-4"
        buttons={[
          {
            icon: <DashboardIcon className="mt-px w-4 h-4" />,
            label: <span className="text-blue text-base leading-[26px]">My dashboard</span>,
            onClick: () => navagate('/dashboard'),
          },
          {
            icon: <ExitIcon className="w-[17px] h-[17px]" />,
            label: <span className="text-blue text-base leading-[26px]">Logout</span>,
            onClick: () => navagate('/auth/logout'),
          },
        ]}
      >
        <button className="flex items-center gap-x-2">
          <UserAvatar className="w-10 h-10" />
          <ArrowUpIcon />
        </button>
      </Dropdown>
    </div>
  )
}
