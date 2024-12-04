type cousreItem = {
  img: string
  title: string
  tags: string[]
  subtitle: string
  price: number
  discount: number
  hours: number
  language: string
  level: string
}

export type Props = {
  course: cousreItem
}
