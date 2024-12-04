export type Props = {
  label?: string
  required?: boolean
  id: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onBlur?: (event) => void
  className?: string
}
