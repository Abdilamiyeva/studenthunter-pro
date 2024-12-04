import {VacancyApplicantStatus} from '@/constants/statusues'
import {VacancyApplicant} from '@/types/applicant'
import {DefaultSuccessResponse, Sort} from '@/types/defaults'
import {Job} from '@/types/job'
import {AdminVacancy} from '@/types/vacancy'

export interface GetJobsResponse extends DefaultSuccessResponse {
  data: AdminVacancy[]
  total: number
  page: number
  per_page: number
  count: number
}
export interface GetJobsRequest {
  page?: number
  per_page?: number
  sort?: Sort
}

export interface GetPublicJobsResponse {
  success: boolean
  data: Job[]
  total: number
  page: number
  per_page: number
  count: number
}
export interface GetPublicJobsRequest {
  data?: string
}

export interface GetJobResponse {
  success: boolean
  data: Job
}
export interface GetJobRequset {
  id: string
}

export interface GetVacancyAppliedApplicantsResponse extends DefaultSuccessResponse {
  data: VacancyApplicant[]
  total: number
  page: number
  per_page: number
  count: number
}
export interface GetVacancyAppliedApplicantsRequest {
  vacancy: string
  status?: VacancyApplicantStatus | VacancyApplicantStatus[]
  liked?: 0 | 1
  search?: string
  page?: number
  per_page?: number
}

export interface GetApplyResponse extends DefaultSuccessResponse {}
export interface GetApplyRequset {
  id: string
}

export interface WithdrawVacancyResponse extends DefaultSuccessResponse {}
export interface WithdrawVacancyRequest {
  id: string
}

export interface GetLikeJobResponse extends DefaultSuccessResponse {}
export interface GetLikeJobRequset {
  id: string
}

export interface GetUnLikeJobResponse extends DefaultSuccessResponse {}
export interface GetUnLikeJobRequset {
  id: string
}

export interface UpdateVacancyResponse extends DefaultSuccessResponse {}
export interface UpdateVacancyRequestBody {
  job_title: string
  job_type: string
  experience_level: string
  salary: number
  specialties: string
  description: string
  country: string
  city: string
  skills: string[]
}
export interface UpdateVacancyRequest {
  vacancyID: string
  body: UpdateVacancyRequestBody
}

export interface DeleteVacancyResponse extends DefaultSuccessResponse {}
export interface DeleteVacancyRequest {
  vacancyID: string
}
