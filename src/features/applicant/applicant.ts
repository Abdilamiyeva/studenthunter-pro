import {EndpointNameApplicant} from '@/constants/endpoints'
import {baseApi} from '..'
import {
  ApplyProgramRequest,
  ApplyProgramResponse,
  ApplyProgrmRequest,
  ApplyProgrmResponse,
  ChangeApplicantStatusRequest,
  ChangeApplicantStatusResponse,
  CreateApplicantAchivementRequest,
  CreateApplicantAchivementResponse,
  CreateApplicantCertRequest,
  CreateApplicantCertResponse,
  CreateApplicantEducationRequest,
  CreateApplicantEducationResponse,
  CreateApplicantExperienceRequest,
  CreateApplicantExperienceResponse,
  CreateApplicantOtherCertRequest,
  CreateApplicantOtherCertResponse,
  DeleteApplicantAchivementRequest,
  DeleteApplicantAchivementResponse,
  DeleteApplicantCertRequest,
  DeleteApplicantCertResponse,
  DeleteApplicantEducationRequest,
  DeleteApplicantEducationResponse,
  DeleteApplicantExperienceRequest,
  DeleteApplicantExperienceResponse,
  DeleteApplicantOtherCertRequest,
  DeleteApplicantOtherCertResponse,
  DeleteApplicantRequest,
  DeleteApplicantResponse,
  GetApplicantAppliedProgramRequest,
  GetApplicantAppliedProgramResponse,
  GetApplicantAppliedUniversitiesRequest,
  GetApplicantAppliedUniversitiesResponse,
  GetApplicantLikedUniversitiesRequest,
  GetApplicantLikedUniversitiesResponse,
  GetApplicantRequest,
  GetApplicantResponse,
  GetApplicantsRequest,
  GetApplicantsResponse,
  LikeUniversityResponse,
  LikedUniversityRequest,
  UpdateApplicantAchivementRequest,
  UpdateApplicantAchivementResponse,
  UpdateApplicantCertRequest,
  UpdateApplicantCertResponse,
  UpdateApplicantEducationRequest,
  UpdateApplicantEducationResponse,
  UpdateApplicantExperienceRequest,
  UpdateApplicantExperienceResponse,
  UpdateApplicantOtherCertRequest,
  UpdateApplicantOtherCertResponse,
  UpdateApplicantRequest,
  UpdateApplicantResponse,
  UpdateApplicantSignatureRequest,
  UpdateApplicantSignatureResponse,
} from './types'
import {RTKTagNames} from '@/constants/rtk-tag-names'

