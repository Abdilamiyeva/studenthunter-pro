import React, {useEffect, useState} from 'react'
import {SecondInput} from '..'
import {Props} from './types'
import {XIcon} from '@/icons'

export const TagInput = ({label, className, onChange, value = [], placeholder}: Props) => {
  const [values, setValues] = useState<string[]>(value)
  const [input, setInput] = useState('')
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if (input !== '') {
        setValues([...values, input])
        setInput('')
        if (onChange) {
          onChange(values)
        }
      }
    }
  }

  const removeTag = (index: number) => {
    const currentValues = [...values]
    currentValues.splice(index, 1)
    setValues(currentValues)
  }

  useEffect(() => {
    if (onChange) {
      onChange(values)
    }
  }, [values, onChange])

  return (
    <React.Fragment>
      <SecondInput
        placeholder={placeholder}
        className={className}
        label={label}
        value={input}
        onChange={e => setInput(e.target.value.trim())}
        type="text"
        onKeyDown={handleKeyDown}
      />
      <div className="flex flex-wrap gap-5 mt-6">
        {values.map((tag, index) => (
          <div key={index} className="rounded-lg flex items-center gap-x-2 px-3 py-[6px] bg-blue-5">
            <span className="text-blue-1 text-sm font-semibold leading-5">{tag}</span>
            <span onClick={() => removeTag(index)} className="cursor-pointer">
              <XIcon className="w-3 h-3 text-blue" />
            </span>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}
