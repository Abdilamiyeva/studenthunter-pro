import {Dropdown, Input} from '@/components/common'
import {ArrowUpIcon, MenuIcon} from '@/icons'
import {RuIcon, UKIcon, UZIcon} from '@/icons/flags'
import {forwardRef, useMemo} from 'react'
import {Account} from './components'
import {Props} from './types'
import {cn} from '@/lib/utils'

export const Header = forwardRef<HTMLDivElement | null, Props>(({setMenu, menu}, ref) => {
  const languages = useMemo(
    () => [
      {
        label: (
          <span className="flex items-center gap-x-2">
            <UKIcon /> <span>English</span>
          </span>
        ),
      },
      {
        label: (
          <span className="flex items-center gap-x-4">
            <RuIcon className="text-xl" /> <span>Russia</span>
          </span>
        ),
      },
      {
        label: (
          <span className="flex items-center gap-x-4">
            <UZIcon /> <span>Uzbek</span>
          </span>
        ),
      },
    ],
    [],
  )

  return (
    <header
      ref={ref}
      className={cn(
        'px-7 sm:px-4 border-b border-blue-4 w-full fixed top-0 left-0 z-40 h-[100px] bg-white',
        menu ? 'lg:pl-14' : 'lg:pl-56',
      )}
    >
      <div className="flex justify-between items-center w-full h-full sm:px-8 lg:px-16">
        <button onClick={() => setMenu((prev: any) => !prev)}>
          <MenuIcon className="w-8 sm:w-10 h-8 sm:h-10" />
        </button>
        <div className="lg:inline-block hidden">
          <Input type="search" baseClassName="!w-[600px] border-blue-4 bg-blue-7" />
        </div>
        <div className="flex gap-x-6">
          <Dropdown
            buttons={languages}
            className="w-32"
            buttonClassName="justify-center w-full text-blue-2 text-base font-medium hover:text-blue duration-default"
          >
            <button
              type="button"
              className="text-blue-1 flex items-center gap-2 hover:text-blue duration-default cursor-pointer"
            >
              <UKIcon />
              Eng
              <ArrowUpIcon />
            </button>
          </Dropdown>
          <Account />
        </div>
      </div>
    </header>
  )
})
