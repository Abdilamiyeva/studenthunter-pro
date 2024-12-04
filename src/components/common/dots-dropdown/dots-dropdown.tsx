import {DotsColIcon} from '@/icons'
import {Dropdown} from '..'
import {Props} from './types'
import {cn} from '@/lib/utils'

export const DotsDropdown = ({buttons, className, contentClassName, buttonClassName}: Props) => (
  <Dropdown
    buttons={buttons}
    className={cn('px-2 py-2 w-28 rounded-lg', contentClassName)}
    buttonClassName={cn('text-xs', buttonClassName)}
  >
    <button className={cn('text-blue-2', className)}>
      <DotsColIcon />
    </button>
  </Dropdown>
)
