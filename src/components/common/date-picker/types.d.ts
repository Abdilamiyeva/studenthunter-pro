export type ValueType = {
  start?: Date
  end?: Date
}

export type Props = {
  label?: string
  required?: boolean
  value?: Date | string
  onChange?: (value: Date) => void
}
