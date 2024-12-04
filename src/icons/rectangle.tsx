import {Icon} from '@/components/common'
import {IconProps} from '@/components/common/icon/types'

export const RectangleIcon = (props: IconProps) => (
  <Icon {...props} viewBox="0 0 18 18" fill="none">
    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" rx="9" fill="currentColor" />
    </svg>
  </Icon>
)