export const ApplicantExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getApplicants: build.query<GetApplicantsResponse, GetApplicantsRequest>({
      query: params => ({
        url: EndpointNameApplicant.GET_APPLICANTS,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.APPLICANT],
    }),

    getApplicant: build.query<GetApplicantResponse, GetApplicantRequest>({
      query: ({applicantID}) => ({
        url: EndpointNameApplicant.GET_APPLICANT + applicantID,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.APPLICANT],
    }),

    changeApplicantStatus: build.mutation<ChangeApplicantStatusResponse, ChangeApplicantStatusRequest>({
      query: ({applicantID, params}) => ({
        url: EndpointNameApplicant.CHANGE_APPLICANT_STATUS + applicantID,
        method: 'PUT',
        params,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    deleteApplicant: build.mutation<DeleteApplicantResponse, DeleteApplicantRequest>({
      query: ({applicantID}) => ({
        url: EndpointNameApplicant.DELETE_APPLICANT + applicantID,
        method: 'DELETE',
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    getApplicantAppiedUniversities: build.query<
      GetApplicantAppliedUniversitiesResponse,
      GetApplicantAppliedUniversitiesRequest
    >({
      query: ({applicantID, params}) => ({
        url: EndpointNameApplicant.GET_APPLIED_UNIVERSITY + applicantID,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.APPLICANT],
    }),

    getApplicantLikedUniversities: build.query<
      GetApplicantLikedUniversitiesResponse,
      GetApplicantLikedUniversitiesRequest
    >({
      query: ({applicantID, params}) => ({
        url: EndpointNameApplicant.LIKE_UNIVERSITY + applicantID,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.APPLICANT],
    }),

    likeApplicantUniversity: build.mutation<LikeUniversityResponse, LikedUniversityRequest>({
      query: body => ({
        url: EndpointNameApplicant.LIKE_UNIVERSITY,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    applyUniversity: build.mutation<ApplyProgramResponse, ApplyProgramRequest>({
      query: body => ({
        url: EndpointNameApplicant.APPLY_PROGRAM,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    getAppliedProgram: build.query<GetApplicantAppliedProgramResponse, GetApplicantAppliedProgramRequest>({
      query: params => ({
        url: EndpointNameApplicant.APPLY_PROGRAM,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.APPLICANT],
    }),

    updateApplicant: build.mutation<UpdateApplicantResponse, UpdateApplicantRequest>({
      query: ({applicantID, body}) => ({
        url: EndpointNameApplicant.UPDATE_APPLICANT + applicantID,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    updateApplicantSignature: build.mutation<UpdateApplicantSignatureResponse, UpdateApplicantSignatureRequest>({
      query: ({applicantID, body}) => ({
        url: EndpointNameApplicant.UPDATE_APPLICANT + applicantID,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    createApplicantCert: build.mutation<CreateApplicantCertResponse, CreateApplicantCertRequest>({
      query: body => ({
        url: EndpointNameApplicant.CREATE_CER,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    updateApplicantCert: build.mutation<UpdateApplicantCertResponse, UpdateApplicantCertRequest>({
      query: body => ({
        url: EndpointNameApplicant.UPDATE_CER,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    deleteApplicantCert: build.mutation<DeleteApplicantCertResponse, DeleteApplicantCertRequest>({
      query: params => ({
        url: EndpointNameApplicant.DELETE_CER,
        method: 'DELETE',
        params,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    createApplicantAchivement: build.mutation<CreateApplicantAchivementResponse, CreateApplicantAchivementRequest>({
      query: body => ({
        url: EndpointNameApplicant.CREATE_ACHIVEMENT,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    updateApplicantAchivement: build.mutation<UpdateApplicantAchivementResponse, UpdateApplicantAchivementRequest>({
      query: body => ({
        url: EndpointNameApplicant.UPDATE_ACHIVEMENT,
        method: 'PUT',
        body,
      }),
    }),

    deleteApplicantAchivement: build.mutation<DeleteApplicantAchivementResponse, DeleteApplicantAchivementRequest>({
      query: params => ({
        url: EndpointNameApplicant.DELETE_ACHIVEMENT,
        method: 'DELETE',
        params,
      }),
    }),

    createApplicantOtherCert: build.mutation<CreateApplicantOtherCertResponse, CreateApplicantOtherCertRequest>({
      query: body => ({
        url: EndpointNameApplicant.CREATE_OTHER_CER,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    updateApplicantOtherCert: build.mutation<UpdateApplicantOtherCertResponse, UpdateApplicantOtherCertRequest>({
      query: body => ({
        url: EndpointNameApplicant.UPDATE_OTHER_CER,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    deleteApplicantOtherCert: build.mutation<DeleteApplicantOtherCertResponse, DeleteApplicantOtherCertRequest>({
      query: params => ({
        url: EndpointNameApplicant.DELETE_APPLICANT,
        method: 'DELETE',
        params,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    createApplicantExperience: build.mutation<CreateApplicantExperienceResponse, CreateApplicantExperienceRequest>({
      query: body => ({
        url: EndpointNameApplicant.CREATE_EXPERIENCE,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    updateApplicantExperience: build.mutation<UpdateApplicantExperienceResponse, UpdateApplicantExperienceRequest>({
      query: body => ({
        url: EndpointNameApplicant.UPDATE_EXPERIENCE,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    deleteApplicantExperience: build.mutation<DeleteApplicantExperienceResponse, DeleteApplicantExperienceRequest>({
      query: params => ({
        url: EndpointNameApplicant.DELETE_EXPERIENCE,
        method: 'DELETE',
        params,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    createApplicantEducation: build.mutation<CreateApplicantEducationResponse, CreateApplicantEducationRequest>({
      query: body => ({
        url: EndpointNameApplicant.CREATE_EDUCATION,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    updateApplicantEducation: build.mutation<UpdateApplicantEducationResponse, UpdateApplicantEducationRequest>({
      query: body => ({
        url: EndpointNameApplicant.UPDATE_EDUCATION,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),

    deleteApplicantEducation: build.mutation<DeleteApplicantEducationResponse, DeleteApplicantEducationRequest>({
      query: params => ({
        url: EndpointNameApplicant.DELETE_EDUCATION,
        method: 'DELETE',
        params,
      }),
      invalidatesTags: [RTKTagNames.APPLICANT],
    }),
    applyProgrm: build.mutation<ApplyProgrmResponse, ApplyProgrmRequest>({
      query: body => ({
        url: EndpointNameApplicant.APPLY_PROGRAM,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useLazyGetApplicantsQuery,
  useGetApplicantQuery,
  useChangeApplicantStatusMutation,
  useDeleteApplicantMutation,
  useLazyGetApplicantAppiedUniversitiesQuery,
  useLazyGetApplicantLikedUniversitiesQuery,
  useLikeApplicantUniversityMutation,
  useApplyUniversityMutation,
  useGetAppliedProgramQuery,
  useUpdateApplicantMutation,
  useUpdateApplicantSignatureMutation,
  useCreateApplicantCertMutation,
  useUpdateApplicantCertMutation,
  useDeleteApplicantCertMutation,
  useCreateApplicantAchivementMutation,
  useUpdateApplicantAchivementMutation,
  useDeleteApplicantAchivementMutation,
  useCreateApplicantOtherCertMutation,
  useUpdateApplicantOtherCertMutation,
  useDeleteApplicantOtherCertMutation,
  useCreateApplicantExperienceMutation,
  useUpdateApplicantExperienceMutation,
  useDeleteApplicantExperienceMutation,
  useCreateApplicantEducationMutation,
  useUpdateApplicantEducationMutation,
  useDeleteApplicantEducationMutation,
  useApplyProgrmMutation,
} = ApplicantExtendedEndpoints
