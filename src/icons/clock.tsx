import {Icon} from '@/components/common'
import {IconProps} from '@/components/common/icon/types'

export const ClockIcon = ({...props}: IconProps) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 3C7.77614 3 8 3.22386 8 3.5V8.70984L11.2481 10.5659C11.4878 10.7029 11.5711 11.0083 11.4341 11.2481C11.2971 11.4878 10.9917 11.5711 10.7519 11.4341L7.25193 9.43412C7.09614 9.3451 7 9.17943 7 9V3.5C7 3.22386 7.22386 3 7.5 3Z"
      fill="currentColor"
    />
  </Icon>
)
