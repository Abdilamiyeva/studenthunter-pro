import {SelectField} from '../../types'

export interface Props extends SelectField {
  value: any
  onChange: (updatedValue: object) => void
  className?: string
}
