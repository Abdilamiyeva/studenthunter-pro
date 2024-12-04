import {RightArrowIcon} from '@/icons'
import {cn} from '@/lib/utils'
import {Link} from 'react-router-dom'
import {Props} from './types'

export const Breadcrumb = ({links = [], className}: Props) => (
  <div
    className={cn(
      'max-w-max md:w-max md:h-12 md:bg-blue-7 md:border md:border-blue-4 text-sm md:py-2 md:px-4 flex md:justify-between items-center md:gap-2.5 gap-1 md:rounded-lg',
      className,
    )}
  >
    {links.map((link, index) => (
      <div key={index} className="flex md:gap-x-2.5 gap-x-1 items-center">
        {link.path ? (
          <Link to={link.path} onClick={link.onClick}>
            <span className="mt-2 hover:text-blue-2 duration-default">{link.label}</span>
          </Link>
        ) : (
          <button onClick={link.onClick}>{link.label}</button>
        )}
        {link.path || link.onClick ? <RightArrowIcon className="text-xs md:h-4 md:w-4 h-2 w-2 text-blue-2" /> : ''}
      </div>
    ))}
  </div>
)
