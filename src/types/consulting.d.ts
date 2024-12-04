import {ConsultingContractStatus} from '@/constants/statusues'
import {University} from './university'

export interface AdminConsulting {
  _id: string
  title: string
  logo?: string
  contact_person: string
  contact_role: string
  phone_number: string
  email: string
  socials?: {
    telegram?: string
    instagram?: string
    facebook?: string
    youtube?: string
    linkedin?: string
    twitter?: string
  }
  services_fee: string
  website?: string
  about?: string
  contract: ConsultingContractStatus
  status: ConsultingStatus
  partners_count: number
}

export interface Consulting {
  socials?: {
    telegram?: string
    instagram?: string
    facebook?: string
    youtube?: string
    linkedin?: string
    twitter?: string
  }
  _id: string
  title: string
  logo?: string
  contact_person: string
  contact_role: string
  phone_number: string
  email: string
  services_fee?: number
  partners_count?: number
  website?: string
  about?: string
  contract: ConsultingContractStatus
  status: ConsultingStatus
  created_at?: string
  updated_at?: string
  colleges: University[]
}
