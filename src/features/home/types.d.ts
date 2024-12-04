import {DefaultSuccessResponse} from '@/types/defaults'

export interface universities {
  _id: string
  title: string
  media: string[]
}

export interface faqs {}

export interface feedbacks {
  _id: string
  image: string
  name: string
  location: string
  position: string
  feedback: string
  type: string
}

export interface instagram_highlights {
  _id: string
  link: string
}

export interface GetHomePageResponse extends DefaultSuccessResponse {
  data: {
    _id: string
    faqs: faqs[]
    feedbacks: feedbacks[]
    instagram_highlights: instagram_highlights[]
    universities: universities[]
  }
}
export interface GetHomePageRequset {}
