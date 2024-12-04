/* eslint-disable react-hooks/exhaustive-deps */
import {CircleXIcon, ImageIcon} from '@/icons'
import {ChangeEvent, useEffect, useRef, useState} from 'react'
import {Image} from '..'
import {useHandleError} from '@/hooks/use-handle-error'
import {Props} from './types'
import {acceptedImageFormats} from '@/constants/accepted-image-formats'

export const ImageUploader = ({value, onChange}: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [placeholderImage, setPlaceholderImage] = useState('')
  const handleError = useHandleError()

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file && acceptedImageFormats.includes(file.type)) {
      setPlaceholderImage(URL.createObjectURL(file))

      if (onChange) {
        onChange(file)
      }
    } else {
      handleError('Only PNG and JPEG formats are allowed!')
      event.target.value = ''
    }
  }

  const onRemoveFile = (event: any) => {
    if (event.preventDefault) {
      event.preventDefault()
    }

    if (inputRef.current) {
      inputRef.current.value = ''
    }

    setPlaceholderImage('')
  }

  useEffect(
    () => () => {
      if (placeholderImage) {
        URL.revokeObjectURL(placeholderImage)
      }
    },
    [placeholderImage],
  )

  useEffect(() => {
    if (value) {
      setPlaceholderImage(URL.createObjectURL(value))
    }
  }, [])

  return (
    <label className="cursor-pointer">
      <input type="file" ref={inputRef} hidden accept={acceptedImageFormats.join(',')} onChange={onFileChange} />
      <div className="flex items-center gap-4">
        {placeholderImage ? (
          <div className="relative">
            <Image
              src={placeholderImage}
              className="w-20 h-20"
              imageClassName="w-full h-full object-cover rounded-lg"
            />
            <button onClick={onRemoveFile} className="absolute top-0 right-0 bg-white rounded-full">
              <CircleXIcon />
            </button>
          </div>
        ) : (
          <span className="grid place-content-center w-20 h-20 rounded-lg bg-blue-7">
            <ImageIcon className="w-10 h-10 text-blue-2" />
          </span>
        )}
        <span className="text-sky text-xl leading-7.5 font-bold">{placeholderImage ? 'Change' : 'Upload'} photo</span>
      </div>
    </label>
  )
}
