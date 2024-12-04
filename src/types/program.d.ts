import {ApplicantAppliedProgramStatus, FacultyStatus} from '@/constants/statusues'
import {Requirement} from './faculty'

export interface ApplicantAppliedProgram {
  _id: string
  applicant_id: string
  university_id: string
  faculty_id: {
    program: string
    level: string
  }
  university_status: number
  is_viewed: number
  status: ApplicantAppliedProgramStatus
  created_at: string
  updated_at: string
}

export interface PublicPrograms {
  _id: string
  university_id: {
    country: string
    logo: string
    title: string
    _id: string
    media: string[]
    living_costs?: string
    socials: {
      telegram: string
      instagram: string
      facebook: string
      linkedin: string
    }
  }
  attendance: string
  application_start: Date
  deadline: Date
  title_en: string
  title_ru: string
  title_uz: string
  fee: number
  language: string
  status: FacultyStatus
  requirements: Requirement[]
  program: string
  level: string
  about?: string
  duration?: number
  format?: string
  subject?: string
  summary?: string
  scholarship_description?: string
  faculty?: string
  fee_description?: string
  scholarship_description?: string
  scholarship?: string
}
