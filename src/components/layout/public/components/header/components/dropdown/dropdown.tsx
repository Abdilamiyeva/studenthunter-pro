import {Tooltip} from '@/components/common'
import {SublinkType} from '../../constants/header-links/types'
import {Link} from '..'
import {DownIcon} from '@/icons'

export const Dropdown = ({sublinks, label}: SublinkType) => (
  <Tooltip
    content={
      <div className="flex flex-col gap-4 px-3 py-3 min-w-[150px]">
        {sublinks.map(sublink => (
          <Link key={sublink.path} {...sublink} className="after:top-7" />
        ))}
      </div>
    }
  >
    <div className="min-w-max flex items-center gap-1 text-blue-2">
      <span className="cursor-pointer">{label}</span>
      <DownIcon className="w-3 h-3" />
    </div>
  </Tooltip>
)
