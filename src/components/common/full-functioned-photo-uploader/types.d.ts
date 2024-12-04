export type Props = {
  label?: string
  value?: (File | string)[]
  onChange?: (files: (File | string)[] | string) => void
}
