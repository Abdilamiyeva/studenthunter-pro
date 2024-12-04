import {useMemo} from 'react'
import {Props} from './types'
import {cn} from '@/lib/utils'

export const StatusBtn = ({status}: Props) => {
  const themeClassName = useMemo(() => {
    switch (status) {
      case 0:
        return 'bg-orange-6'
      case 1:
        return 'bg-green'
      case 2:
        return 'bg-orange'
      case 3:
        return 'bg-blue-2'
    }
  }, [status])

  return (
    <div
      className={cn(
        'relative text-sm font-semibold text-white leading-5 px-4 py-1 rounded-sm w-max mx-auto',
        themeClassName,
      )}
    >
      {
        {
          0: 'Shortlist',
          1: 'Accepted',
          2: 'Rejected',
          3: 'Not set',
        }[status]
      }
    </div>
  )
}
