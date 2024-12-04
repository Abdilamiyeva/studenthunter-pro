import {HomeVacancy} from '@/types/vacancy'

export type Props = {
  open: boolean
  close: () => void
  vacancies: HomeVacancy[]
}
