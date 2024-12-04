import {ReactNode} from 'react'

export type SelectSubCheckbox = {
  label: string
  key: string
}

export type SelectCheckbox = {
  label: string
  key: string
  checkboxes: SelectSubCheckbox[]
}

export interface SelectField {
  type: 'select'
  label: string
  key: string
  checkboxes: SelectCheckbox[]
  className?: string
}

export type Props = {
  fields: SelectField[]
  resetable?: boolean
  wrapperClassName?: string
  leftSideContent?: ReactNode
  fieldClassName?: string
}
