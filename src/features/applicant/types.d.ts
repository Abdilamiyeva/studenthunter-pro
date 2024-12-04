import {ApplicantStatus} from '@/constants/statusues'
import {AdminApplicant, Applicant, Gender} from '@/types/applicant'
import {DefaultSuccessResponse} from '@/types/defaults'
import {ApplicantAppliedProgram} from '@/types/program'
import {ApplicantAppliedUniversity, ApplicantLikedUniversity} from '@/types/university'

export interface GetApplicantsResponse extends DefaultSuccessResponse {
  total: number
  currentPage: number
  perPage: number
  pageCount: number
  nextPage: number | null
  afterFilteringCount: number
  data: AdminApplicant[]
}

export interface GetApplicantsRequest {
  search?: string
  page?: number
  perPage?: number
}

export interface GetApplicantResponse extends DefaultSuccessResponse {
  data: Applicant
}

export interface GetApplicantRequest {
  applicantID: string
}

export interface ChangeApplicantStatusResponse extends DefaultSuccessResponse {}

export interface ChangeApplicantStatusRequest {
  applicantID: string
  params: {
    status: ApplicantStatus
  }
}

export interface DeleteApplicantResponse extends DefaultSuccessResponse {}

export interface DeleteApplicantRequest {
  applicantID: string
}

export interface GetApplicantAppliedUniversitiesResponse extends DefaultSuccessResponse {
  total: number
  currentPage: number
  perPage: number
  pageCount: number
  nextPage: number | null
  afterFilteringCount: number
  data: ApplicantAppliedUniversity[]
}

export interface GetApplicantAppliedUniversitiesRequest {
  applicantID: string
  params: {
    search?: string
    page?: number
    perPage?: number
  }
}

export interface GetApplicantLikedUniversitiesResponse extends DefaultSuccessResponse {
  total: number
  pageCount: number
  currentPage: number
  nextPage: number | null
  afterFilteringCount: number
  data: ApplicantLikedUniversity[]
}

export interface GetApplicantLikedUniversitiesRequest {
  applicantID: string
  params: {
    search?: string
    page?: number
    perPage?: number
  }
}

export interface LikeUniversityResponse extends DefaultSuccessResponse {
  data: {
    msg: string
  }
}

export interface LikedUniversityRequest {
  university_id: string
  applicant_id: string
  is_add: boolean
}

export interface ApplyProgramResponse extends DefaultSuccessResponse {}

export interface ApplyProgramRequest {
  university_id: string
  applicant_id: string
  program_id: string
}

export interface GetApplicantAppliedProgramResponse extends DefaultSuccessResponse {
  data: ApplicantAppliedProgram
}

export interface GetApplicantAppliedProgramRequest {
  applicant_id: string
  university_id: string
}

export interface UpdateApplicantResponse extends DefaultSuccessResponse {}

export interface UpdateApplicantRequestBody {
  first_name?: string
  last_name?: string
  gender?: Gender
  date_of_birth?: string
  phone_number?: string
  emergency_contact?: string
  ielts_score?: string
  address?: string
  city?: string
  country?: string
  zip_code?: string
  front_image?: string
  back_image?: string
  passport?: string
  jshshir?: string
  given_by?: string
  cv_file?: string
  telegram?: string
  instagram?: string
  facebook?: string
  linkedin?: string
  image?: string
  last_school_gpa?: string
}

export interface UpdateApplicantRequest {
  applicantID: string
  body: UpdateApplicantRequestBody
}

export interface UpdateApplicantSignatureResponse extends DefaultSuccessResponse {}

export interface UpdateApplicantSignatureRequestBody {
  signature?: string
  date?: string
}

export interface UpdateApplicantSignatureRequest {
  applicantID: string
  body: UpdateApplicantSignatureRequestBody
}

export interface CreateApplicantCertResponse extends DefaultSuccessResponse {}

