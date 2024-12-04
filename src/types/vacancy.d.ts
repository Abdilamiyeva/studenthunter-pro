import {VacancyStatus} from '@/constants/statusues'
import {Company} from './company'

export interface Vacancy {
  _id: string
  job_title: string
  company: Company
  description: string
  experience_level: string
  specialties: string
  job_type: string
  salary: number
  country: string
  city: string
  skills: string[]
  status: VacancyStatus
  created_at: string
}

export interface AdminVacancy {
  _id: string
  company: {
    _id: string
    title: string
  }
  country: string
  city: string
  salary: number
  specialties: string
  applicants_count: number
}

export interface HomeVacancy {
  _id: string
  job_title: string
  company: {
    _id: string
    title: string
    logo: string
  }
  job_type: string
}
