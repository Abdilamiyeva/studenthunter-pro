import {Fragment, useMemo, useState} from 'react'
import {Select} from './components'
import {Props} from './types'
import {CloseIcon, Convert2Icon, HamburgerIcon} from '@/icons'
import {Button} from '..'
import {cn} from '@/lib/utils'

export const DashboardFilters = ({fields, resetable, wrapperClassName, leftSideContent, fieldClassName}: Props) => {
  const [openMobileFilters, setOpenMobileFilters] = useState(false)
  const initialValue = useMemo(
    () =>
      Object.fromEntries(
        fields.map(field => [
          field.key,
          Object.fromEntries(
            field.checkboxes.map(checkbox => [
              checkbox.key,
              Object.fromEntries(checkbox.checkboxes.map(subcheckbox => [subcheckbox.key, false])),
            ]),
          ),
        ]),
      ),
    [fields],
  )
  const [values, setValues] = useState<any>(initialValue)

  if (!fields?.length) {
    return <></>
  }

  const filterFields = (
    <>
      {fields.map(field => (
        <Fragment key={field.key}>
          {
            {
              select: (
                <Select
                  {...field}
                  className={cn(fieldClassName, field.className)}
                  value={values[field.key]}
                  onChange={updatedValue => setValues((prev: any) => ({...prev, [field.key]: updatedValue}))}
                />
              ),
            }[field.type]
          }
        </Fragment>
      ))}
      {resetable && (
        <button
          onClick={() => setValues(initialValue)}
          className="min-w-max flex items-center justify-center gap-2 py-4 px-9 rounded-lg bg-white border border-blue-4 hover:bg-blue-5 duration-default shadow-box-sm w-full"
        >
          <Convert2Icon className="w-4 h-4" />
          <span className="text-sm leading-4 font-medium">Reset Filter</span>
        </button>
      )}
    </>
  )

  return (
    <div className={cn('w-full', wrapperClassName)}>
      <div>
        <div
          className="hidden lg:grid items-center gap-5 max-w-full"
          style={{gridTemplateColumns: `repeat(${fields.length + (resetable ? 1 : 0)}, minmax(0, 1fr))`}}
        >
          {filterFields}
        </div>
        <Button
          onClick={() => setOpenMobileFilters(prev => !prev)}
          variant={openMobileFilters ? 'default' : 'outline'}
          className="lg:hidden py-3.5 px-5"
        >
          {openMobileFilters ? <CloseIcon className="scale-150" /> : <HamburgerIcon />}
        </Button>
        {leftSideContent}
      </div>
      {openMobileFilters && <div className="flex lg:hidden flex-col gap-3 mt-4">{filterFields}</div>}
    </div>
  )
}
