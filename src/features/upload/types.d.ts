export interface UploadImageResponse {
  data: {
    success: boolean
    file_path: string
  }
}

export type UploadImageRequest = FormData

export interface UploadVideoResponse {
  data: {
    success: boolean
    file_path: string
  }
}

export type UploadVideoRequest = FormData

export interface UploadPDFResponse {
  data: {
    success: boolean
    file_path: string
  }
}

export type UploadPDFRequest = FormData
