import {EndpointNameSkill} from '@/constants/endpoints'
import {baseApi} from '..'

import {RTKTagNames} from '@/constants/rtk-tag-names'
import {
  CreateSkillCategoryRequest,
  CreateSkillCategoryResponse,
  CreateSkillRequest,
  CreateSkillResponse,
  DeleteSkillCategoryRequest,
  DeleteSkillCategoryResponse,
  DeleteSkillRequest,
  DeleteSkillResponse,
  GetPublicSkillsRequest,
  GetPublicSkillsResponse,
  GetSkillCategoriesRequest,
  GetSkillCategoriesResponse,
  GetSkillDetailsRequest,
  GetSkillDetailsResponse,
  GetSkillsFilterListRequest,
  GetSkillsFilterListResponse,
  GetSkillsRequest,
  GetSkillsResponse,
  UpdateSkillBuyingCountRequest,
  UpdateSkillBuyingCountResponse,
  UpdateSkillRequest,
  UpdateSkillResponse,
} from './types'

export const JobsExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getPublicSkills: build.query<GetPublicSkillsResponse, GetPublicSkillsRequest>({
      query: params => ({
        url: EndpointNameSkill.GET_PUBLIC_SKILLS,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.SKILL],
    }),

    getSkills: build.query<GetSkillsResponse, GetSkillsRequest>({
      query: params => ({
        url: EndpointNameSkill.GET_SKILLS,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.SKILL],
    }),

    getSkillsFilterList: build.query<GetSkillsFilterListResponse, GetSkillsFilterListRequest>({
      query: params => ({
        url: EndpointNameSkill.GET_SKILLS_FILTER_LIST,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.SKILL],
    }),

    getSkillDetails: build.query<GetSkillDetailsResponse, GetSkillDetailsRequest>({
      query: ({skillID}) => ({
        url: EndpointNameSkill.GET_SKILL_DETAILS + skillID,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.SKILL],
    }),

    getSkillCategories: build.query<GetSkillCategoriesResponse, GetSkillCategoriesRequest>({
      query: params => ({
        url: EndpointNameSkill.GET_SKILL_CATEGORIES,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.SKILL],
    }),

    deleteSkill: build.mutation<DeleteSkillResponse, DeleteSkillRequest>({
      query: ({skillID}) => ({
        url: EndpointNameSkill.DELETE_SKILL + skillID,
        method: 'DELETE',
      }),
      invalidatesTags: [RTKTagNames.SKILL],
    }),

    createSkill: build.mutation<CreateSkillResponse, CreateSkillRequest>({
      query: body => ({
        url: EndpointNameSkill.CREATE_SKILL,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.SKILL],
    }),

    updateSkill: build.mutation<UpdateSkillResponse, UpdateSkillRequest>({
      query: ({skillID, body}) => ({
        url: EndpointNameSkill.UPDATE_SKILL + skillID,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.SKILL],
    }),

    updateSkillBuyingCount: build.mutation<UpdateSkillBuyingCountResponse, UpdateSkillBuyingCountRequest>({
      query: params => ({
        url: EndpointNameSkill.UPDATE_SKILL_BUYING_COUNT,
        method: 'PUT',
        params,
      }),
      invalidatesTags: [RTKTagNames.SKILL],
    }),

    createSkillCategory: build.mutation<CreateSkillCategoryResponse, CreateSkillCategoryRequest>({
      query: body => ({
        url: EndpointNameSkill.CREATE_SKILL_CATEGORY,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.SKILL],
    }),

    deleteSkillCategory: build.mutation<DeleteSkillCategoryResponse, DeleteSkillCategoryRequest>({
      query: ({categoryID}) => ({
        url: EndpointNameSkill.DELETE_SKILL_CATEGORY + categoryID,
        method: 'DELETE',
      }),
      invalidatesTags: [RTKTagNames.SKILL],
    }),
  }),
})

export const {
  useGetPublicSkillsQuery,
  useLazyGetSkillsQuery,
  useGetSkillDetailsQuery,
  useCreateSkillMutation,
  useCreateSkillCategoryMutation,
  useGetSkillsFilterListQuery,
  useDeleteSkillMutation,
  useUpdateSkillMutation,
  useUpdateSkillBuyingCountMutation,
  useDeleteSkillCategoryMutation,
  useGetSkillCategoriesQuery,
} = JobsExtendedEndpoints
