/* eslint-disable @typescript-eslint/no-shadow */
import {Props} from './types'
import {ChangeEvent, DragEventHandler, useEffect, useRef, useState} from 'react'
import {acceptedImageFormats} from '@/constants/accepted-image-formats'
import {useHandleError} from '@/hooks/use-handle-error'
import {cn} from '@/lib/utils'
import {Button} from '..'
import {Image} from '..'
import {getImageURL} from '@/utils/get-image'
export const FullFunctionedPhotoUploader = ({label, value, onChange}: Props) => {
  const [file, setFile] = useState<(File | string)[]>(value || [])
  const [dragging, setDragging] = useState(false)
  const handleError = useHandleError()
  const inputRef = useRef<HTMLInputElement>(null)
  const onDraggingIn: DragEventHandler<HTMLInputElement> = event => {
    event.preventDefault()
    setDragging(true)
  }

  const onDraggingOut = () => {
    setDragging(false)
  }

  const onDropFiles: DragEventHandler<HTMLDivElement> = event => {
    event.preventDefault()
    setDragging(false)

    const dropedFiles = Array.from(event.dataTransfer.files)

    const supportedFiles = dropedFiles.filter((file: any) => acceptedImageFormats.includes(file.type))

    if (supportedFiles.length !== dropedFiles.length) {
      handleError('Some unsupported files removed!')
    }

    const updatedFiles = [...supportedFiles, ...file]
    setFile(updatedFiles)
    if (onChange) {
      onChange(updatedFiles)
    }
  }

  const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const supportedFiles = [...event.target.files].filter((file: any) => acceptedImageFormats.includes(file.type))

      if (supportedFiles.length !== event.target.files.length) {
        handleError('Some unsupported files removed!')
      }

      const updatedFiles = [...supportedFiles, ...file]
      setFile(updatedFiles)
      if (onChange) {
        onChange(updatedFiles)
      }
    }
  }

  const uplaodHandle = () => {
    inputRef.current?.click()
  }

  const removeFile = () => {
    setFile([])
    if (onChange) {
      onChange([])
    }
  }

  useEffect(() => {
    if (typeof value === 'string') {
      setFile(value)
    }
  }, [value])

  return (
    <div className="w-72 min-w-full max-w-full">
      {label && <span className="text-blue-1 font-bold leading-6">{label}</span>}
      <div
        onDragOver={onDraggingIn}
        onDragEnter={onDraggingIn}
        onDragLeave={onDraggingOut}
        onDrop={onDropFiles}
        className="mt-5 rounded-2xl border border-blue-4 bg-white p-4"
      >
        <input ref={inputRef} onChange={onFileUpload} type="file" accept={acceptedImageFormats.join(',')} hidden />
        {file.length ? (
          <div>
            <Image src={typeof file === 'string' ? getImageURL(file) : URL.createObjectURL(file[0] as File)} />
          </div>
        ) : (
          <div
            className={cn(
              'border-2 border-dashed border-blue-4 rounded-xl leading-6 font-light h-40 grid place-content-center duration-default',
              dragging ? 'bg-blue text-white' : 'bg-blue-5',
            )}
          >
            <div>
              <span className="text-blue-1 text-xl">Drag & drop</span>
              <label className="text-sky-1 cursor-pointer"></label>
            </div>
          </div>
        )}
        <div>
          {file.length ? (
            <div className="flex gap-x-5 justify-stretch mt-5">
              <Button
                onClick={removeFile}
                variant="outline"
                className="w-full border hover:bg-orange border-orange text-orange"
              >
                Delete
              </Button>
              <Button
                onClick={uplaodHandle}
                className="w-full border bg-orange-6 border-orange-6 hover:bg-border-orange-6"
              >
                Update
              </Button>
            </div>
          ) : (
            <Button
              onClick={uplaodHandle}
              className="bg-orange-6 text-white w-full rounded mt-5 hover:bg-orange-6/100 border-transparent"
            >
              Upload Photo
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
