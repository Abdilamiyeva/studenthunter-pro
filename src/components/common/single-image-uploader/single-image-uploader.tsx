/* eslint-disable react-hooks/exhaustive-deps */
import {useHandleError} from '@/hooks/use-handle-error'
import {ChangeEvent, useEffect, useMemo, useRef, useState} from 'react'
import {Props} from './types'
import {acceptedImageFormats} from '@/constants/accepted-image-formats'
import {Button, Image} from '..'
import {getImageURL} from '@/utils/get-image'

export const SingleImageUploader = ({value, onChange, type = 'circle'}: Props) => {
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

  const singleImageClassName = useMemo(() => {
    switch (type) {
      case 'circle':
        return 'w-[120px] h-[120px] border border-blue rounded-full'
      case 'rectangle':
        return 'w-[207px] h-[120px] border border-blue'
    }
  }, [type])

  const onRemoveFile = (event: any) => {
    if (event.preventDefault) {
      event.preventDefault()
    }

    if (inputRef.current) {
      inputRef.current.value = ''
    }

    if (onChange) {
      onChange(undefined)
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
      setPlaceholderImage(typeof value === 'string' ? getImageURL(value) : URL.createObjectURL(value))
    }
  }, [])

  return (
    <div className="flex items-center gap-5">
      <Image
        src={placeholderImage || '/images/placeholder.jpg'}
        alt="Uploaded Picture"
        imageClassName={singleImageClassName}
      />
      <div className="flex items-center gap-3">
        <label className="bg-transparent border border-blue hover:bg-blue hover:text-white px-8 py-2 text-sm font-bold leading-5 rounded duration-default cursor-pointer">
          Upload
          <input type="file" accept={acceptedImageFormats.join(', ')} onChange={onFileChange} hidden />
        </label>
        <Button
          variant="outline"
          theme="orange"
          className="px-8 py-2 text-sm font-bold leading-5 rounded"
          onClick={onRemoveFile}
        >
          Delete
        </Button>
      </div>
    </div>
  )
}
