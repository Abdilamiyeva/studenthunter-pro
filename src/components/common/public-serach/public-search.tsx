import {SearchIcon} from '@/icons'
import {Button} from '../button'
import {Props} from './types'
import {cn} from '@/lib/utils'
export const PublicSearch = ({placeholder, buttonTitile, className}: Props) => (
  <label
    className={cn(
      'flex items-stretch justify-between bg-white shadow-box pt-3.5 pb-4 pl-7 pr-5 rounded-lg -mt-14 mb-16',
      className,
    )}
  >
    <input type="search" placeholder={placeholder} className="w-full" />
    <Button theme="orange" icon={<SearchIcon className="min-w-[20px] min-h-[20px] mr-2" />} className="text-xl w-max">
      {buttonTitile}
    </Button>
  </label>
)
