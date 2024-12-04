import {EndpointNameUpload} from '@/constants/endpoints'
import {baseApi} from '..'
import {
  UploadImageRequest,
  UploadImageResponse,
  UploadPDFRequest,
  UploadPDFResponse,
  UploadVideoRequest,
  UploadVideoResponse,
} from './types'

export const UniversityExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    uploadImage: build.mutation<UploadImageResponse, UploadImageRequest>({
      query: body => ({
        url: EndpointNameUpload.UPLOAD_IMAGE,
        method: 'POST',
        body,
      }),
    }),

    uploadVideo: build.mutation<UploadVideoResponse, UploadVideoRequest>({
      query: body => ({
        url: EndpointNameUpload.UPLOAD_VIDEO,
        method: 'POST',
        body,
      }),
    }),

    uploadPDF: build.mutation<UploadPDFResponse, UploadPDFRequest>({
      query: body => ({
        url: EndpointNameUpload.UPLOAD_PDF,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {useUploadImageMutation, useUploadVideoMutation, useUploadPDFMutation} = UniversityExtendedEndpoints
