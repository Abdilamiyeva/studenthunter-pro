export type Props = {
  open: boolean
  close: () => void
  defaultValues: {
    title_en: string
    title_ru: string
    title_uz: string
    text_en: string
    text_ru: string
    text_uz: string
    tags: string[]
    image?: string
  }
  blogId: string
}

export interface FormDataI {
  image: string | file[]
  title_en: string
  title_ru: string
  title_uz: string
  text_en: string
  text_ru: string
  text_uz: string
  tags: string[]
  status: number
}
