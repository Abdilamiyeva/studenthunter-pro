import {ConsultingStatus} from '@/constants/statusues'
import {AdminConsulting, Consulting} from '@/types/consulting'
import {DefaultSuccessResponse} from '@/types/defaults'

export interface GetConsultingsResponse extends DefaultSuccessResponse {
  data: AdminConsulting[]
  total: number
  page: number
  per_page: number
  count: number
}
export interface GetConsultingsRequest {
  status?: ConsultingStatus
  search?: string
  page?: number
  per_page?: number
}

export interface GetConsultingResponse extends DefaultSuccessResponse {
  data: Consulting
}
export interface GetConsultingRequest {
  consultingID: string
}

export interface CreateConsultingResponse extends DefaultSuccessResponse {}
export interface CreateConsultingRequest {
  title: string
  logo: string
  contact_person: string
  contact_role: string
  phone_number: string
  email: string
  password: string
  telegram: string
  instagram: string
  facebook: string
  youtube: string
  linkedin: string
  twitter: string
  services_fee: number
  website: string
  about: string
}

export interface UpdateConsultingResponse extends DefaultSuccessResponse {}
export interface UpdateConsultingRequestBody {
  title?: string
  logo?: string
  contact_person?: string
  contact_role?: string
  phone_number?: string
  email?: string
  password?: string
  telegram?: string
  instagram?: string
  facebook?: string
  youtube?: string
  linkedin?: string
  twitter?: string
  services_fee?: number
  website?: string
  about?: string
  status?: ConsultingStatus
}
export interface UpdateConsultingRequest {
  consultingID: string
  body: UpdateConsultingRequestBody
}

export interface DeleteConsultingResponse extends DefaultSuccessResponse {}
export interface DeleteConsultingRequest {
  consultingID: string
}
