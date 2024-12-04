import {BlogStatus} from '@/constants/statusues'

export interface FormDataI {
  image: File[] | string
  title_en: string
  title_ru: string
  title_uz: string
  text_en: string
  text_ru: string
  text_uz: string
  tags: string[]
  status: BlogStatus
}
