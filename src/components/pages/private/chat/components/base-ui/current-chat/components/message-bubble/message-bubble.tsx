import dayjs from 'dayjs'
import {Props} from './types'
import {cn} from '@/lib/utils'

export const MessageBubble = ({createdAt, tickIcon, text, className}: Props) => (
  <div className={cn('px-4 py-2.5 w-auto rounded-lg flex gap-3 justify-between shadow-md items-center', className)}>
    <div>
      <p className="2xl:text-lg md:text-sm  leading-6">{text}</p>
    </div>
    <div className="min-w-[50px] flex h-full items-end justify-between">
      <span className="text-xs">{dayjs(createdAt).format('HH:mm')}</span>
      {tickIcon && <span className="pb-0.5">{tickIcon}</span>}
    </div>
  </div>
)
