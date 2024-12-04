import {FilterOptionType} from '../../types'

export type Props = {
  checkboxes: FilterOptionType[]
  firstListLabel: string
  secondListLabel: string
  firstListValues: any
  onFirstListValuesChange: (values: object) => void
  secondListValues: any
  onSecondListValuesChange: (values: object) => void
}
