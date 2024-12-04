import {PlusCircleFillIcon} from '@/icons'
import {Props} from './types'

export const FilePicker = ({handleFile}: Props) => (
  <label htmlFor="filePicker" className="flex items-center cursor-pointer">
    <PlusCircleFillIcon className="text-sky-1 w-6 h-5 mr-2" />
    <input onChange={handleFile} id="filePicker" className="hidden" type="file" />
  </label>
)
