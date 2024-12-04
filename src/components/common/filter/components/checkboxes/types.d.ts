import {FilterOptionType} from '../../types'

export type Props = {
  values: any
  onChange: (values: object) => void
  checkboxes: FilterOptionType[]
}
