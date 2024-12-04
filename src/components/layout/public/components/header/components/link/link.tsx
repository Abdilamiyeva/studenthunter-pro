import {useMemo} from 'react'
import {Link as RouterLink, useLocation} from 'react-router-dom'
import {cn} from '@/lib/utils'
import {Props} from './types'

export const Link = ({path, label, className}: Props) => {
  const location = useLocation()
  const isActive = useMemo(() => location.pathname.includes(path.split('?')[0]), [location, path])
  return (
    <RouterLink
      to={path}
      className={cn(
        'w-max min-w-max text-blue-2 font-medium leading-6.5 text-base hover:text-blue duration-default relative after:absolute after:w-full after:h-0.5 after:rounded-full after:top-8 after:left-0 after:bg-blue after:duration-default',
        isActive ? 'text-blue' : 'after:opacity-0',
        className,
      )}
    >
      {label}
    </RouterLink>
  )
}
