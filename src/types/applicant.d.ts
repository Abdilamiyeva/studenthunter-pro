import {
  ApplicantAchivementStatus,
  ApplicantCertificateStatus,
  ApplicantEducationStatus,
  ApplicantExperienceStatus,
  ApplicantOtherCertificateStatus,
  ApplicantStatus,
  VacancyApplicantStatus,
  VacancyStatus,
} from '@/constants/statusues'

export type Gender = 'male' | 'female'

export interface ApplicantCertificate {
  _id: string
  applicant_id: string
  certificate_name: string
  certificate_score: string
  certificate_file: string
  certificate_trf: string
  status: ApplicantCertificateStatus
  image: string
  issued_date: Date
  expire_date: Date
}

export interface ApplicantOtherCertificate {
  _id: string
  applicant_id: string
  certificate_name: string
  certificate_file: string
  status: ApplicantOtherCertificateStatus
}

export interface Address {
  region: string
  city: string
  address: string
}

export interface ApplicantEducation {
  _id: string
  applicant_id: string
  education_name: string
  education_id: string
  field_name: string
  start_year: number
  end_year: number
  gpa: number
  max_gpa: number
  study_level: string
  file: string
  recommendation_school: string
  image: string
  description: string
  start_date: Date
  end_date: Date
  status: ApplicantEducationStatus
}

export interface ApplicantExperience {
  _id: string
  applicant_id: string
  company_name: string
  company_website: string
  position: string
  type_id: number
  start_year: number
  start_month: number
  end_year: number
  end_month: number
  description: string
  location: string
  image: string
  status: ApplicantExperienceStatus
}

export interface ApplicantAchivement {
  _id: string
  applicant_id: string
  recommender_name: string
  recommender_email: string
  recommender_phone_number: string
  recommendation_file: string
  image: string
  by_whom: string
  status: ApplicantAchivementStatus
}

export interface AdminApplicant {
  _id: string
  first_name: string
  last_name: string
  image?: string
  phone_number: string
  status: number
  certificates: ApplicantCertificate[]
  address_data: Address[]
}

export interface Applicant {
  _id: string
  login_id: string
  first_name: string
  last_name: string
  middle_name: string
  date_of_birth: string
  place_of_birth: string
  gender?: Gender
  cv_file?: string
  phone_number: string
  image: string
  email: string
  certificates: ApplicantCertificate[]
  other_certificates: ApplicantOtherCertificate[]
  experience: ApplicantExperience[]
  educations: ApplicantEducation[]
  achievements: ApplicantAchivement[]
  check: number
  fullName?: string
  confirm_date?: string
  status: ApplicantStatus
  created_at: string
  updated_at: string
  social?: {
    telegram?: string
    instagram?: string
    linkedin?: string
    facebook?: string
  }
  applicant_student_id?: {
    _id: string
    applicant_id: string
    passport?: string
    citizenship?: string
    given_date?: string
    expires_date?: string
    given_by?: string
    front_image?: string
    back_image?: string
    last_school_name?: string
    last_school_transcript?: string
    last_school_recommendation?: string
    last_school_gpa?: number
    region?: string
    city?: string
    address?: string
    country?: string
    emergency_contact?: string
    zip_code?: string
    jshshir?: string
    status: ApplicantStatus
  }
}

export interface VacancyApplicant {
  _id: string
  company: {
    _id: string
    title: string
    logo: string
  }
  user: string
  liked: number
  status: VacancyApplicantStatus
  vacancy: {
    _id: string
    job_title: string
    company: string
    description: string
    experience_level: string
    specialties: string
    job_type: string
    salary: 0
    country: string
    city: string
    skills: string[]
    applied: string[]
    saved: string[]
    status: VacancyStatus
    created_at: string
    updated_at: string
  }
  applicant: {
    _id: string
    login_id: string
    first_name: string
    last_name: string
    middle_name: string
    date_of_birth: string
    place_of_birth: string
    gender: Gender
    phone_number: string
    image: string
    email: string
    certificates: ApplicantCertificate[]
    other_certificates: string[]
    achievements: string[]
    experience: string[]
    educations: string[]
    check: number
    fullname: string
    confirm_date: string
    status: ApplicantStatus
    created_at: string
    updated_at: string
    applicant_student_id: string
  }
}
