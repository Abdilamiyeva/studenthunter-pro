import {ApplicantStatus, AppliedApplicantStatus, CompanyStatus, VacancyStatus} from '@/constants/statusues'
import {Vacancy} from './vacancy'
import {Gender} from './applicant'

export interface Company {
  _id: string
  login_id: string
  title: string
  description: string
  size_id: string
  employee_size: string
  contact_person: string
  contact_role: string
  inn: string
  logo: string
  website: string
  phone_number: string
  country_id: string
  region_id: string
  country: string
  region: string
  city: string
  email: string
  password: string
  socials: {
    telegram: string
    instagram: string
    facebook: string
    youtube: string
    linkedin: string
  }
  views: number
  vacancies: Vacancy[]
  status: CompanyStatus
}

export interface CompanyAppliedApplicant {
  _id: string
  company: {
    _id: string
    title: string
    contact_person: string
    contact_role: string
    inn: string
    phone_number: string
    country: string
    email: string
    status: CompanyStatus
    created_at: string
    updated_at: string
    city: string
  }
  applied_vacancy: {
    _id: string
    job_title: string
    company: string
    description: string
    experience_level: string
    specialties: string
    job_type: string
    salary: number
    country: string
    city: string
    skills: string[]
    applied: string[]
    saved: string[]
    status: VacancyStatus
    created_at: string
    updated_at: string
  }
  user: string
  liked: number
  status: AppliedApplicantStatus
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
    certificates: string[]
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
