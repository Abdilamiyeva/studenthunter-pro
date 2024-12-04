import {useMemo} from 'react'
import {ButtonColorClassNames, Props} from './types'
import {cn} from '@/lib/utils'
import {Spinner} from '..'

export const Button = ({
  children,
  icon,
  loading,
  variant,
  theme,
  className,
  disabled,
  noSpaceBetweenIcon,
  htmlType = 'button',
  onClick = () => {},
}: Props) => {
  const themeColors = useMemo(() => {
    const colors: ButtonColorClassNames = {}

    switch (theme) {
      case 'orange':
        colors.bgColor = 'bg-orange'
        colors.borderColor = 'border-orange'
        colors.textColor = 'text-orange'
        colors.bgColorFillOnHover = 'hover:bg-orange hover:text-white hover:border-orange'
        colors.bgColorBlurOnHover = 'hover:bg-orange/0'
        colors.borderColorOnHover = 'hover:bg-orange/90 hover:border-orange/0'
        break
      default:
        colors.bgColor = 'bg-blue'
        colors.borderColor = 'border-blue'
        colors.textColor = 'text-white'
        colors.bgColorFillOnHover = 'bg-blue-7 hover:bg-blue hover:text-white text-blue border-blue-4 hover:border-blue'
        colors.bgColorBlurOnHover = 'bg-blue'
        colors.borderColorOnHover = 'hover:bg-blue/90 hover:border-blue/0'
    }

    return colors
  }, [theme])

  const variantClassNames = useMemo(() => {
    switch (variant) {
      case 'outline':
        return `${themeColors.borderColor} ${themeColors.textColor} ${themeColors.bgColorFillOnHover} ${themeColors.borderColorOnHover} bg-transparent`
      default:
        return `text-white ${themeColors.bgColor} ${themeColors.borderColor} ${themeColors.bgColorBlurOnHover} ${themeColors.borderColorOnHover}`
    }
  }, [variant, themeColors])

  const spinnerClassNames = useMemo(() => {
    switch (variant) {
      case 'outline':
        return `bg-white ${themeColors.borderColor}`
      default:
        return `!border-white ${themeColors.bgColor}`
    }
  }, [variant, themeColors])

  return (
    <button
      type={htmlType}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(
        'group relative min-w-max border rounded-lg font-semibold leading-1 tracking-wide duration-default flex items-center justify-center overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed',
        loading && 'opacity-50 cursor-not-allowed',
        variantClassNames,
        'text-base px-7 py-2.5',
        className,
      )}
    >
      {loading && (
        <span
          className={`absolute top-0 left-0 w-full h-full grid place-content-center duration-default ${spinnerClassNames}`}
        >
          <Spinner className="border-inherit" />
        </span>
      )}
      {icon}
      {icon && !noSpaceBetweenIcon ? <span>&nbsp;&nbsp;</span> : ''}
      {children}
    </button>
  )
}
