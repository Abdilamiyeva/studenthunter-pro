export interface Blog {
  _id: string
  title_en: string
  title_ru: string
  title_uz: string
  text_en: string
  text_ru: string
  text_uz: string
  image: string
  created_date: Date
  view: number
  status: number
  created_at: Date
  updated_at: Date
  tags: string[]
}
