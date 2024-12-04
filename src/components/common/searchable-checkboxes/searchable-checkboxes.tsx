/* eslint-disable react-hooks/exhaustive-deps */
import {SearchIcon} from '@/icons'
import {Props} from './types'
import {Checkbox, Spinner} from '..'
import {ChangeEvent, useEffect, useState} from 'react'
import {useDebounce} from 'use-debounce'

export const SearchableCheckboxes = ({options, searching, searchPlaceholder, value, onChange, onSearch}: Props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery] = useDebounce(searchQuery, 500)
  const [checkeds, setCheckeds] = useState<string[]>([...(value || [])])
  const [values, setValues] = useState(
    Object.fromEntries(options.map(option => [option.value, checkeds?.includes(option.value)])),
  )

  const onCheckBox = (event: ChangeEvent<HTMLInputElement>, key: string) => {
    const updatedValue = {
      ...values,
      [key]: event.target.checked,
    }
    const updatedCheckeds = event.target.checked
      ? [...checkeds, key]
      : checkeds.filter(checkedOpt => checkedOpt !== key)
    setCheckeds(updatedCheckeds)
    setValues(updatedValue)

    if (onChange) {
      onChange(updatedCheckeds)
    }
  }

  useEffect(() => {
    if (debouncedQuery && onSearch) {
      onSearch(debouncedQuery)
    }
  }, [debouncedQuery])

  useEffect(() => {
    setValues(Object.fromEntries(options.map(option => [option.value, checkeds?.includes(option.value)])))
  }, [options])

  return (
    <div>
      <label className="flex items-center border border-blue-4 rounded-lg px-5 py-4 text-blue-2 text-xl leading-7.5">
        <div className="mr-5">{searching ? <Spinner className="border-blue-2" /> : <SearchIcon />}</div>
        <input
          placeholder={searchPlaceholder || 'Search...'}
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </label>
      <div className="flex flex-col gap-5 my-10 mx-5 max-h-[300px] overflow-y-auto">
        {searchQuery ? (
          options.length ? (
            options.map(option => (
              <Checkbox
                key={option.value}
                checked={values[option.value]}
                onChange={event => onCheckBox(event, option.value)}
                label={option.label}
                className="w-6 h-6"
                labelClassName="text-2xl"
              />
            ))
          ) : (
            <span>Nothing found</span>
          )
        ) : (
          <span>Type smth to search...</span>
        )}
      </div>
    </div>
  )
}
