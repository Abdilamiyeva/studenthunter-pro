import {Icon} from '@/components/common'
import {IconProps} from '@/components/common/icon/types'

export const SEIcon = ({...props}: IconProps) => (
  <Icon {...props} viewBox="0 0 24 18">
    <rect y="0.428589" width="24" height="17.1429" rx="2" fill="white" />
    <mask
      id="mask0_464_3783"
      style={{maskType: 'luminance'}}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="18"
    >
      <rect y="0.428589" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_464_3783)">
      <rect y="0.428589" width="24" height="17.1429" fill="#157CBB" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10.7143H6.85714V17.5714H10.2857V10.7143H24V7.28573H10.2857V0.428589H6.85714V7.28573H0V10.7143Z"
        fill="#FFD34D"
      />
    </g>
  </Icon>
)
