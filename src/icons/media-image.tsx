import {Icon} from '@/components/common'
import {IconProps} from '@/components/common/icon/types'

export const MediaImageIcon = (props: IconProps) => (
  <Icon {...props} viewBox="0 0 26 26">
    <path
      d="M4 8C4 5.79086 5.79086 4 8 4H22C24.2091 4 26 5.79086 26 8V15V22C26 24.2091 24.2091 26 22 26H8C5.79086 26 4 24.2091 4 22V8Z"
      fill="currentColor"
    />
    <rect x="1" y="1" width="22" height="22" rx="4" fill="currentColor" stroke="#26323824" strokeWidth="2" />
  </Icon>
)
