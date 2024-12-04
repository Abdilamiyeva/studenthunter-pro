import {FacultyStatus} from '@/constants/statusues'
import {StudyLevel} from '@/constants/study-levels'

export interface Requirement {
  exam_name: string
  min_score: string
}

export interface Faculty {
  _id: string
  university_id: {
    _id: string
    title: string
    logo: string
    country: string
    media?: string[]
  }
  fee: number
  status: FacultyStatus
  requirements: string[]
  program: string
  level: StudyLevel
}

export interface ShortFaculty {
  _id: string
  university_id: string
  fee: number
  language: string
  status: FacultyStatus
  requirements: Requirement[]
  program: string
  level: string
}

export interface PublicFaculty {
  _id: string
  university_id: {
    _id: string
    title: string
    logo: string
    country: string
  }
  title_en: string
  title_ru: string
  title_uz: string
  fee: number
  language: string
  status: number
  requirements: Requirement[]
  program: string
  level: string
}
