import {ReactNode} from 'react'

export type Props = {
  htmlType?: 'submit' | 'button' | 'reset'
  variant?: 'outline' | 'default'
  theme?: 'orange' | 'white' | 'default'
  icon?: ReactNode
  loading?: boolean
  type?: 'submit' | 'button' | 'reset'
  className?: string
  children?: ReactNode
  noSpaceBetweenIcon?: boolean
  disabled?: boolean
  onClick?: (event: any) => void
}

export type ButtonColorClassNames = {
  bgColor?: 'bg-blue' | 'bg-orange'
  borderColor?: 'border-blue' | 'border-orange'
  textColor?: 'text-white' | 'text-orange'
  bgColorFillOnHover?:
    | 'bg-blue-7 hover:bg-blue hover:text-white text-blue border-blue-4 hover:border-blue'
    | 'hover:bg-orange hover:text-white hover:border-orange'
  bgColorBlurOnHover?: 'bg-blue' | 'hover:bg-orange/0'
  borderColorOnHover?: 'hover:bg-blue/90 hover:border-blue/0' | 'hover:bg-orange/90 hover:border-orange/0'
}
