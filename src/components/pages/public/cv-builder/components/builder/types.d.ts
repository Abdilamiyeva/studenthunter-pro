import {Education} from './components/education/components/education-card/types'
import {Employment} from './components/employment/components/employment-card/types'
import {Lang} from './components/langs/components/lang-card/types'
import {Skill} from './components/skills/components/skill-card/types'
import {SocialLink} from './components/social-links/components/social-link-card/types'

export type Props = {
  stepBack: () => void
}

export type ResumeData = {
  profession: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  country: string
  address: string
  summary: string
  employments: Employment[]
  educations: Education[]
  socialLinks: SocialLink[]
  skills: Skill[]
  langs: Lang[]
  summaryTitle: string
  userImage: File
}
