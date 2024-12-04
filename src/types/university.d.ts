import {UniversityAppliedUserStatus} from '@/constants/statusues'

export interface ApplicantAppliedUniversity {
  _id: string
  university_status: UniversityAppliedUserStatus
  university: {
    _id: string
    title: string
    logo: string
    country: string
  }
  program: string
}

export interface ApplicantLikedUniversity {
  _id: string
  title: string
  logo: string
  phone_number: string
  country: string
}

export interface University {
  socials?: {
    telegram: string
    instagram: string
    facebook: string
    youtube: string
    linkedin: string
  }
  _id: string
  login_id: string
  title: string
  description_en: string
  description_ru: string
  description_uz: string
  logo: string
  image: string
  website: string
  phone_number: string
  email: string
  faculties: string[]
  views: number
  contract: number
  status: number
  created_at: Date
  updated_at: Date
  country: string
  city: string
  applicationsCount: number
  media: string[]
  tuition_fee: string
  contact_person: string
  contact_role: string
  rating: string
  study_level?: string
  summary?: string
  fee: number
  living_costs?: string
}

export interface HomeUniversity {
  _id: string
  title: string
  media: string[]
}
