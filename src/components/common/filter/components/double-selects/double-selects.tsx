/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react'
import {Props} from './types'
import {ConvertArrowsIcon} from '@/icons'
import {Selects} from '..'
import {cn} from '@/lib/utils'

export const DoubleSelects = ({
  firstListValues,
  onFirstListValuesChange,
  secondListValues,
  onSecondListValuesChange,
  selects,
  firstListLabel,
  secondListLabel,
}: Props) => {
  const [openSecondList, setOpenSecondList] = useState(false)
  const [secondListOptions, setSecondListOptions] = useState([])

  useEffect(() => {
    const firstListSelecteds = Object.entries(firstListValues)
      .filter(([, value]) => value)
      .map(([key]) => key)

    const updatedSecondListOptions = [].concat(
      ...(selects.filter(select => firstListSelecteds.includes(select.value)).map(select => select.options) as any),
    )
    const secondListOptionNames = updatedSecondListOptions.map(option => (option as any).value)
    onSecondListValuesChange(
      Object.fromEntries(Object.entries(secondListValues).filter(([key]) => secondListOptionNames.includes(key))),
    )

    setSecondListOptions(updatedSecondListOptions)
  }, [firstListValues])

  return (
    <div>
      <div className="flex items-center justify-between border-b border-blue-5 text-xs leading-5 font-bold pb-1">
        <button
          onClick={() => setOpenSecondList(false)}
          disabled={!openSecondList}
          className={cn(
            'relative after:absolute after:bg-blue after:h-px after:w-full after:-bottom-1 after:left-0 after:duration-75',
            openSecondList && 'after:opacity-0 text-blue-2',
          )}
        >
          {firstListLabel}
        </button>
        <button
          onClick={() => setOpenSecondList(prev => !prev)}
          className={cn('duration-200', openSecondList ? 'rotate-180' : 'rotate-0')}
        >
          <ConvertArrowsIcon className="w-3 h-3" />
        </button>
        <button
          onClick={() => setOpenSecondList(true)}
          disabled={openSecondList}
          className={cn(
            'relative after:absolute after:bg-blue after:h-px after:w-full after:-bottom-1 after:left-0 after:duration-75',
            !openSecondList && 'after:opacity-0 text-blue-2',
          )}
        >
          {secondListLabel}
        </button>
      </div>
      <div className="mt-5">
        {!openSecondList ? (
          <div>
            <Selects values={firstListValues} onChange={onFirstListValuesChange} selects={selects} />
          </div>
        ) : (
          <div>
            <Selects values={secondListValues} onChange={onSecondListValuesChange} selects={secondListOptions} />
          </div>
        )}
      </div>
    </div>
  )
}
