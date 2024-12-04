import {useState} from 'react'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import dayjs from 'dayjs'
import {cn} from '@/lib/utils'
import {Calendar} from '@/components/ui/calendar'
import {Props} from './types'

export const DatePicker = ({label, required, value, onChange}: Props) => {
  const [date, setDate] = useState(value)

  const onDateChange = (dateValue: Date | string) => {
    setDate(dateValue)

    if (onChange) {
      onChange(dateValue as Date)
    }
  }
  return (
    <label>
      {label && (
        <span className="block mb-2.5 text-blue-1 leading-6 font-bold">
          {label} {required && <span className="text-orange">*</span>}
        </span>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <button
            className={cn(
              'bg-blue-7 w-full rounded-lg py-4 px-6 text-xl leading-7.5 peer text-start',
              date ? 'text-blue' : 'text-blue-4',
            )}
          >
            {date ? dayjs(date).format('DD.MM.YYYY') : 'Select Date'}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date as Date}
            onSelect={(dateValue: any) => onDateChange(dateValue)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </label>
  )
}
