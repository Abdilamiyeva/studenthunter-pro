import {EndpointNameUniversity} from '@/constants/endpoints'
import {baseApi} from '..'
import {
  ChangeUniversityStatusRequest,
  ChangeUniversityStatusResponse,
  CreateUniversityRequest,
  CreateUniversityResponse,
  GetAdminDashboardUniversitiesRequest,
  GetAdminDashboardUniversitiesResponse,
  GetPublicUniversitiesRequset,
  GetPublicUniversitiesresponse,
  GetPublicUniversityRequset,
  GetPublicUniversityresponse,
  GetUniversityAppliedUsersRequest,
  GetUniversityAppliedUsersResponse,
  GetUniversityFacultyRequest,
  GetUniversityFacultyResponse,
  GetUniversitySavedUsersRequest,
  GetUniversitySavedUsersResponse,
  likeUniversityRequest,
  likeUniversityResponse,
  UpdateUniversityRequest,
  UpdateUniversityResponse,
} from './types'
import {RTKTagNames} from '@/constants/rtk-tag-names'

export const UniversityExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getAdminDashboardUniversities: build.query<
      GetAdminDashboardUniversitiesResponse,
      GetAdminDashboardUniversitiesRequest
    >({
      query: params => ({
        url: EndpointNameUniversity.GET_ADMIN_DASHBOARD_UNIVERSITIES,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.UNIVERSITY],
    }),

    getPublicUniversities: build.query<GetPublicUniversitiesresponse, GetPublicUniversitiesRequset>({
      query: params => ({
        url: EndpointNameUniversity.GET_PUBLIC_UNIVERSITIES,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.UNIVERSITY],
    }),

    getUniversity: build.query<GetPublicUniversityresponse, GetPublicUniversityRequset>({
      query: id => ({
        url: EndpointNameUniversity.GET_UNIVERSITY + id,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.UNIVERSITY],
    }),

    getUniversityAppliedUsers: build.query<GetUniversityAppliedUsersResponse, GetUniversityAppliedUsersRequest>({
      query: ({universityID, params}) => ({
        url: EndpointNameUniversity.GET_UNIVERSITY_APPLIED_USER + universityID,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.UNIVERSITY],
    }),

    getUniversitySavedUsers: build.query<GetUniversitySavedUsersResponse, GetUniversitySavedUsersRequest>({
      query: ({universityID, params}) => ({
        url: EndpointNameUniversity.GET_UNIVERSITY_SAVED_USER + universityID,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.UNIVERSITY],
    }),

    createUniversity: build.mutation<CreateUniversityResponse, CreateUniversityRequest>({
      query: body => ({
        url: EndpointNameUniversity.CREATE_UNIVERSITY,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.UNIVERSITY],
    }),

    changeUniversityStatus: build.mutation<ChangeUniversityStatusResponse, ChangeUniversityStatusRequest>({
      query: ({universityID, params}) => ({
        url: EndpointNameUniversity.CHANGE_UNIVERSITY_STATUS + universityID,
        method: 'PUT',
        params,
      }),
      invalidatesTags: [RTKTagNames.UNIVERSITY],
    }),
    likeUniversity: build.mutation<likeUniversityResponse, likeUniversityRequest>({
      query: body => ({
        url: EndpointNameUniversity.LIKE_UNIVERSITY,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.UNIVERSITY],
    }),
    updateUniversity: build.mutation<UpdateUniversityResponse, UpdateUniversityRequest>({
      query: ({universityID, body}) => ({
        url: EndpointNameUniversity.UPDATE_UNIVERSITY + universityID,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.UNIVERSITY],
    }),
    getUniversityFaculty: build.query<GetUniversityFacultyResponse, GetUniversityFacultyRequest>({
      query: params => ({
        url: EndpointNameUniversity.GET_UNIVERSITY_FACULTY,
        method: 'GET',
        params,
      }),
    }),
  }),
})

export const {
  useLazyGetAdminDashboardUniversitiesQuery,
  useCreateUniversityMutation,
  useChangeUniversityStatusMutation,
  useLazyGetPublicUniversitiesQuery,
  useLazyGetUniversityAppliedUsersQuery,
  useLazyGetUniversitySavedUsersQuery,
  useUpdateUniversityMutation,
  useGetUniversityFacultyQuery,
  useGetUniversityQuery,
  useLikeUniversityMutation,
} = UniversityExtendedEndpoints
