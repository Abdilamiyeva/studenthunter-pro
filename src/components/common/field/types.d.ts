import {Control} from 'react-hook-form'

export type Props = {
  control: Control<any>
  name: string
  type:
    | 'input'
    | 'second-input'
    | 'select'
    | 'cv-builder-date-picker'
    | 'cv-builder-md-editor'
    | 'image-uploader'
    | 'circle-checkbox'
    | 'full-functioned-photo-uploader'
    | 'single-image-upload'
    | 'card-images-uploader'
    | 'radio-container'
    | 'date-picker'
    | 'file-input'
    | 'tag-input'
    | 'checkboxes-dropdown'
    | 'single-video-upload'
    | 'searchable-checkboxes'
  componentProps?: any
  rules?: object
}
