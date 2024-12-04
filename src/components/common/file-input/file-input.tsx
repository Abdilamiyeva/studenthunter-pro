import {FileEarmarkText, XIcon} from '@/icons'
import {Props} from './types'
import {ChangeEvent, useMemo, useState} from 'react'

export const FileInput = ({label, required, onChange, value}: Props) => {
  const [file, setFile] = useState<File | undefined>(value || undefined)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0])
      if (onChange) {
        onChange(event.target.files[0])
      }
    }
  }

  const render = useMemo(() => {
    if (file?.name) {
      return (
        <div className="flex gap-x-16 items-center">
          <p>{file?.name}</p>
          <button className="z-10" onClick={() => setFile(undefined)}>
            <XIcon className="w-4 h-4" />
          </button>
        </div>
      )
    } else {
      return <p>Choose File</p>
    }
  }, [file])

  return (
    <label>
      {label && (
        <span className="block mb-2.5 text-blue-1 leading-6 font-bold">
          {label} {required && <span className="text-orange">*</span>}
        </span>
      )}
      <div className="cursor-pointer block bg-blue-7 w-full rounded-lg py-4 px-6 text-xl leading-7.5 peer">
        <div className="flex items-center gap-x-2 text-blue-2 ">
          <FileEarmarkText />
          {render}
          <input onChange={handleChange} hidden type="file" id="file" />
        </div>
      </div>
    </label>
  )
}
