import {AppliedApplicantStatus, AppliedStatus, CompanyStatus, SavedStatus} from '@/constants/statusues'
import {Company, CompanyAppliedApplicant} from '@/types/company'
import {DefaultSuccessResponse} from '@/types/defaults'

export interface GetPublicCompanyResponse extends DefaultSuccessResponse {
  data: Company
}
export interface GetPublicCompanyRequset {
  id: string
}

export interface GetCompaniesResponse extends DefaultSuccessResponse {
  total: number
  page: number
  per_page: number
  count: number
  data: Company[]
}
export interface GetCompaniesRequest {
  status: CompanyStatus
  page: number
  per_page: number
}

export interface GetCompanyResponse extends DefaultSuccessResponse {
  data: Company
}
export interface GetCompanyRequest {
  companyID: string
}

export interface CreateCompanyResponse extends DefaultSuccessResponse {}
export interface CreateCompanyRequest {
  title: string
  description: string
  employee_size?: string
  contact_person: string
  contact_role: string
  inn: string
  logo: string
  website?: string
  phone_number: string
  country: string
  city: string
  email: string
  password: string
  telegram?: string
  instagram?: string
  facebook?: string
  youtube?: string
  linkedin?: string
}

export interface UpdateCompanyResponse extends DefaultSuccessResponse {}
export interface UpdateConpanyRequestBody {
  title?: string
  description?: string
  employee_size?: string
  contact_person?: string
  contact_role?: string
  inn?: string
  logo?: string
  website?: string
  phone_number?: string
  country?: string
  city?: string
  email?: string
  password?: string
  telegram?: string
  instagram?: string
  facebook?: string
  youtube?: string
  linkedin?: string
  status?: CompanyStatus.ACTIVE | CompanyStatus.INACTIVE
}
export interface UpdateCompanyRequest {
  companyID: string
  body: UpdateConpanyRequestBody
}

export interface DeleteCompanyResponse extends DefaultSuccessResponse {}
export interface DeleteCompanyRequest {
  companyID: string
}

export interface ManageCompanyAppliedApplicantResponse extends DefaultSuccessResponse {}
export interface ManageCompanyAppliedApplicantRequest {
  applicant: string
  vacancy: string
  status: AppliedApplicantStatus
}

export interface GetCompantApplicantsResponse extends DefaultSuccessResponse {
  data: CompanyAppliedApplicant[]
  total: number
  page: number
  per_page: number
  count: number
}
export interface GetCompantApplicantsRequest {
  company: string
  status: AppliedStatus.NOT_SET | AppliedStatus.APPLIED
  liked?: SavedStatus
  search?: string
  page?: number
  per_page?: number
}

export interface SaveCompanyResponse extends DefaultSuccessResponse {}
export interface SaveCompanyRequest {
  id: string
}

export interface UnsaveCompanyResponse extends DefaultSuccessResponse {}
export interface UnsaveCompanyRequest {
  id: string
}
