/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react'
import {Props} from './types'
import {ConvertArrowsIcon} from '@/icons'
import {Checkboxes} from '..'
import {cn} from '@/lib/utils'

export const DoubleCheckboxes = ({
  firstListValues: firstListVals,
  onFirstListValuesChange,
  secondListValues,
  onSecondListValuesChange,
  checkboxes,
  firstListLabel,
  secondListLabel,
}: Props) => {
  const [openSecondList, setOpenSecondList] = useState(false)
  const [secondListOptions, setSecondListOptions] = useState([])
  const [firstListValues, setFirstListValues] = useState(firstListVals)

  useEffect(() => {
    const firstListSelecteds = Object.entries(firstListValues)
      .filter(([, value]) => value)
      .map(([key]) => key)

    const updatedSecondListOptions = [].concat(
      ...(checkboxes
        .filter(checkbox => firstListSelecteds.includes(checkbox.value))
        .map(checkbox => checkbox.options) as any),
    )
    const secondListOptionNames = updatedSecondListOptions.map(option => (option as any).value)
    onSecondListValuesChange(
      Object.fromEntries(Object.entries(secondListValues).filter(([key]) => secondListOptionNames.includes(key))),
    )

    setSecondListOptions(updatedSecondListOptions)

    onFirstListValuesChange(firstListValues)
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
            <Checkboxes values={firstListValues} onChange={setFirstListValues} checkboxes={checkboxes} />
          </div>
        ) : (
          <div>
            <Checkboxes values={secondListValues} onChange={onSecondListValuesChange} checkboxes={secondListOptions} />
          </div>
        )}
      </div>
    </div>
  )
}
