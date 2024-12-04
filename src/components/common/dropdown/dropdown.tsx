import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {cn} from '@/lib/utils'
import {Props} from './types'
import {Spinner} from '..'

export const Dropdown = ({children, buttons, className, buttonClassName}: Props) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
    <DropdownMenuContent className={cn('flex flex-col gap-1 w-48 px-3 py-3 shadow-dropdown rounded-xl', className)}>
      {buttons.map((button, index) => (
        <DropdownMenuItem
          key={index}
          onClick={button.onClick}
          className={cn('hover:bg-transparent cursor-pointer text-blue hover:text-blue/80', button.className)}
        >
          <button type="button" className={cn('flex items-center gap-3', buttonClassName)}>
            {button.loading ? (
              <Spinner className={cn('w-4 h-4 border-2 border-blue-2', button.loaderClassName)} />
            ) : (
              button.icon
            )}
            {button.label}
          </button>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
)
