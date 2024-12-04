export interface UserUniversity {
  id: number
  name: string
  img: string
  phone: string
  location: string
  program: string
  applicationStatus: 'applied' | 'in process' | 'cancelled'
}

export interface Props {
  index: number
  university: UserUniversity
}
