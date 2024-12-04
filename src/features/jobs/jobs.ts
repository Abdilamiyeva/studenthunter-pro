import {EndpointNameVacancy} from '@/constants/endpoints'
import {baseApi} from '..'
import {
  GetApplyRequset,
  GetApplyResponse,
  GetJobRequset,
  GetJobResponse,
  GetPublicJobsResponse,
  GetPublicJobsRequest,
  GetLikeJobRequset,
  GetLikeJobResponse,
  GetUnLikeJobRequset,
  GetUnLikeJobResponse,
  WithdrawVacancyResponse,
  WithdrawVacancyRequest,
  UpdateVacancyResponse,
  UpdateVacancyRequest,
  DeleteVacancyResponse,
  DeleteVacancyRequest,
  GetJobsResponse,
  GetJobsRequest,
  GetVacancyAppliedApplicantsResponse,
  GetVacancyAppliedApplicantsRequest,
} from './types'
import {RTKTagNames} from '@/constants/rtk-tag-names'

export const JobsExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getPublicJobs: build.query<GetPublicJobsResponse, GetPublicJobsRequest>({
      query: params => ({
        url: EndpointNameVacancy.GET_PUBLIC_VACANCIES,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.VACANCY],
    }),

    getJob: build.query<GetJobResponse, GetJobRequset>({
      query: ({id}) => ({
        url: EndpointNameVacancy.VACANCY + id,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.VACANCY],
    }),

    getJobs: build.query<GetJobsResponse, GetJobsRequest>({
      query: params => ({
        url: EndpointNameVacancy.GET_DASHBOARD_VACANCIES,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.VACANCY],
    }),

    getVacancyApplicants: build.query<GetVacancyAppliedApplicantsResponse, GetVacancyAppliedApplicantsRequest>({
      query: params => ({
        url: EndpointNameVacancy.GET_VACANCY_APPLICANTS,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.VACANCY],
    }),

    applyJob: build.mutation<GetApplyResponse, GetApplyRequset>({
      query: body => ({
        url: EndpointNameVacancy.APPLY_VACANCY,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.VACANCY],
    }),

    withdrawJob: build.mutation<WithdrawVacancyResponse, WithdrawVacancyRequest>({
      query: body => ({
        url: EndpointNameVacancy.WITHDRAW_VACANCY,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.VACANCY],
    }),

    likeJob: build.mutation<GetLikeJobResponse, GetLikeJobRequset>({
      query: body => ({
        url: EndpointNameVacancy.LIKE_VACANCY,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.VACANCY],
    }),
    unLikeJob: build.mutation<GetUnLikeJobResponse, GetUnLikeJobRequset>({
      query: body => ({
        url: EndpointNameVacancy.UNLIKE_VACANCY,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.VACANCY],
    }),

    updateVacancy: build.mutation<UpdateVacancyResponse, UpdateVacancyRequest>({
      query: ({vacancyID, body}) => ({
        url: EndpointNameVacancy.VACANCY + vacancyID,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.VACANCY],
    }),

    deleteVacancy: build.mutation<DeleteVacancyResponse, DeleteVacancyRequest>({
      query: ({vacancyID}) => ({
        url: EndpointNameVacancy.VACANCY + vacancyID,
        method: 'DELETE',
      }),
      invalidatesTags: [RTKTagNames.VACANCY],
    }),
  }),
})

export const {
  useGetJobQuery,
  useGetJobsQuery,
  useLazyGetJobsQuery,
  useApplyJobMutation,
  useLikeJobMutation,
  useUnLikeJobMutation,
  useGetPublicJobsQuery,
  useLazyGetPublicJobsQuery,
  useDeleteVacancyMutation,
  useUpdateVacancyMutation,
  useLazyGetVacancyApplicantsQuery,
} = JobsExtendedEndpoints
