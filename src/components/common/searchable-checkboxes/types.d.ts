export interface SearchableCheckboxesOption {
  label: string
  value: string
}

export type Props = {
  options: SearchableCheckboxesOption[]
  searching?: boolean
  searchPlaceholder?: string
  value?: string[]
  onChange?: (value: string[]) => void
  onSearch?: (value: string) => void
}
