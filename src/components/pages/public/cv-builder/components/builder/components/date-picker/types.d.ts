export type ValueType = {
  start?: Date
  end?: Date
}

export type Props = {
  label?: string
  required?: boolean
  value?: ValueType
  onChange?: (value: ValueType) => void
}
