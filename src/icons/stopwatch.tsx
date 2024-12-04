import {Icon} from '@/components/common'
import {IconProps} from '@/components/common/icon/types'

export const StopwatchIcon = ({...props}: IconProps) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 0.5C6 0.223858 6.22386 0 6.5 0H9.5C9.77614 0 10 0.223858 10 0.5C10 0.776142 9.77614 1 9.5 1H9V2.07094C12.3925 2.55639 15 5.47347 15 9C15 12.866 11.866 16 8 16C4.13401 16 1 12.866 1 9C1 5.47347 3.60749 2.55639 7 2.07094V1H6.5C6.22386 1 6 0.776142 6 0.5ZM8 3C7.84443 3 7.69034 3.00591 7.53793 3.0175C4.44038 3.25314 2 5.84182 2 9C2 12.3137 4.68629 15 8 15C11.3137 15 14 12.3137 14 9C14 5.84182 11.5596 3.25314 8.46207 3.0175C8.30966 3.00591 8.15557 3 8 3ZM7.99999 5.09998C8.27613 5.09997 8.49999 5.32383 8.49999 5.59997L8.5 9C8.5 9.13261 8.44732 9.25978 8.35355 9.35355C8.25979 9.44732 8.13261 9.5 8 9.5H4.5C4.22386 9.5 4 9.27614 4 9C4 8.72386 4.22386 8.5 4.5 8.5H7.5L7.49999 5.59998C7.49999 5.32383 7.72384 5.09998 7.99999 5.09998Z"
      fill="currentColor"
    />
  </Icon>
)