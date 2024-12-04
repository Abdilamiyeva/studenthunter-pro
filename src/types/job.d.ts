export interface Job {
  _id: string
  job_title: string
  company: {
    _id: string
    title: string
    contact_person: string
    contact_role: string
    inn: string
    phone_number: string
    country: string
    email: string
    status: number
    created_at: Date
    updated_at: Date
    city: string
    description: string
    logo: string
    website: string
    region: string
    media: string[]
    socials: {
      telegram: string
      instagram: string
      facebook: string
      youtube: string
      linkedin: string
    }
  }
  description: string
  experience_level: string
  job_type: string
  country: string
  city: string
  skills: string[]
  applied: string[]
  saved: string[]
  status: number
  created_at: Date
  updated_at: Date
  salary: number
  specialties: string
}
