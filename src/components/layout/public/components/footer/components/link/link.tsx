import {useMemo} from 'react'
import {Link as RouterLink, useLocation} from 'react-router-dom'
import {Props} from './types'
import {cn} from '@/lib/utils'

export const Link = ({children, path}: Props) => {
  const location = useLocation()
  const isActive = useMemo(() => location.pathname.includes(path), [location, path])

  return (
    <RouterLink to={path} className={cn('text-blue-1 link', isActive && 'text-blue font-semibold')}>
      {children}
    </RouterLink>
  )
}
