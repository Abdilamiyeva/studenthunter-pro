export type CheckBoxDropdownOption = {
  label: string
  value: string
}

export type CheckboxDropdownValue = {
  [k]: boolean
}

export type Props = {
  options: CheckBoxDropdownOption[]
  placeholder?: string
  label?: string
  className?: string
  contentClassName?: string
  required?: boolean
  value?: CheckboxDropdownValue | string
  onChange?: (value: CheckboxDropdownValue) => void
}
