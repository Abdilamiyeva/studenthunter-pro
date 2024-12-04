import {Role} from '@/constants/roles'
import {Applicant} from './applicant'
import {ApplicantCertificate} from '@/utils/get-certificate-score/types'

export interface User {
  id: string
  first_name?: string
  last_name?: string
  phone_number: string
  title?: string
  inn?: string
  email: string
  status: 1
  created_at: string
  updated_at: string
  role: Role
  applicant?: Applicant
}

export interface UniversityAppliedUser {
  _id: string
  university_status: number
  applicant: {
    _id: string
    first_name: string
    last_name: string
    image: string
    certificates_data: ApplicantCertificate[]
  }
  program: string
  last_school_gpa: number
}

export interface UniversitySavedUser {
  _id: string
  first_name: string
  last_name: string
  image: string
  certificates: ApplicantCertificate[]
  status: number
  applicant_student_id?: {
    last_school_name: string
    last_school_gpa: number
  }
}
