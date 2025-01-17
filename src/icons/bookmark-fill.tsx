import {Icon} from '@/components/common/icon'
import {IconProps} from '@/components/common/icon/types'

export const BookmarkFillIcon = (props: IconProps) => (
  <Icon {...props} viewBox="0 0 16 16">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2C2 0.895431 2.89543 0 4 0H12C13.1046 0 14 0.89543 14 2V15.5C14 15.6844 13.8985 15.8538 13.7359 15.9408C13.5733 16.0278 13.3761 16.0183 13.2226 15.916L8 13.1009L2.77735 15.916C2.62392 16.0183 2.42665 16.0278 2.26407 15.9408C2.10149 15.8538 2 15.6844 2 15.5V2ZM4 1C3.44772 1 3 1.44772 3 2V14.5657L7.72265 12.084C7.8906 11.972 8.1094 11.972 8.27735 12.084L13 14.5657V2C13 1.44772 12.5523 1 12 1H4Z"
      fill="currentColor"
    />
    <path d="M2.5 1H13.5V15L8 12L2.5 15V1Z" fill="currentColor" />
  </Icon>
)
