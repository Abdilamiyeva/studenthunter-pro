import {cn} from '@/lib/utils'
import {Spinner} from '..'
import {Props} from './types'

export const Loader = ({className}: Props) => (
  <div
    className={cn(
      'fixed top-0 left-0 w-full h-full grid place-content-center bg-white rounded-2xl shadow-box z-20',
      className,
    )}
  >
    <Spinner className="border-blue w-10 h-10 border-6" />
  </div>
)
