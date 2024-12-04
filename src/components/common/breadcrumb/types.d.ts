export type Link = {
  label: string
  path?: string
  onClick?: () => void
}
export type Props = {
  links: Link[]
  className?: string
}
