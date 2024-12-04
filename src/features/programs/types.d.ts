import {DefaultSuccessResponse} from '@/types/defaults'
import {PublicPrograms} from '@/types/program'

export interface GetProgramsResponse extends DefaultSuccessResponse {
  data: PublicPrograms[]
}
export interface GetProgramsRequest {
  data?: string
}

export interface GetProgramResponse extends DefaultSuccessResponse {
  data: PublicPrograms
}
export interface GetProgramRequest {
  id: string
}

export interface GetUniversityProgramResponse extends DefaultSuccessResponse {
  data: PublicPrograms[]
}

export interface GetUniversityProgramRequest {
  university_id: string
  level: string
}
