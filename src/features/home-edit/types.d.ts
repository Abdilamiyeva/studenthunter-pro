import {FeedbackType} from '@/constants/statusues'
import {DefaultSuccessResponse} from '@/types/defaults'
import {FAQ} from '@/types/faq'
import {Feedback} from '@/types/feedback'
import {InstagramHightlight} from '@/types/instagram-highlight'
import {HomeUniversity} from '@/types/university'
import {HomeVacancy} from '@/types/vacancy'

export interface GetHomePageResponse extends DefaultSuccessResponse {
  data: {
    _id: string
    faqs: FAQ[]
    feedbacks: Feedback[]
    instagram_highlights: InstagramHightlight[]
    universities: HomeUniversity[]
    vacancies: HomeVacancy[]
  }
}
export interface GetHomePageRequest {}

export interface UpdateHomeUniversitiesResponse extends DefaultSuccessResponse {}
export interface UpdateHomeUniversitiesRequest {
  universities: string[]
}

export interface UpdateHomeVacanciesRepsonse extends DefaultSuccessResponse {}
export interface UpdateHomeVacanciesRequest {
  vacancies: string[]
}

export interface GetHomeFeedbacksResponse extends DefaultSuccessResponse {
  data: Feedback
}
export interface GetHomeFeedbacksRequest {
  type: FeedbackType
}

export interface CreateFeedbackResponse extends DefaultSuccessResponse {}
export interface CreateFeedbackRequest {
  image: string
  name: string
  location: string
  position: string
  feedback: string
  type: string
}

export interface UpdateFeedbackResponse extends DefaultSuccessResponse {}
export interface UpdateFeedbackRequestBody {
  image?: string
  name?: string
  location?: string
  position?: string
  feedback?: string
}
export interface UpdateFeedbackRequest {
  feedbackID: string
  body: UpdateFeedbackRequestBody
}

export interface DeleteFeedbackResponse extends DefaultSuccessResponse {}
export interface DeleteFeedbackRequest {
  feedbackID: string
}

export interface GetHomeFAQsResponse extends DefaultSuccessResponse {
  data: FAQ
}
export interface GetHomeFAQsRequest {}

export interface CreateFAQsResponse extends DefaultSuccessResponse {}
export interface CreateFAQsRequest {
  question: string
  answer: string
}

export interface UpdateFAQsResponse extends DefaultSuccessResponse {}
export interface UpdateFAQsRequestBody {
  question?: string
  answer?: string
}
export interface UpdateFAQsRequest {
  faqID: string
  body: UpdateFAQsRequestBody
}

export interface DeleteFAQsResponse extends DefaultSuccessResponse {}
export interface DeleteFAQsRequest {
  faqID: string
}

export interface GetInstagramHighlightsResponse extends DefaultSuccessResponse {
  data: InstagramHightlight
}
export interface GetInstagramHighlightsRequest {}

export interface CreateInstagramHighlightResponse extends DefaultSuccessResponse {}
export interface CreateInstagramHighlightRequest {
  link: string
}

export interface UpdateInstagramHighlightResponse extends DefaultSuccessResponse {}
export interface UpdateInstagramHighlightRequestBody {
  link: string
}
export interface UpdateInstagramHighlightRequest {
  highlightID: string
  body: UpdateInstagramHighlightRequestBody
}

export interface DeleteInstagramHighlightResponse extends DefaultSuccessResponse {}
export interface DeleteInstragramHightlightRequest {
  highlightID: string
}
