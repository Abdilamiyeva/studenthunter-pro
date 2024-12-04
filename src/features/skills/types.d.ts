import {DefaultSuccessResponse} from '@/types/defaults'
import {Skill, SkillCategory} from '@/types/skill'

export interface GetPublicSkillsResponse extends DefaultSuccessResponse {
  page_count: number
  current_page: number
  next_page: number | null
  after_filtering_count: number
  data: Skill[]
}
export interface GetPublicSkillsRequest {
  search?: string
  sort?: string
  category?: string
  language?: string
  price?: string
  level?: string
  page?: number
  perPage?: number
}

export interface GetSkillsResponse extends DefaultSuccessResponse {
  page_count: number
  current_page: number
  next_page: number | null
  after_filtering_count: number
  data: Skill[]
}
export interface GetSkillsRequest {
  search?: string
  page?: number
  perPage?: number
}

export interface GetSkillsFilterListResponse extends DefaultSuccessResponse {
  data: {[k]: string[]}
}
export interface GetSkillsFilterListRequest {}

export interface GetSkillDetailsResponse extends DefaultSuccessResponse {
  data: Skill
}
export interface GetSkillDetailsRequest {
  skillID: string
}

export interface GetSkillCategoriesResponse extends DefaultSuccessResponse {
  data: SkillCategory[]
}
export interface GetSkillCategoriesRequest {}

export interface DeleteSkillResponse extends DefaultSuccessResponse {}
export interface DeleteSkillRequest {
  skillID: string
}

export interface CreateSkillResponse extends DefaultSuccessResponse {}
export interface CreateSkillRequest {
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
}

export interface UpdateSkillResponse extends DefaultSuccessResponse {}
export interface UpdateSkillRequestBody {
  video?: string
  created_by?: string
  price?: string
  language?: string
  discount_price?: string
  duration?: string
  level?: string
  categories?: string[]
  title?: string
  about?: string
  what_learned?: string
  link?: string
}
export interface UpdateSkillRequest {
  skillID: string
  body: UpdateSkillRequestBody
}

export interface UpdateSkillBuyingCountResponse extends DefaultSuccessResponse {}
export interface UpdateSkillBuyingCountRequest {
  skillID: string
}

export interface CreateSkillCategoryResponse extends DefaultSuccessResponse {}
export interface CreateSkillCategoryRequest {
  title: string
}

export interface DeleteSkillCategoryResponse extends DefaultSuccessResponse {}
export interface DeleteSkillCategoryRequest {
  categoryID: string
}
