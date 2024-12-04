/* eslint-disable unicorn/no-null */
import {Props} from './types'
import {cn} from '@/lib/utils'
import {
  BlogAvatarIcon,
  CompanyAvatarIcon,
  IndicatorIcon,
  ProgramAvatarIcon,
  SkillAvatar,
  UniversityAvatarIcon,
  VacancyAvatarIcon,
} from '@/icons'
import {useMemo, useState} from 'react'

export const Avatar = ({
  fullName = '',
  isOffline,
  src = '',
  className,
  showIndicator,
  imageClassName,
  baseClassName,
  type,
}: Props) => {
  const [isErrorImage, setIsErrorImage] = useState(false)

  const defaultAvatar = useMemo(() => {
    switch (type) {
      case 'university':
        return <UniversityAvatarIcon className=" w-[60px] h-[60px]" />
      case 'blog':
        return <BlogAvatarIcon className="  w-[60px] h-[60px]" />
      case 'company':
        return <CompanyAvatarIcon className="  w-[60px] h-[60px]" />
      case 'program':
        return <ProgramAvatarIcon className="  w-[60px] h-[60px]" />
      case 'skill':
        return <SkillAvatar className="  w-[60px] h-[60px]" />
      case 'vacancy':
        return <VacancyAvatarIcon className="  w-[60px] h-[60px]" />
    }
  }, [type])

  const handleImageError = (e: any) => {
    setIsErrorImage(true)
    e.target.style.display = 'none'
  }

  return (
    <div className={cn('w-12 h-12 relative', className)}>
      {!isOffline && showIndicator && <IndicatorIcon className="absolute -top-0.5 -right-0.5 w-4 h-4 text-green-2" />}
      {!isErrorImage ? (
        <img
          onError={handleImageError}
          className={cn('w-full h-full object-cover rounded-full', imageClassName)}
          src={src}
          alt={fullName}
        />
      ) : (
        <div className={cn('w-full h-full rounded-full flex items-center justify-center', baseClassName)}>
          {defaultAvatar || ''}
        </div>
      )}
    </div>
  )
}
