import {Icon} from '@/components/common'
import {IconProps} from '@/components/common/icon/types'

export const CNIcon = ({...props}: IconProps) => (
  <Icon {...props} viewBox="0 0 24 18">
    <rect y="0.428589" width="24" height="17.1429" rx="2" fill="white" />
    <mask
      id="mask0_464_3800"
      style={{maskType: 'luminance'}}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="18"
    >
      <rect y="0.428589" width="24" height="17.1429" rx="2" fill="white" />
    </mask>
    <g mask="url(#mask0_464_3800)">
      <rect y="0.428589" width="24" height="17.1429" fill="#F1361D" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.63281 3.08634L9.46291 3.22786L10.0855 3.79485L10.227 2.96476L10.794 2.34218L9.9639 2.20066L9.34133 1.63367L9.19981 2.46376L8.63281 3.08634ZM10.8563 5.98972L11.5756 5.55193L12.4174 5.5714L11.9796 4.85208L11.9991 4.01023L11.2798 4.44802L10.4379 4.42855L10.8757 5.14787L10.8563 5.98972ZM9.88047 10.6893L9.17687 11.1519L9.16695 10.3099L8.70432 9.60629L9.54634 9.59637L10.2499 9.13375L10.2599 9.97576L10.7225 10.6794L9.88047 10.6893ZM10.4915 8.51263L11.3285 8.41986L12.0832 8.79329L11.9904 7.95634L12.3639 7.2016L11.5269 7.29437L10.7722 6.92094L10.8649 7.75789L10.4915 8.51263Z"
        fill="#FFDC42"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.71373 7.48007L3.69846 8.9167L4.44203 6.55613L2.45296 5.08344L4.92777 5.06116L5.71373 2.71436L6.49968 5.06116L8.97449 5.08344L6.98543 6.55613L7.72899 8.9167L5.71373 7.48007Z"
        fill="#FFDC42"
      />
    </g>
  </Icon>
)
