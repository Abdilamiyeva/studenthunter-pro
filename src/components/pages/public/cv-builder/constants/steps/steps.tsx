import {PlusIcon, UploadIcon} from '@/icons'
import {Step} from './types'

export const STEPS: Step[] = [
  {
    Icon: PlusIcon,
    name: 'Create New Resume',
    description: 'Choose a blank template and fill in the fields yourself',
    value: 'build',
  },
  {
    Icon: UploadIcon,
    name: 'Upload Resume',
    description: 'Upload existing resume in DOC. DOCX or PDF formats (10MB max)',
    value: 'upload',
  },
]
