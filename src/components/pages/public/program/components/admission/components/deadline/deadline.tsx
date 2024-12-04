import dayjs from 'dayjs'
import {Props} from './types'

export const Deadline = ({program}: Props) => (
  <div>
    <div>
      <p className="text-blue-1 text-sm font-normal leading-5">Application start date</p>
      <h2 className="text-blue text-base font-bold leadin-6">
        {dayjs(new Date(program?.application_start)).format('DD.MM.YYYY')}
      </h2>
    </div>
    <div className="mt-5">
      <p className="text-blue-1 text-sm font-normal leading-5">Deadline by</p>
      <h2 className="text-blue text-base font-bold leadin-6">
        {dayjs(new Date(program?.deadline)).format('DD.MM.YYYY')}
      </h2>
    </div>
  </div>
)
