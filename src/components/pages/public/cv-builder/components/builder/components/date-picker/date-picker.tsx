import {useState} from 'react'
import dayjs from 'dayjs'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {Props, ValueType} from './types'
import {Calendar} from '@/components/ui/calendar'
import {cn} from '@/lib/utils'

export const DatePicker = ({label, required, value, onChange}: Props) => {
  const [dates, setDates] = useState({
    start: value?.start || undefined,
    end: value?.end || undefined,
  })

  const onDateChange = (val: any, key: string) => {
    const updatedValue = {...dates, [key]: val}
    setDates(updatedValue)

    if (onChange) {
      onChange(updatedValue as ValueType)
    }
  }

  return (
    <label>
      {label && (
        <span className="block mb-2.5 text-blue-1 leading-6 font-bold">
          {label} {required && <span className="text-orange">*</span>}
        </span>
      )}
      <div className="grid grid-cols-2 gap-5 relative">
        <Popover>
          <PopoverTrigger asChild>
            <button
              className={cn(
                'bg-blue-7 w-full rounded-lg py-4 px-6 text-xl leading-7.5 peer text-start',
                dates.start ? 'text-blue' : 'text-blue-4',
              )}
            >
              {dates.start ? dayjs(dates.start).format('DD.MM.YYYY') : 'Select Date'}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={dates.start}
              onSelect={date => onDateChange(date, 'start')}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <button
              className={cn(
                'bg-blue-7 w-full rounded-lg py-4 px-6 text-xl leading-7.5 peer text-start',
                dates.end ? 'text-blue' : 'text-blue-4',
              )}
            >
              {dates.end ? dayjs(dates.end).format('DD.MM.YYYY') : 'Select Date'}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={dates.end} onSelect={date => onDateChange(date, 'end')} initialFocus />
          </PopoverContent>
        </Popover>
      </div>
    </label>
  )
}
