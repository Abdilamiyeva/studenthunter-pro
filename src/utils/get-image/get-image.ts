import {acceptedImageFormats} from '@/constants/accepted-image-formats'
import {SERVER_URL} from '@/constants/server-url'

export const getImageURL = (fileName?: string, folderName?: 'images' | 'pdfs' | 'videos') => {
  if (!fileName) {
    return ''
  }

  return `${SERVER_URL}/uploads/${folderName || 'images'}/${fileName}`
}

export const getFindImage = (img = []) => {
  const isValidArray = Array.isArray(img) && img.length > 0

  if (isValidArray) {
    const allowedFormats = ['jpeg', 'png', 'jpg', 'gif', 'avif', 'svg', 'bin']

    const filteredFiles = img?.filter((file: string) => {
      const lowerCaseFile = file?.toLowerCase()
      return allowedFormats.some(format => lowerCaseFile?.endsWith('.' + format))
    })

    return filteredFiles.length > 0 ? filteredFiles[0] : ''
  }

  return ''
}
export const findImageURL = (media: string[]) =>
  media.find(m => acceptedImageFormats.includes(m.split('.')[m.split('.').length - 1]))
