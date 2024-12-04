export type Option = {
  label: string
  value: string
  disabled?: boolean
}

export type Props = {
  options: Option[]
  label?: string
  onChange?: (value: string) => void
  value?: string
  placeholder?: string
  required?: boolean
  defaultValue?: string
  className?: string
}

export type ComponentProps = {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}
