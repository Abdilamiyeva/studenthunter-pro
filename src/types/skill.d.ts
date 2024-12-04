export interface Skill {
  _id: string
  video: string
  created_by: string
  price: string
  language: string
  discount_price: string
  duration: string
  level: string
  categories: string[]
  title: string
  about: string
  what_learned: string
  link: string
  buying_count: number
}

export interface SkillCategory {
  _id: string
  title: string
}
