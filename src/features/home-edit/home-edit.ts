import {EndpointNameHomePage} from '@/constants/endpoints'
import {baseApi} from '..'
import {RTKTagNames} from '@/constants/rtk-tag-names'
import {
  CreateFAQsRequest,
  CreateFAQsResponse,
  CreateFeedbackRequest,
  CreateFeedbackResponse,
  CreateInstagramHighlightRequest,
  CreateInstagramHighlightResponse,
  DeleteFAQsRequest,
  DeleteFAQsResponse,
  DeleteFeedbackRequest,
  DeleteFeedbackResponse,
  DeleteInstagramHighlightResponse,
  DeleteInstragramHightlightRequest,
  GetHomeFAQsRequest,
  GetHomeFAQsResponse,
  GetHomeFeedbacksRequest,
  GetHomeFeedbacksResponse,
  GetHomePageRequest,
  GetHomePageResponse,
  GetInstagramHighlightsRequest,
  GetInstagramHighlightsResponse,
  UpdateFAQsRequest,
  UpdateFAQsResponse,
  UpdateFeedbackRequest,
  UpdateFeedbackResponse,
  UpdateHomeUniversitiesRequest,
  UpdateHomeUniversitiesResponse,
  UpdateHomeVacanciesRepsonse,
  UpdateHomeVacanciesRequest,
  UpdateInstagramHighlightRequest,
  UpdateInstagramHighlightResponse,
} from './types'

export const HomeEditExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getHomePage: build.query<GetHomePageResponse, GetHomePageRequest>({
      query: () => ({
        url: EndpointNameHomePage.GET_HOME_PAGE,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.HOME_PAGE],
    }),

    updateHomeUniversities: build.mutation<UpdateHomeUniversitiesResponse, UpdateHomeUniversitiesRequest>({
      query: body => ({
        url: EndpointNameHomePage.UPDATE_UNIVERSITIES,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.HOME_PAGE],
    }),

    updateHomeVacancies: build.mutation<UpdateHomeVacanciesRepsonse, UpdateHomeVacanciesRequest>({
      query: body => ({
        url: EndpointNameHomePage.UPDATE_VACANCIES,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.HOME_PAGE],
    }),

    getFeedbacks: build.query<GetHomeFeedbacksResponse, GetHomeFeedbacksRequest>({
      query: params => ({
        url: EndpointNameHomePage.GET_FEEDBACKS,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.FEEDBACKS, RTKTagNames.HOME_PAGE],
    }),

    createFeedback: build.mutation<CreateFeedbackResponse, CreateFeedbackRequest>({
      query: body => ({
        url: EndpointNameHomePage.CREATE_FEEDBACK,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.FEEDBACKS, RTKTagNames.HOME_PAGE],
    }),

    updateFeedback: build.mutation<UpdateFeedbackResponse, UpdateFeedbackRequest>({
      query: ({feedbackID, body}) => ({
        url: EndpointNameHomePage.UPDATE_FEEDBACK + feedbackID,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.FEEDBACKS, RTKTagNames.HOME_PAGE],
    }),

    deleteFeedback: build.mutation<DeleteFeedbackResponse, DeleteFeedbackRequest>({
      query: ({feedbackID}) => ({
        url: EndpointNameHomePage.DELETE_FEEDBACK + feedbackID,
        method: 'DELETE',
      }),
      invalidatesTags: [RTKTagNames.FEEDBACKS, RTKTagNames.HOME_PAGE],
    }),

    getFAQs: build.query<GetHomeFAQsResponse, GetHomeFAQsRequest>({
      query: () => ({
        url: EndpointNameHomePage.GET_FAQS,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.FAQS, RTKTagNames.HOME_PAGE],
    }),

    createFAQ: build.mutation<CreateFAQsResponse, CreateFAQsRequest>({
      query: body => ({
        url: EndpointNameHomePage.CREATE_FAQ,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.FAQS, RTKTagNames.HOME_PAGE],
    }),

    updateFAQ: build.mutation<UpdateFAQsResponse, UpdateFAQsRequest>({
      query: ({faqID, body}) => ({
        url: EndpointNameHomePage.UPDATE_FAQ + faqID,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.FAQS, RTKTagNames.HOME_PAGE],
    }),

    deleteFAQ: build.mutation<DeleteFAQsResponse, DeleteFAQsRequest>({
      query: ({faqID}) => ({
        url: EndpointNameHomePage.DELETE_FAQ + faqID,
        method: 'DELETE',
      }),
      invalidatesTags: [RTKTagNames.FAQS, RTKTagNames.HOME_PAGE],
    }),

    getHighlights: build.query<GetInstagramHighlightsResponse, GetInstagramHighlightsRequest>({
      query: () => ({
        url: EndpointNameHomePage.GET_HIGHLIGHTS,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.HIGHLIGHTS, RTKTagNames.HOME_PAGE],
    }),

    createHighlight: build.mutation<CreateInstagramHighlightResponse, CreateInstagramHighlightRequest>({
      query: body => ({
        url: EndpointNameHomePage.CREATE_HIGHLIGHT,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.HIGHLIGHTS, RTKTagNames.HOME_PAGE],
    }),

    updateHighlight: build.mutation<UpdateInstagramHighlightResponse, UpdateInstagramHighlightRequest>({
      query: ({highlightID, body}) => ({
        url: EndpointNameHomePage.UPDATE_HIGHLIGHT + highlightID,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.HIGHLIGHTS, RTKTagNames.HOME_PAGE],
    }),

    deleteHighlight: build.mutation<DeleteInstagramHighlightResponse, DeleteInstragramHightlightRequest>({
      query: ({highlightID}) => ({
        url: EndpointNameHomePage.DELETE_HIGHLIGHT + highlightID,
        method: 'DELETE',
      }),
      invalidatesTags: [RTKTagNames.HIGHLIGHTS, RTKTagNames.HOME_PAGE],
    }),
  }),
})

export const {
  useGetHomePageQuery,
  useUpdateHomeUniversitiesMutation,
  useUpdateHomeVacanciesMutation,
  useGetFeedbacksQuery,
  useCreateFeedbackMutation,
  useUpdateFeedbackMutation,
  useDeleteFeedbackMutation,
  useGetFAQsQuery,
  useCreateFAQMutation,
  useUpdateFAQMutation,
  useDeleteFAQMutation,
  useGetHighlightsQuery,
  useCreateHighlightMutation,
  useUpdateHighlightMutation,
  useDeleteHighlightMutation,
} = HomeEditExtendedEndpoints
