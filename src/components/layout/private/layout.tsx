import {useEffect, useState} from 'react'
import {Header, SideBar} from './components'
import {Props} from './types'
import {useLocation} from 'react-router-dom'
import {cn} from '@/lib/utils'

export const PrivateLayout = ({children}: Props) => {
  const [openMenu, setOpenMenu] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpenMenu(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflowY = openMenu ? 'hidden' : 'auto'
  }, [openMenu])

  return (
    <main style={{minHeight: `calc(100vh - 100px)`}} className="bg-blue-5">
      <Header setMenu={setOpenMenu} menu={openMenu} />
      <SideBar menu={openMenu} setMenu={setOpenMenu} />
      <div className={cn('duration-300 px-7 md:px-14 py-7 mt-[100px] lg:ml-[240px]', openMenu && 'lg:ml-[50px]')}>
        {children}
      </div>
    </main>
  )
}
