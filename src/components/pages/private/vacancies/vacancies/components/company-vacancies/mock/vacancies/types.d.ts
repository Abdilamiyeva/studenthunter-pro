export interface Vacancy {
  id: number
  title: string
  company: string
  applications: number
  specialities: string
  salary: number
  city: string
  country: string
  salary_type: 'yearly' | 'monthly' | 'negotiable'
  posted_date: string
  experience_level: string
  job_type: string
  company_logo: string
  description: string
}
