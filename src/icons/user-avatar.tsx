import {Icon} from '@/components/common'
import {IconProps} from '@/components/common/icon/types'

export const UserAvatar = (props: IconProps) => (
  <Icon viewBox="0 0 44 44" {...props}>
    <path
      d="M36 18C36 27.9411 27.9411 36 18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18Z"
      fill="#ECEEF2"
    />
    <path
      d="M31.0909 30.0841C29.491 27.5068 25.2202 24.75 18.0306 24.75C10.841 24.75 6.509 27.5068 4.90909 30.0841C7.79532 33.6903 13.0523 36 18.0306 36C23.0089 36 28.2047 33.6903 31.0909 30.0841Z"
      fill="#77859C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.0306 22.5C21.7585 22.5 24.7806 19.4779 24.7806 15.75C24.7806 12.0221 21.7585 9 18.0306 9C14.3026 9 11.2806 12.0221 11.2806 15.75C11.2806 19.4779 14.3026 22.5 18.0306 22.5Z"
      fill="#77859C"
    />
  </Icon>
)
