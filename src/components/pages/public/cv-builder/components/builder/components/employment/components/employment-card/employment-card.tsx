import {Field} from '@/components/common'
import {ArrowUpIcon, TrashIcon} from '@/icons'
import {cn} from '@/lib/utils'
import {useCallback, useState} from 'react'
import {Props} from './types'
import dayjs from 'dayjs'

export const EmploymentCard = ({remove, index, form}: Props) => {
  const [open, setOpen] = useState(false)
  const getFieldName = useCallback((name: string) => `employments.${index}.${name}`, [index])
  const profession = form.watch(`employments.${index}.profession`)
  const companyName = form.watch(`employments.${index}.companyName`)
  const dates = form.watch(`employments.${index}.dates`)

  return (
    <div className="flex items-start gap-2.5">
      <div
        className="w-full border border-blue-4 rounded-lg overflow-hidden duration-300"
        style={{height: (open ? 720 : 104) + 'px'}}
      >
        <button
          type="button"
          onClick={() => setOpen(prev => !prev)}
          className="flex items-center justify-between w-full rounded-lg py-6 px-7 hover:bg-blue-5 duration-default"
        >
          {profession && companyName && dates?.start && dates?.end ? (
            <div className="text-start">
              <h3 className="text-xl leading-7.5 font-bold">
                {profession} at {companyName}
              </h3>
              <p className="text-blue-2 leading-6.5">
                {dayjs(dates.start).format('MMM YYYY')} - {dayjs(dates.end).format('MMM YYYY')}
              </p>
            </div>
          ) : (
            <span className="h-[56px] text-xl font-bold leading-7.5 flex items-center">(Not specified)</span>
          )}
          <ArrowUpIcon className={cn('w-8 h-8 text-blue-2 duration-default', open && 'rotate-180')} />
        </button>
        <div className="grid grid-cols-2 gap-y-7 gap-x-12 py-3 px-7">
          <Field
            type="second-input"
            control={form.control}
            name={getFieldName('profession')}
            componentProps={{
              label: 'Profession',
              placeholder: 'Enter profession',
              required: true,
            }}
          />
          <Field
            type="second-input"
            control={form.control}
            name={getFieldName('companyName')}
            componentProps={{
              label: 'Company',
              placeholder: 'Enter company name',
              required: true,
            }}
          />
          <Field
            type="cv-builder-date-picker"
            control={form.control}
            name={getFieldName('dates')}
            componentProps={{
              label: 'Start & End Date',
              required: true,
            }}
          />
          <Field
            type="second-input"
            control={form.control}
            name={getFieldName('city')}
            componentProps={{
              label: 'City',
              placeholder: 'Enter city name',
              required: true,
            }}
          />
          <div className="col-span-2">
            <Field
              type="cv-builder-md-editor"
              control={form.control}
              name={getFieldName('description')}
              componentProps={{
                id: `employment-description-${index}`,
              }}
            />
          </div>
        </div>
      </div>
      <button type="button" onClick={remove} className="min-w-max mt-10 text-blue-2">
        <TrashIcon />
      </button>
    </div>
  )
}
