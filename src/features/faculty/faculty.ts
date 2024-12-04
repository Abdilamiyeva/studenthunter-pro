import {baseApi} from '..'
import {RTKTagNames} from '@/constants/rtk-tag-names'
import {
  CreateFacultyRequest,
  CreateFacultyResponse,
  DeleteFacultyRequest,
  DeleteFacultyResponse,
  GetPublicUniversityFacultiesRequest,
  GetPublicUniversityFacultiesResponse,
  GetUniversityFacultiesRequest,
  GetUniversityFacultiesResponse,
} from './types'
import {EndpointNameFaculty} from '@/constants/endpoints'

export const UniversityExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getUniversityFaculties: build.query<GetUniversityFacultiesResponse, GetUniversityFacultiesRequest>({
      query: params => ({
        url: EndpointNameFaculty.GET_FACULTIES,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.UNIVERSITY, RTKTagNames.FACULTY],
    }),
    getPublicUniversityFaculties: build.query<
      GetPublicUniversityFacultiesResponse,
      GetPublicUniversityFacultiesRequest
    >({
      query: params => ({
        url: EndpointNameFaculty.GET_FACULTIES,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.UNIVERSITY, RTKTagNames.FACULTY],
    }),
    deleteFaculty: build.mutation<DeleteFacultyResponse, DeleteFacultyRequest>({
      query: ({universityFacultyID}) => ({
        url: EndpointNameFaculty.DELETE_FACULTY + universityFacultyID,
        method: 'DELETE',
      }),
      invalidatesTags: [RTKTagNames.UNIVERSITY, RTKTagNames.FACULTY],
    }),
    createFaculty: build.mutation<CreateFacultyResponse, CreateFacultyRequest>({
      query: body => ({
        url: EndpointNameFaculty.CREATE_FACULTY,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.UNIVERSITY, RTKTagNames.FACULTY],
    }),
  }),
})

export const {
  useGetUniversityFacultiesQuery,
  useGetPublicUniversityFacultiesQuery,
  useDeleteFacultyMutation,
  useCreateFacultyMutation,
} = UniversityExtendedEndpoints
