import {EndpointNameAuth} from '@/constants/endpoints'
import {baseApi} from '..'
import {
  BecomeAMemberRequest,
  BecomeAMemberResponse,
  ConfirmMemberRequest,
  ConfirmMemberResponse,
  GetUserRequest,
  GetUserResponse,
  LoginUserRequest,
  LoginUserResponse,
  RejectMemberRequest,
  RejectMemberResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  SendEmailToResetPasswordRequest,
  SendEmailToResetPasswordResponse,
  SignUpUserRequest,
  SignUpUserResponse,
  UpdatePasswordRequest,
  UpdatePasswordResponse,
  VerifyEmailRequest,
  VerifyEmailResponse,
} from './types'
import {RTKTagNames} from '@/constants/rtk-tag-names'

export const AuthExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getUser: build.query<GetUserResponse, GetUserRequest>({
      query: () => ({
        url: EndpointNameAuth.GET_CURRENT_USER,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.USER],
    }),

    loginUser: build.mutation<LoginUserResponse, LoginUserRequest>({
      query: body => ({
        url: EndpointNameAuth.LOGIN_USER,
        method: 'POST',
        body,
      }),
    }),

    signUpUser: build.mutation<SignUpUserResponse, SignUpUserRequest>({
      query: body => ({
        url: EndpointNameAuth.SIGN_UP_USER,
        method: 'POST',
        body,
      }),
    }),

    verifyEmail: build.mutation<VerifyEmailResponse, VerifyEmailRequest>({
      query: ({token}) => ({
        url: EndpointNameAuth.EMAIL_VERIFICATION,
        method: 'POST',
        params: {
          token,
        },
      }),
      invalidatesTags: [RTKTagNames.USER],
    }),

    updatePassword: build.mutation<UpdatePasswordResponse, UpdatePasswordRequest>({
      query: body => ({
        url: EndpointNameAuth.UPDATE_PASSWORD,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.USER],
    }),

    sendEmailToResetPassword: build.mutation<SendEmailToResetPasswordResponse, SendEmailToResetPasswordRequest>({
      query: ({email}) => ({
        url: EndpointNameAuth.SEND_LINK_TO_RESET_PASSWORD,
        method: 'POST',
        params: {email},
      }),
    }),

    resetPassword: build.mutation<ResetPasswordResponse, ResetPasswordRequest>({
      query: ({token, body}) => ({
        url: EndpointNameAuth.RESET_PASSWORD,
        method: 'POST',
        params: {token},
        body,
      }),
      invalidatesTags: [RTKTagNames.USER],
    }),

    becomeAMember: build.mutation<BecomeAMemberResponse, BecomeAMemberRequest>({
      query: body => ({
        url: EndpointNameAuth.BECOME_A_MEMBER,
        method: 'POST',
        body,
      }),
    }),

    confirmMemeber: build.mutation<ConfirmMemberResponse, ConfirmMemberRequest>({
      query: body => ({
        url: EndpointNameAuth.CONFIRM_MEMBER,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.UNIVERSITY, RTKTagNames.COMPANY, RTKTagNames.CONSULTING],
    }),

    rejectMember: build.mutation<RejectMemberResponse, RejectMemberRequest>({
      query: params => ({
        url: EndpointNameAuth.REJECT_MEMBER,
        method: 'DELETE',
        params,
      }),
      invalidatesTags: [RTKTagNames.UNIVERSITY, RTKTagNames.COMPANY, RTKTagNames.CONSULTING],
    }),
  }),
})

export const {
  useGetUserQuery,
  useLazyGetUserQuery,
  useLoginUserMutation,
  useSignUpUserMutation,
  useVerifyEmailMutation,
  useUpdatePasswordMutation,
  useSendEmailToResetPasswordMutation,
  useResetPasswordMutation,
  useBecomeAMemberMutation,
  useConfirmMemeberMutation,
  useRejectMemberMutation,
} = AuthExtendedEndpoints
