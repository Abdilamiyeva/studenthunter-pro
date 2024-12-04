import {StudyLevel} from '@/constants/study-levels'
import {DefaultSuccessResponse} from '@/types/defaults'
import {Faculty, PublicFaculty, Requirement} from '@/types/faculty'

export interface GetPublicUniversityFacultiesResponse extends DefaultSuccessResponse {
  total: number
  page: number
  per_page: number
  count: number
  data: PublicFaculty[]
}
export interface GetPublicUniversityFacultiesRequest {
  data: string
}

export interface GetUniversityFacultiesResponse {
  success: boolean
  data: Faculty[]
}
export interface GetUniversityFacultiesRequest {
  university_id: string
  level: StudyLevel
}

export interface DeleteFacultyResponse extends DefaultSuccessResponse {}

export interface DeleteFacultyRequest {
  universityFacultyID: string
}

export interface CreateFacultyResponse extends DefaultSuccessResponse {}

export interface CreateFacultyRequest {
  university_id: string
  program?: string
  fee?: number
  fee_description?: string
  scholarship_description?: string
  scholarship?: string
  requirements?: Requirement[]
  about?: string
  faculty?: string
  duration?: number
  format?: string
  attendance?: string
  subject?: string
  summary?: string
  application_start?: string
  deadline?: string
  level?: string
  title_uz?: string
  title_ru?: string
  title_en?: string
  study_level?: string
}
