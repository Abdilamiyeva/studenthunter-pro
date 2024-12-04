export type FilterOptionType = {
  label: string
  value: string
  count?: number
  options?: FilterOptionType[]
}

export type ComponentType = {
  label: string
  value: string
  type: 'select' | 'checkbox' | 'price-range' | 'double-check' | 'double-select' | 'radio-input'
  firstListLabel?: string
  firstListValue?: string
  secondListLabel?: string
  secondListValue?: string
  options: FilterOptionType[]
}

export type Props = {
  components: ComponentType[]
  className?: string
  close?: () => void
  onChange?: (e: any) => void
}
