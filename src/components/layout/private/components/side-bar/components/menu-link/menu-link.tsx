import {useMemo} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {Props} from './types'

export const MenuLink = ({label, path, onClick, icon, isHiddenLabel}: Props) => {
  const {pathname} = useLocation()
  const isActive = useMemo(() => pathname === path, [pathname, path])
  return (
    <Link
      to={path as string}
      className={`min-w-max hover:bg-orange-3 hover:text-orange-6 w-full text-blue-1 py-3 pl-5 flex items-center  gap-x-5 my-1 relative ${
        isActive
          ? 'bg-orange-3 text-orange-6 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-1 before:rounded-md  before:h-8 before:bg-orange-6'
          : ''
      }`}
      onClick={onClick}
    >
      <span className={`w-5 h-5 ${isHiddenLabel ? 'ml-[5px]' : ''}`}>{icon}</span>
      <span className={isHiddenLabel ? ' !transition-all' : '!transition-all'}>{label}</span>
    </Link>
  )
}
