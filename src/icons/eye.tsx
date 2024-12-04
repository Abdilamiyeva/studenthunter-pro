import {Icon} from '@/components/common/icon/icon'
import {IconProps} from '@/components/common/icon/types'

export const EyeIcon = (props: IconProps) => (
  <Icon {...props} viewBox="0 0 25 25">
    <path
      d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
)
