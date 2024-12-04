import {SERVER_URL} from '@/constants/server-url'

export const getFile = (file: string) => {
  if (!file) {
    return ''
  }
  return `${SERVER_URL}/uploads/pdfs/${file}`
}
