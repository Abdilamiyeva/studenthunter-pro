import {Icon} from '@/components/common'
import {IconProps} from '@/components/common/icon/types'

export const CAIcon = ({...props}: IconProps) => (
  <Icon {...props} viewBox="0 0 24 18">
    <rect
      x="0.25"
      y="0.678589"
      width="23.5"
      height="16.6429"
      rx="1.75"
      fill="white"
      stroke="#F5F5F5"
      strokeWidth="0.5"
    />
    <mask
      id="mask0_464_3645"
      style={{maskType: 'luminance'}}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="18"
    >
      <rect
        x="0.25"
        y="0.678589"
        width="23.5"
        height="16.6429"
        rx="1.75"
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
    </mask>
    <g mask="url(#mask0_464_3645)">
      <rect x="17.1426" y="0.428589" width="6.85714" height="17.1429" fill="#FF3131" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 17.5714H6.85714V0.428589H0V17.5714Z" fill="#FF3131" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9213 8.22153C13.6881 8.45473 13.2941 8.24385 13.3588 7.92045L13.7143 6.14286L12.5714 6.71429L12 5L11.4286 6.71429L10.2857 6.14286L10.6412 7.92045C10.7059 8.24385 10.3119 8.45473 10.0787 8.22153L9.94999 8.09284C9.81981 7.96267 9.60876 7.96267 9.47858 8.09284L9.14286 8.42857L8 7.85714L8.57143 9L8.2357 9.33573C8.10553 9.4659 8.10553 9.67696 8.2357 9.80713L9.71429 11.2857H11.4286L11.7143 13H12.2857L12.5714 11.2857H14.2857L15.7643 9.80713C15.8945 9.67696 15.8945 9.4659 15.7643 9.33573L15.4286 9L16 7.85714L14.8571 8.42857L14.5214 8.09284C14.3912 7.96267 14.1802 7.96267 14.05 8.09284L13.9213 8.22153Z"
        fill="#FF3131"
      />
    </g>
  </Icon>
)
