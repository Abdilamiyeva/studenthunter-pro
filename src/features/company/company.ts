import {EndpointNameCompany} from '@/constants/endpoints'
import {baseApi} from '..'
import {
  CreateCompanyRequest,
  CreateCompanyResponse,
  DeleteCompanyRequest,
  DeleteCompanyResponse,
  GetCompaniesRequest,
  GetCompaniesResponse,
  GetCompantApplicantsRequest,
  GetCompantApplicantsResponse,
  GetCompanyRequest,
  GetCompanyResponse,
  GetPublicCompanyRequset,
  GetPublicCompanyResponse,
  ManageCompanyAppliedApplicantRequest,
  ManageCompanyAppliedApplicantResponse,
  SaveCompanyRequest,
  SaveCompanyResponse,
  UnsaveCompanyRequest,
  UnsaveCompanyResponse,
  UpdateCompanyRequest,
  UpdateCompanyResponse,
} from './types'
import {RTKTagNames} from '@/constants/rtk-tag-names'

export const BlogsExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getCompanies: build.query<GetCompaniesResponse, GetCompaniesRequest>({
      query: params => ({
        url: EndpointNameCompany.GET_COMPANIES,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.COMPANY],
    }),

    getPublicCompany: build.query<GetPublicCompanyResponse, GetPublicCompanyRequset>({
      query: ({id}) => ({
        url: EndpointNameCompany.GET_PUBLIC_COMPANY + id,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.COMPANY],
    }),

    getCompany: build.query<GetCompanyResponse, GetCompanyRequest>({
      query: ({companyID}) => ({
        url: EndpointNameCompany.COMPANY + companyID,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.COMPANY],
    }),

    createCompany: build.mutation<CreateCompanyResponse, CreateCompanyRequest>({
      query: body => ({
        url: EndpointNameCompany.CREATE_COMPANY,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.COMPANY],
    }),

    updateCompany: build.mutation<UpdateCompanyResponse, UpdateCompanyRequest>({
      query: ({companyID, body}) => ({
        url: EndpointNameCompany.COMPANY + companyID,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.COMPANY],
    }),

    deleteCompany: build.mutation<DeleteCompanyResponse, DeleteCompanyRequest>({
      query: ({companyID}) => ({
        url: EndpointNameCompany.COMPANY + companyID,
        method: 'DELETE',
      }),
      invalidatesTags: [RTKTagNames.COMPANY],
    }),

    manageCompanyAppliedApplicant: build.mutation<
      ManageCompanyAppliedApplicantResponse,
      ManageCompanyAppliedApplicantRequest
    >({
      query: body => ({
        url: EndpointNameCompany.MANAGE_USER,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.COMPANY],
    }),

    getCompanyApplicants: build.query<GetCompantApplicantsResponse, GetCompantApplicantsRequest>({
      query: params => ({
        url: EndpointNameCompany.GET_COMPANY_USERS,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.COMPANY],
    }),

    saveCompany: build.mutation<SaveCompanyResponse, SaveCompanyRequest>({
      query: body => ({
        url: EndpointNameCompany.SAVE_COMPANY,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.COMPANY],
    }),

    unsaveCompany: build.mutation<UnsaveCompanyResponse, UnsaveCompanyRequest>({
      query: body => ({
        url: EndpointNameCompany.UNSAVE_COMPANY,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.COMPANY],
    }),
  }),
})

export const {
  useGetPublicCompanyQuery,
  useLazyGetCompaniesQuery,
  useGetCompanyQuery,
  useCreateCompanyMutation,
  useUpdateCompanyMutation,
  useDeleteCompanyMutation,
  useManageCompanyAppliedApplicantMutation,
  useGetCompanyApplicantsQuery,
  useSaveCompanyMutation,
  useUnsaveCompanyMutation,
} = BlogsExtendedEndpoints
