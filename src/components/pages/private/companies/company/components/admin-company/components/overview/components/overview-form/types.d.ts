import {Company} from '@/types/company'

export type Props = {
  open: boolean
  close: () => void
  company: Company
}
