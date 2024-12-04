import {Icon} from '@/components/common'
import {IconProps} from '@/components/common/icon/types'

export const InBoxIcon = (props: IconProps) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <path
      d="M0.625 5.625V4.625C0.625 3.79657 1.29657 3.125 2.125 3.125H17.875C18.7034 3.125 19.375 3.79657 19.375 4.625V5.625M0.625 5.625L8.40878 10.2953M0.625 5.625V15M19.375 5.625L11.5912 10.2953M19.375 5.625V15M11.5912 10.2953L10 11.25L8.40878 10.2953M11.5912 10.2953L19.375 15M19.375 15V15.375C19.375 16.2034 18.7034 16.875 17.875 16.875H2.125C1.29657 16.875 0.625 16.2034 0.625 15.375V15M8.40878 10.2953L0.625 15"
      stroke="currentColor"
      fill="transparent"
    />
  </Icon>
)
