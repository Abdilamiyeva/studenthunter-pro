export interface Props {
  src?: string
  fullName?: string
  isOffline?: boolean
  className?: string
  showIndicator?: boolean
  imageClassName?: string
  baseClassName?: string
  type?: 'university' | 'program' | 'company' | 'vacancy' | 'blog' | 'skill'
}
