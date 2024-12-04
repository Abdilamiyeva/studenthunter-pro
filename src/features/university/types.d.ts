import {UniversityAppliedUserStatus, UniversityStatus} from '@/constants/statusues'
import {DefaultSuccessResponse} from '@/types/defaults'
import {Faculty} from '@/types/faculty'
import {University} from '@/types/university'
import {UniversityAppliedUser, UniversitySavedUser} from '@/types/user'

export interface GetAdminDashboardUniversitiesResponse {
  success: boolean
  pageCount: number
  currentPage: number
  nextPage: number
  afterFilteringCount: number
  data: University[]
}

export interface GetAdminDashboardUniversitiesRequest {
  search?: string
  page?: number
  perPage?: number
  status?: UniversityStatus
}

export interface GetPublicUniversitiesresponse {
  success: boolean
  pageCount: number
  currentPage: number
  total: number
  nextPage: number
  afterFilteringCount: number
  data: University[]
}
export interface GetPublicUniversitiesRequset {
  data?: string
}

export interface GetPublicUniversityresponse {
  success: boolean
  pageCount: number
  currentPage: number
  nextPage: number
  afterFilteringCount: number
  data: University
}
export interface GetPublicUniversityRequset {}

export interface CreateUniversityResponse {
  success: boolean
}

export interface CreateUniversityRequest {
  title: string
  email: string
  password: string
  country: string
  logo: string
  telegram: string
  instagram: string
  linkedin: string
  facebook: string
  study_level: string
  city: string
  contact_person: string
  contact_role: string
  phone_number: string
  rating: string
  website: string
  media: string[]
  programs_count: number
  tuition_fee: string
  description_en: string
  description_ru: string
  description_uz: string
}

export interface ChangeUniversityStatusResponse {
  success: boolean
}

export interface ChangeUniversityStatusRequest {
  universityID: string
  params: {
    status: UniversityStatus.ACTIVE | UniversityStatus.ARCHIVED
  }
}

export interface GetUniversityAppliedUsersResponse {
  success: boolean
  total: number
  currentPage: number
  perPage: number
  pageCount: number
  nextPage: number
  afterFilteringCount: number
  data: UniversityAppliedUser[]
}

export interface GetUniversityAppliedUsersRequest {
  universityID: string
  params: {
    search?: string
    page?: number
    perPage?: number
    status?: UniversityAppliedUserStatus[]
  }
}

export interface GetUniversitySavedUsersResponse {
  success: boolean
  total: number
  currentPage: number
  perPage: number
  pageCount: number
  nextPage: number
  afterFilteringCount: number
  data: UniversitySavedUser[]
}

export interface GetUniversitySavedUsersRequest {
  universityID: string
  params: {
    search?: string
    page?: number
    perPage?: number
  }
}

export interface likeUniversityResponse {
  success: boolean
}
export interface likeUniversityRequest {
  id: string
}

export interface UpdateUniversityResponse extends DefaultSuccessResponse {}

export interface UpdateUniversityRequestBody {
  title?: string
  email?: string
  password?: string
  country?: string
  logo?: string
  telegram?: string
  instagram?: string
  linkedin?: string
  facebook?: string
  study_level?: string
  city?: string
  contact_person?: string
  contact_role?: string
  phone_number?: string
  rating?: string
  website?: string
  media?: string[]
  programs_count?: number
  tuition_fee?: string
  description_en?: string
  description_ru?: string
  description_uz?: string
}
export interface UpdateUniversityRequest {
  universityID: string
  body: UpdateUniversityRequestBody
}

export interface GetUniversityFacultyResponse extends DefaultSuccessResponse {
  data: Faculty[]
}
export interface GetUniversityFacultyRequest {
  university_id: string
  level: string
}
