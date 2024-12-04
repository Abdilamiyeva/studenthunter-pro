import {Icon} from '@/components/common'
import {IconProps} from '@/components/common/icon/types'

export const UKIcon = ({...props}: IconProps) => (
  <Icon {...props} viewBox="0 0 24 18">
    <rect y="0.428589" width="24" height="17.1429" rx="2" fill="white" />
    <mask
      id="mask0_464_3632"
      style={{maskType: 'luminance'}}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="18"
    >
      <rect y="0.428589" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_464_3632)">
      <rect y="0.428589" width="24" height="17.1429" fill="#0A17A7" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-1.0988 -1.21411L9.14332 5.69428V-0.7143H14.8576V5.69428L25.0997 -1.21411L26.3779 0.680833L18.2801 6.14284H24.0005V11.8571H18.2801L26.3779 17.3191L25.0997 19.2141L14.8576 12.3057V18.7143H9.14332V12.3057L-1.0988 19.2141L-2.37695 17.3191L5.72081 11.8571H0.00046134V6.14284H5.72081L-2.37695 0.680832L-1.0988 -1.21411Z"
        fill="white"
      />
      <path d="M16.002 5.85624L26.858 -1.28564" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round" />
      <path d="M17.1543 12.1693L26.8862 18.7289" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round" />
      <path d="M6.8621 5.83758L-3.28906 -1.00366" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round" />
      <path d="M7.9631 12.09L-3.28906 19.5519" stroke="#DB1F35" strokeWidth="0.666667" strokeLinecap="round" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10.7143H10.2857V17.5714H13.7143V10.7143H24V7.28573H13.7143V0.428589H10.2857V7.28573H0V10.7143Z"
        fill="#E6273E"
      />
    </g>
  </Icon>
)
