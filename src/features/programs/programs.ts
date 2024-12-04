import {EndpointNamePrograms} from '@/constants/endpoints'
import {baseApi} from '..'
import {
  GetProgramsResponse,
  GetProgramsRequest,
  GetProgramResponse,
  GetProgramRequest,
  GetUniversityProgramResponse,
  GetUniversityProgramRequest,
} from './types'

export const ProgramsExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getPublicPrograms: build.query<GetProgramsResponse, GetProgramsRequest>({
      query: params => ({
        url: EndpointNamePrograms.GET_PROGRAMS,
        method: 'GET',
        params,
      }),
    }),
    getPublicProgram: build.query<GetProgramResponse, GetProgramRequest>({
      query: ({id}) => ({
        url: EndpointNamePrograms.GET_PUBLIC_PROGRAM + id,
        method: 'GET',
      }),
    }),
    getUniversityProgram: build.query<GetUniversityProgramResponse, GetUniversityProgramRequest>({
      query: params => ({
        url: EndpointNamePrograms.GET_UNIVERSITY_PROGRAM,
        method: 'GET',
        params,
      }),
    }),
  }),
})

export const {
  useLazyGetPublicProgramsQuery,
  useGetPublicProgramQuery,
  useGetUniversityProgramQuery,
  useLazyGetPublicProgramQuery,
} = ProgramsExtendedEndpoints
