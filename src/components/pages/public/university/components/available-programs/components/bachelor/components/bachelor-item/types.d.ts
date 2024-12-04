export type Item = {
  label: string
  active: boolean
}

export type Props = {
  label: string
  onClick?: () => void
  isActive?: boolean
}
