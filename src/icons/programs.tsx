import {Icon} from '@/components/common'
import {IconProps} from '@/components/common/icon/types'

export const ProgramsIcon = ({...props}: IconProps) => (
  <Icon {...props} viewBox="0 0 20 20">
    <g>
      <path
        d="M3.33333 9.44572L0 7.5013L10 1.66797L20 7.5013V14.5846L18.75 14.5846V8.12671L16.6667 9.44572V15.0107L16.4812 15.24C14.9547 17.1262 12.6182 18.3346 10 18.3346C7.38181 18.3346 5.04524 17.1262 3.51886 15.24L3.33333 15.0107V9.44572ZM4.375 10.0017V14.3767C6.25 16.2517 8.00927 16.8767 10 16.8767C11.9908 16.8767 13.125 16.8767 15.625 14.3767V10.0017L10 13.3346L4.375 10.0017ZM2.5 7.5013L10 11.8767L17.5 7.5013L10 3.12671L2.5 7.5013Z"
        fill="currentColor"
      />
    </g>
  </Icon>
)