export interface CreateApplicantCertRequest {
  applicant_id: string
  certificate_file: string
  certificate_score: string
  certificate_name: string
  image: string
  issued_date: string
  expire_date: string
}

export interface UpdateApplicantCertResponse extends DefaultSuccessResponse {}

export interface UpdateApplicantCertRequest {
  cer_id: string
  applicant_id?: string
  certificate_file?: string
  certificate_score?: number
  certificate_name?: string
  image?: string
  issued_date?: string
  expire_date?: string
}

export interface DeleteApplicantCertResponse extends DefaultSuccessResponse {}

export interface DeleteApplicantCertRequest {
  applicant_id: string
  cer_id: string
}

export interface CreateApplicantAchivementResponse extends DefaultSuccessResponse {}

export interface CreateApplicantAchivementRequest {
  applicant_id: string
  recommendation_file: string
  recommender_name: string
  image: string
  by_whom: string
}

export interface UpdateApplicantAchivementResponse extends DefaultSuccessResponse {}

export interface UpdateApplicantAchivementRequest {
  cer_id: string
  applicant_id: string
  recommendation_file?: string
  recommender_name?: string
  image?: string
  by_whom?: string
}

export interface DeleteApplicantAchivementResponse extends DefaultSuccessResponse {}

export interface DeleteApplicantAchivementRequest {
  applicant_id: string
  cer_id: string
}

export interface CreateApplicantOtherCertResponse extends DefaultSuccessResponse {}

export interface CreateApplicantOtherCertRequest {
  applicant_id: string
  certificate_file: string
  certificate_name: string
}

export interface UpdateApplicantOtherCertResponse extends DefaultSuccessResponse {}

export interface UpdateApplicantOtherCertRequest {
  cer_id: string
  applicant_id: string
  certificate_file?: string
  certificate_name?: string
}

export interface DeleteApplicantOtherCertResponse extends DefaultSuccessResponse {}

export interface DeleteApplicantOtherCertRequest {
  applicant_id: string
  cer_id: string
}

export interface CreateApplicantExperienceResponse extends DefaultSuccessResponse {}

export interface CreateApplicantExperienceRequest {
  applicant_id: string
  image: string
  company_name: string
  position: string
  location: string
  description: string
  end_month: string
  end_year: string
  start_month: string
  start_year: string
}

export interface UpdateApplicantExperienceResponse extends DefaultSuccessResponse {}

export interface UpdateApplicantExperienceRequest {
  experience_id: string
  applicant_id: string
  image?: string
  company_name?: string
  position?: string
  location?: string
  description?: string
  end_month?: string
  end_year?: string
  start_month?: string
  start_year?: string
}

export interface DeleteApplicantExperienceResponse extends DefaultSuccessResponse {}

export interface DeleteApplicantExperienceRequest {
  applicant_id: string
  experience_id: string
}

export interface CreateApplicantEducationResponse extends DefaultSuccessResponse {}

export interface CreateApplicantEducationRequest {
  applicant_id: string
  image: string
  education_name: string
  field_name: string
  start_date: string
  end_date: string
  description: string
  gpa: string
  recommendation_school: string
  file_transcript: string
}

export interface UpdateApplicantEducationResponse extends DefaultSuccessResponse {}

export interface UpdateApplicantEducationRequest {
  education_id: string
  applicant_id: string
  image?: string
  education_name?: string
  field_name?: string
  start_date?: string
  end_date?: string
  description?: string
  gpa?: string
  recommendation_school?: string
  file_transcript?: string
}

export interface DeleteApplicantEducationResponse extends DefaultSuccessResponse {}

export interface DeleteApplicantEducationRequest {
  applicant_id: string
  education_id: string
}

export interface ApplyProgrmResponse extends DefaultSuccessResponse {
  data: ApplicantAppliedProgram
}
export interface ApplyProgrmRequest {
  university_id: string
  applicant_id: string
  program_id: string
}
