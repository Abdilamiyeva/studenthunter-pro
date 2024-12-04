export type InputRule = {
  name: string
  test: (value: string | number) => boolean
}

export type Props = {
  label?: string
  placeholder?: string
  required?: boolean
  type?: 'tel' | 'text' | 'password'
  rules?: InputRule[]
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void
  value?: string
  className?: string
  onKeyDown?: (event: ChangeEvent<HTMLInputElement>) => void
}
