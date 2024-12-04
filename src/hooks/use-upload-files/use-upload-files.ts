import {acceptedImageFormats, acceptedPDFFormats, acceptedVideoFormats} from '@/constants/accepted-image-formats'
import {useUploadImageMutation, useUploadPDFMutation, useUploadVideoMutation} from '@/features/upload/upload'
import {asyncForEach} from '@/utils/async-for-each'
import {useHandleRequest} from '../use-handle-request'
import {useHandleError} from '../use-handle-error'
import {UploadImageResponse, UploadPDFResponse, UploadVideoResponse} from '@/features/upload/types'

export const useUploadFiles = () => {
  const [uploadImage, {isLoading: isUploadingImage}] = useUploadImageMutation()
  const [uploadVideo, {isLoading: isUploadingVideo}] = useUploadVideoMutation()
  const [uploadPDF, {isLoading: isUploadingPDF}] = useUploadPDFMutation()
  const handleRequest = useHandleRequest()
  const handleError = useHandleError()

  return [
    async (files: File[]) => {
      const filePaths: string[] = []

      await asyncForEach(files, async (file: File) => {
        if (acceptedImageFormats.includes(file.type)) {
          const formData = new FormData()
          formData.append('image', file)

          await handleRequest({
            request: async () => {
              const result = await uploadImage(formData)
              return result
            },
            onSuccess: (response: UploadImageResponse) => {
              if (response.data) {
                filePaths.push(response.data.file_path)
              }
            },
          })
        } else if (acceptedVideoFormats.includes(file.type)) {
          const formData = new FormData()
          formData.append('video', file)

          await handleRequest({
            request: async () => {
              const result = await uploadVideo(formData)
              return result
            },
            onSuccess: (response: UploadVideoResponse) => {
              if (response.data) {
                filePaths.push(response.data.file_path)
              }
            },
          })
        } else if (acceptedPDFFormats.includes(file.type)) {
          const formData = new FormData()
          formData.append('pdf', file)

          await handleRequest({
            request: async () => {
              const result = await uploadPDF(formData)
              return result
            },
            onSuccess: (response: UploadPDFResponse) => {
              if (response.data) {
                filePaths.push(response.data.file_path)
              }
            },
          })
        } else {
          handleError(`${file.name} has unsupported format!`)
        }
      })
      return filePaths
    },
    isUploadingImage || isUploadingVideo || isUploadingPDF,
  ] as [(files: File[]) => Promise<string[]>, boolean]
}
