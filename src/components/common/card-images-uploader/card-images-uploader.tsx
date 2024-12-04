import {ChangeEvent, DragEventHandler, useEffect, useState} from 'react'
import {Image} from '..'
import {ImageCircleIcon, PlusCircleIcon, TrashCircleICon} from '@/icons'
import {acceptedImageFormats} from '@/constants/accepted-image-formats'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'

export const CardImagesUploader = ({value, onChange}: Props) => {
  const [files, setFiles] = useState<(File | string)[]>(value || [])
  const [dragging, setDragging] = useState(false)

  const handleImagesUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const supportedFiles = [...event.target.files].filter(file =>
        [...acceptedImageFormats, 'video/mp4', 'video/avi', 'video/flv'].includes(file.type),
      )
      const updatedFiles = [...files, ...supportedFiles]
      setFiles(updatedFiles)
      if (onChange) {
        onChange(updatedFiles)
      }
    }
  }

  const removeImage = (index: number) => {
    const updatedFiles = [...files]
    updatedFiles.splice(index, 1)
    setFiles(updatedFiles)
    if (onChange) {
      onChange(updatedFiles)
    }
  }

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

    const supportedFiles = dropedFiles.filter(file => acceptedImageFormats.includes(file.type))

    const updatedFiles = [...files, ...supportedFiles]
    setFiles(updatedFiles)
    if (onChange) {
      onChange(updatedFiles)
    }
  }

  useEffect(() => {
    if (value) {
      setFiles(value)
    }
  }, [value])

  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-6">
      {Array.from(files).map((file, index) => (
        <div key={index} className="h-[118px] relative rounded-lg overflow-hidden group">
          {(typeof file === 'string' ? !file.endsWith('.mp4') : file.type.startsWith('image/')) ? (
            <Image
              className="max-w-full h-full"
              imageClassName="w-full object-contain"
              src={typeof file === 'string' ? getImageURL(file) : URL.createObjectURL(file)}
            />
          ) : (
            <video autoPlay src={typeof file === 'string' ? getImageURL(file) : URL.createObjectURL(file)} controls />
          )}
          <div className="w-full transition-all text-white h-full absolute bg-black bg-opacity-40 rounded-lg group-hover:top-0 top-[300%] left-0">
            <div className="w-full h-full p-4 flex justify-end items-start">
              {(typeof file === 'string' ? !file.endsWith('.mp4') : file.type.startsWith('image/')) ? (
                <span className="mr-1">
                  <ImageCircleIcon className="w-6 h-6" />
                </span>
              ) : (
                ''
              )}
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="rounded-full hover:bg-white hover:text-blue duration-100"
              >
                <TrashCircleICon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div
        onDragOver={onDraggingIn}
        onDragEnter={onDraggingIn}
        onDragLeave={onDraggingOut}
        onDrop={onDropFiles}
        className={`border ${
          dragging ? 'bg-blue border border-white border-dashed text-white' : ''
        } border-dashed border-blue h-[118px] rounded-lg`}
      >
        <label htmlFor="files" className="inline-block w-full h-full cursor-pointer">
          <input type="file" id="files" multiple hidden onChange={handleImagesUpload} />
          <div className="w-full h-full flex flex-col items-center justify-center">
            <PlusCircleIcon className="mb-1" />
            <h2 className={`${dragging ? 'text-white' : 'text-blue'} text-sm font-semibold leading-7`}>Upload file</h2>
            <p className="text-blue-2 text-xs font-normal">or drag & drop</p>
          </div>
        </label>
      </div>
    </div>
  )
}
