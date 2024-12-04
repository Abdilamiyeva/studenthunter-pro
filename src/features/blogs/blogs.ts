import {EndpointNameBlogs} from '@/constants/endpoints'
import {baseApi} from '..'
import {
  GetBlogsResponse,
  GetBlogsRequset,
  GetBlogRequset,
  GetBlogResponse,
  GetAddBlogResponse,
  GetAddBlogRequset,
  GetDeleteBlogResponse,
  GetDeleteBlogRequset,
  GetArachiveBlogResponse,
  GetArachiveBlogRequset,
  GetUpdateBlogResponse,
  GetUpdateBlogRequset,
} from './types'
import {RTKTagNames} from '@/constants/rtk-tag-names'

export const BlogsExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    getBlogs: build.query<GetBlogsResponse, GetBlogsRequset>({
      query: params => ({
        url: EndpointNameBlogs.GET_BLOGS,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.BLOGS],
    }),

    getBlog: build.query<GetBlogResponse, GetBlogRequset>({
      query: ({id}) => ({
        url: EndpointNameBlogs.GET_BLOG + id,
        method: 'GET',
      }),
    }),
    createBlog: build.mutation<GetAddBlogResponse, GetAddBlogRequset>({
      query: ({body}) => ({
        url: EndpointNameBlogs.CREATE_BLOG,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagNames.BLOGS],
    }),
    deleteBlog: build.mutation<GetDeleteBlogResponse, GetDeleteBlogRequset>({
      query: ({id}) => ({
        url: EndpointNameBlogs.DELETE_BLOG + id,
        method: 'DELETE',
      }),
      invalidatesTags: [RTKTagNames.BLOGS],
    }),
    archiveBlog: build.mutation<GetArachiveBlogResponse, GetArachiveBlogRequset>({
      query: ({id, params}) => ({
        url: EndpointNameBlogs.CHANGE_BLOG_STATUS + id,
        method: 'PUT',
        params,
      }),
      invalidatesTags: [RTKTagNames.BLOGS],
    }),
    updateBlog: build.mutation<GetUpdateBlogResponse, GetUpdateBlogRequset>({
      query: ({id, body}) => ({
        url: EndpointNameBlogs.UPDATE_BLOG + id,
        method: 'PUT',
        body,
      }),
      invalidatesTags: [RTKTagNames.BLOGS],
    }),
  }),
})

export const {
  useGetBlogsQuery,
  useGetBlogQuery,
  useCreateBlogMutation,
  useDeleteBlogMutation,
  useArchiveBlogMutation,
  useUpdateBlogMutation,
} = BlogsExtendedEndpoints
