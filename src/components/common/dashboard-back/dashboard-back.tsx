import {Link} from 'react-router-dom'
import {Props} from './types'
import {LeftSideIcon} from '@/icons'
import {MouseEventHandler} from 'react'

export const DashboardBack = ({link, children, onClick}: Props) => {
  const content = (
    <div className="flex items-center gap-1.5 min-w-max">
      <LeftSideIcon className="w-6 h-6" />
      <span className="text-xl font-bold leading-7.5">{children || 'Back'}</span>
    </div>
  )

  return link ? (
    <Link to={link} onClick={onClick as MouseEventHandler<HTMLAnchorElement>}>
      {content}
    </Link>
  ) : (
    <button onClick={onClick as MouseEventHandler<HTMLButtonElement>}>{content}</button>
  )
}
