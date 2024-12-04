import {EndpointNameConsulting} from '@/constants/endpoints'
import {baseApi} from '..'
import {RTKTagNames} from '@/constants/rtk-tag-names'
import {
  CreateConsultingRequest,
  CreateConsultingResponse,
  DeleteConsultingRequest,
  DeleteConsultingResponse,
  GetConsultingRequest,
  GetConsultingResponse,
  GetConsultingsRequest,
  GetConsultingsResponse,
  UpdateConsultingRequest,
  UpdateConsultingResponse,
} from './types'

export const ConsultingExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getConsultings: build.query<GetConsultingsResponse, GetConsultingsRequest>({
      query: params => ({
        url: EndpointNameConsulting.GET_CONSULTINGS,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.CONSULTING],
    }),

    getConsulting: build.query<GetConsultingResponse, GetConsultingRequest>({
      query: ({consultingID}) => ({
        url: EndpointNameConsulting.CONSULTING + consultingID,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.CONSULTING],
    }),

    createConsulting: build.mutation<CreateConsultingResponse, CreateConsultingRequest>({
      query: body => ({
        url: EndpointNameConsulting.CREATE_CONSULTING,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.CONSULTING],
    }),

    updateConsulting: build.mutation<UpdateConsultingResponse, UpdateConsultingRequest>({
      query: ({consultingID, body}) => ({
        url: EndpointNameConsulting.CONSULTING + consultingID,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.CONSULTING],
    }),

    deleteConsulting: build.mutation<DeleteConsultingResponse, DeleteConsultingRequest>({
      query: ({consultingID}) => ({
        url: EndpointNameConsulting.CONSULTING + consultingID,
        method: 'DELETE',
      }),
      invalidatesTags: [RTKTagNames.CONSULTING],
    }),
  }),
})

export const {
  useLazyGetConsultingsQuery,
  useGetConsultingQuery,
  useCreateConsultingMutation,
  useUpdateConsultingMutation,
  useDeleteConsultingMutation,
} = ConsultingExtendedEndpoints
