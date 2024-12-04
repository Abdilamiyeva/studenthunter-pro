import {Role} from '@/constants/roles'
import {User} from '@/types/user'

export interface GetUserResponse {
  success: boolean
  data: User
}
export interface GetUserRequest {}

export interface LoginUserResponse {
  success: boolean
  token: string
  refreshToken: string
}
export interface LoginUserRequest {
  email: string
  password: string
}

export interface SignUpUserResponse {
  success: boolean
  data: {
    msg: 'string'
  }
}
export interface SignUpUserRequest {
  email: string
  first_name?: string
  last_name?: string
  phone_number: string
  password: string
  inn?: string
  title?: string
  isApplicant: boolean
}

export interface VerifyEmailResponse {
  success: boolean
  token: string
  refreshToken: string
}
export interface VerifyEmailRequest {
  token: string
}

export interface RefreshTokenResponse {}
export interface RefreshTokenRequest {}

export interface UpdatePasswordResponse {
  success: boolean
}
export interface UpdatePasswordRequest {
  currentPassword: string
  newPassword: string
}

export interface SendEmailToResetPasswordResponse {
  success: boolean
  data: {
    msg: string
  }
}
export interface SendEmailToResetPasswordRequest {
  email: string
}

export interface ResetPasswordResponse {
  success: boolean
  token: string
  refreshToken: string
}
export interface ResetPasswordRequest {
  token: string
  body: {
    newPassword: string
  }
}

export interface BecomeAMemberResponse {
  success: boolean
  msg: string
}
export interface BecomeAMemberRequest {
  role: Role
  title?: string
  email: string
  country?: string
  city?: string
  contact_person: string
  contact_role: string
  employee_size?: string
  phone_number: string
  inn?: string
}

export interface ConfirmMemberResponse {
  success: boolean
  msg: string
}

export interface ConfirmMemberRequest {
  role: string
  member_id: string
  password: string
}

export interface RejectMemberResponse {
  success: boolean
  data: {
    msg: string
  }
}

export interface RejectMemberRequest {
  role: Role
  member_id: string
}
