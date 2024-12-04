import {CAIcon, CNIcon, SEIcon, UKIcon, USIcon, UZIcon} from '@/icons/flags'

export const getCountryIcon = (countryShortName: string, iconClassName?: string) => {
  let Icon = ({className}: {className?: string}) => <span className={className}></span>

  switch (countryShortName) {
    case 'ca':
      Icon = CAIcon
      break
    case 'cn':
      Icon = CNIcon
      break
    case 'se':
      Icon = SEIcon
      break
    case 'uk':
      Icon = UKIcon
      break
    case 'us':
      Icon = USIcon
      break
    case 'uz':
      Icon = UZIcon
      break
  }

  return <Icon className={iconClassName} />
}
