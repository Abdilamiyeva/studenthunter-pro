import {Dropdown} from '@/components/common'
import {ArrowUpIcon, UserAvatar} from '@/icons'
import {useNavigate} from 'react-router-dom'

export const Account = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Dropdown buttons={[{label: 'Profile'}, {label: 'Logout', onClick: () => navigate('/auth/logout')}]}>
        <button className="flex text-blue-1 items-center gap-x-3">
          <UserAvatar className="w-10 h-10" />
          Admin
          <ArrowUpIcon />
        </button>
      </Dropdown>
    </div>
  )
}
