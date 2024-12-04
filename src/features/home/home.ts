import {EndpointNameHomePage, GetHomePageSearchRequset, GetHomePageSearchResponse} from '@/constants/endpoints'
import {baseApi} from '..'
import {GetHomePageRequset, GetHomePageResponse} from './types'
import {RTKTagNames} from '@/constants/rtk-tag-names'

export const homePageExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getHomePage: build.query<GetHomePageResponse, GetHomePageRequset>({
      query: () => ({
        url: EndpointNameHomePage.GET_HOME_PAGE,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.BLOGS],
    }),
    getHomeSerach: build.query<GetHomePageSearchResponse, GetHomePageSearchRequset>({
      query: params => ({
        url: EndpointNameHomePage.GET_HOME_PAGE_SEARCH,
        method: 'GET',
        params,
      }),
    }),
  }),
})

export const {useGetHomePageQuery, useLazyGetHomeSerachQuery} = homePageExtendedEndpoints
