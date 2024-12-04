import {BlogStatus} from '@/constants/statusues'
import {Blog} from '@/types/blog'
import {DefaultSuccessResponse} from '@/types/defaults'

// GET BLOGS
export interface GetBlogsResponse extends DefaultSuccessResponse {
  data: Blog[]
}

export interface GetBlogsRequset {
  status: number
}

// GET BLOG
export interface GetBlogResponse extends DefaultSuccessResponse {
  data: Blog
}

export interface GetBlogRequset {
  id: string
}

export interface GetAddBlogResponse {}
export interface GetAddBlogRequset {
  body: {
    title_en: string
    title_ru: string
    title_uz: string
    text_en: string
    text_ru: string
    text_uz: string
    image: string
    tags: string[]
    status: number
  }
}

export interface GetDeleteBlogResponse {}
export interface GetDeleteBlogRequset {
  id: string
}

export interface GetArachiveBlogResponse {}
export interface GetArachiveBlogRequset {
  id: string
  params: {status: number}
}

export interface GetUpdateBlogResponse {}
export interface GetUpdateBlogRequset {
  id: string
  body: {
    title_en: string
    title_ru: string
    title_uz: string
    text_en: string
    text_ru: string
    text_uz: string
    image: string | any
    tags: string[]
    status?: number
  }
}
// CREATE BLOG

export interface CreateBlogResponse extends DefaultSuccessResponse {}

export interface CreateBlogRequest {
  title_en: string
  title_ru: string
  title_uz: string
  text_en: string
  text_ru: string
  text_uz: string
  image: string
  tags: string[]
  status: BlogStatus
}

// UPDATE BLOG
export interface UpdateBlogResponse extends DefaultSuccessResponse {}

export interface UpdateBlogRequestBody {
  title_en?: string
  title_ru?: string
  title_uz?: string
  text_en?: string
  text_ru?: string
  text_uz?: string
  tags?: string[]
  image?: string
}

export interface UpdateBlogRequest {
  blogID: string
  body: UpdateBlogRequestBody
}

// CHANGE BLOG
export interface ChangeBlogStatusResponse extends DefaultSuccessResponse {}

export interface ChangeBlogStatusRequest extends DefaultSuccessResponse {
  blogID: string
}

// DELETE BLOG
export interface DeleteBlogResponse extends DefaultSuccessResponse {}

export interface DeleteBlogRequest {
  blogID: string
}
