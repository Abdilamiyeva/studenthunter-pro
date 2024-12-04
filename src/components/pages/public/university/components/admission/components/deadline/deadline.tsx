import dayjs from 'dayjs'
import {Props} from './types'

export const DeadLine = ({university}: Props) => (
  <div>
    <div>
      <p className="text-blue-1 text-sm font-normal leading-5">Application start date</p>
      <h2 className="text-blue text-base font-bold leadin-6">
        {dayjs(new Date(university?.created_at)).format('DD.MM.YYYY')}
      </h2>
    </div>
  </div>
)
