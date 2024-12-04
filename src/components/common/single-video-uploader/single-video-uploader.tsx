/* eslint-disable react-hooks/exhaustive-deps */
import {useHandleError} from '@/hooks/use-handle-error'
import {ChangeEvent, useEffect, useRef, useState} from 'react'
import {Props} from './types'
import {acceptedVideoFormats} from '@/constants/accepted-image-formats'
import {Button, Image} from '..'
import {VideoPlayIcon} from '@/icons'
import {cn} from '@/lib/utils'
import {getImageURL} from '@/utils/get-image'

export const SingleVideoUploader = ({value, onChange}: Props) => {
  const [placeholderVideo, setPlaceholderVideo] = useState('')
  const [openControls, setOpenControls] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const handleError = useHandleError()

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file && acceptedVideoFormats.includes(file.type)) {
      setPlaceholderVideo(URL.createObjectURL(file))

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

    if (onChange) {
      onChange(undefined)
    }

    setPlaceholderVideo('')
  }

  useEffect(
    () => () => {
      if (placeholderVideo) {
        URL.revokeObjectURL(placeholderVideo)
      }
    },
    [placeholderVideo],
  )

  useEffect(() => {
    if (value) {
      setPlaceholderVideo(typeof value === 'string' ? getImageURL(value, 'videos') : URL.createObjectURL(value))
    }
  }, [])

  return (
    <div className="flex items-center gap-[30px]">
      {placeholderVideo ? (
        <div className="w-[207px] h-[120px] relative">
          <video
            src={placeholderVideo}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            controls={openControls}
            crossOrigin="anonymous"
          />
          <button
            type="button"
            onClick={() => setOpenControls(true)}
            className={cn(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-white/50 w-11 h-11 grid place-content-center text-white',
              openControls && 'hidden',
            )}
          >
            <VideoPlayIcon className="w-6 h-6" />
          </button>
        </div>
      ) : (
        <Image
          src="/images/placeholder.jpg"
          alt="Uploaded Picture"
          imageClassName="w-[207px] h-[120px] border-2 border-blue rounded-lg"
        />
      )}
      <div className="flex items-center gap-3">
        <label className="bg-transparent border border-blue hover:bg-blue hover:text-white px-8 py-2 text-sm font-bold leading-5 rounded duration-default cursor-pointer">
          Upload
          <input type="file" accept={acceptedVideoFormats.join(', ')} onChange={onFileChange} hidden />
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
