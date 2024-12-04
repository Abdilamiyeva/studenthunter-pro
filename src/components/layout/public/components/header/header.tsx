import {Fragment, useRef, useState, useEffect, useMemo} from 'react'
import {Link as RouterLink, useLocation} from 'react-router-dom'
import {Button, Image, Dropdown as CommonDropdown} from '@/components/common'
import {HEADER_LINKS} from './constants/header-links'
import {Account, Dropdown, Link, Serach} from './components'
import {LinkType} from './constants/header-links/types'
import {HamburgerIcon, LeftArrowIcon, SearchIcon} from '@/icons'
import {RuIcon, UKIcon, UZIcon} from '@/icons/flags'
import {cn} from '@/lib/utils'
import {useGetUserQuery} from '@/features/auth'
import {useTranslation} from 'react-i18next'

export const Header = () => {
  const fixedHeaderRef = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState(0)
  const [openMobileNav, setOpenMobileNav] = useState(false)
  const [isSearch, setIsSearch] = useState(true)
  const location = useLocation()
  const {data: {data: user} = {}} = useGetUserQuery('')
  const {i18n} = useTranslation()
  useEffect(() => {
    if (fixedHeaderRef.current?.offsetHeight) {
      setHeight(fixedHeaderRef.current?.offsetHeight)
    }
  }, [fixedHeaderRef])

  useEffect(() => {
    setOpenMobileNav(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflowY = openMobileNav ? 'hidden' : 'auto'
  }, [openMobileNav])
  const languages = useMemo(
    () => [
      {
        label: (
          <span className="flex items-center gap-x-2">
            <UKIcon /> <span>English</span>
          </span>
        ),
        onClick: () => changeLangHandle('en'),
      },
      {
        label: (
          <span className="flex items-center gap-x-4">
            <RuIcon className="text-xl" /> <span>Russia</span>
          </span>
        ),
        onClick: () => changeLangHandle('ru'),
      },
      {
        label: (
          <span className="flex items-center gap-x-4">
            <UZIcon /> <span>Uzbek</span>
          </span>
        ),
        onClick: () => changeLangHandle('uz'),
      },
    ],
    [],
  )

  const changeLangHandle = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <div style={{height: height + 'px'}} className="w-full" />
      <header ref={fixedHeaderRef} className="bg-white fixed top-0 w-full z-20 border-b border-blue-4">
        <div className=" relative container flex items-center justify-between py-4 md:py-6">
          <RouterLink to="/" className="z-20 mr-5">
            <Image src="/images/logo.svg" alt="Student Hunter" imageClassName="w-11 md:w-14 h-11 md:h-14" />
          </RouterLink>
          {isSearch ? (
            <div className="hidden xl:flex items-center gap-8">
              {HEADER_LINKS.map((link, index) => (
                <Fragment key={index}>
                  {(link as any).sublinks?.length ? <Dropdown {...(link as any)} /> : <Link {...(link as LinkType)} />}
                </Fragment>
              ))}
              <RouterLink to="/auth/become-a-member">
                <Button variant="outline" className="border-blue bg-white pl-4 pr-5 py-2.5">
                  Become a member
                </Button>
              </RouterLink>
            </div>
          ) : (
            <Serach />
          )}
          <div className="flex items-center gap-4 xl:gap-7">
            <div className="flex items-center gap-6 xl:gap-7">
              {isSearch && (
                <button onClick={() => setIsSearch(prev => !prev)}>
                  <SearchIcon className="text-blue-4 hover:text-blue duration-default cursor-pointer w-5 h-5" />
                </button>
              )}
              <CommonDropdown
                buttons={languages}
                className="w-32"
                buttonClassName="justify-center w-full text-blue-2 text-base font-medium hover:text-blue duration-default"
              >
                <button type="button" className="flex items-center gap-2 text-blue-1 duration-default cursor-pointer">
                  <UKIcon />
                  Eng
                </button>
              </CommonDropdown>
            </div>
            <div className="hidden xl:flex items-center gap-4">
              {user?.email ? (
                <Account />
              ) : (
                <RouterLink to="/auth/login">
                  <Button className="pl-9 pr-10">Login</Button>
                </RouterLink>
              )}
            </div>
            <button
              type="button"
              onClick={() => setOpenMobileNav(true)}
              className="xl:hidden bg-blue-7 rounded-full w-10 h-10 grid place-content-center"
            >
              <HamburgerIcon className="w-4 h-4 text-blue-4" />
            </button>
          </div>
        </div>
      </header>
      <div
        className={cn(
          'fixed top-0 left-full w-full h-full z-50 overflow-y-auto duration-500',
          openMobileNav && 'left-0',
        )}
      >
        <div className="bg-blue-16 px-5 py-9">
          <button type="button" onClick={() => setOpenMobileNav(false)}>
            <LeftArrowIcon className="w-7 h-7" />
          </button>
          <div className="mt-9 mb-6">
            <h4 className="text-xl font-bold leading-7.5 mb-1">Welcome to Student Hunter</h4>
            <p className="text-blue-1 text-xs leading-4">Join the world’s largest user friendly platform</p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Button
              variant="outline"
              className="bg-transparent border border-blue-2 rounded px-12 py-1 font-medium leading-8.5"
            >
              Sign up
            </Button>
            <Button className="px-12 py-1 rounded font-medium leading-8.5">Login</Button>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-9 min-h-[calc(100%-260px)] bg-white px-6 py-10">
          <div className="flex flex-col gap-5">
            {HEADER_LINKS.map((link, index) => (
              <Fragment key={index}>
                {(link as any).sublinks?.length ? <Dropdown {...(link as any)} /> : <Link {...(link as LinkType)} />}
              </Fragment>
            ))}
          </div>
          <Button
            variant="outline"
            className="text-xl font-medium leading-7.5 px-5 py-2.5 border border-blue rounded-lg w-max"
          >
            Become a member
          </Button>
        </div>
      </div>
    </>
  )
}
