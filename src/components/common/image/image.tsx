/* eslint-disable unicorn/no-null */
import {LazyLoadImage} from 'react-lazy-load-image-component'
import {Props} from './types'
import 'react-lazy-load-image-component/src/effects/blur.css'
import {cn} from '@/lib/utils'

const CustomLoader = ({src}: {src: string}) => <img src={src} alt="Loading..." style={{filter: 'blur(20px)'}} />

export const Image = ({src, alt, className, imageClassName, defaultImageSrc}: Props) => {
  const imageErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const el = e.target as HTMLImageElement
    el.onerror = null
    el.src = defaultImageSrc || '/images/placeholder.jpg'
  }
  return (
    <LazyLoadImage
      wrapperClassName={cn('max-w-max max-h-max', className)}
      className={cn('object-cover', imageClassName)}
      src={src}
      alt={alt}
      effect="blur"
      placeholder={<CustomLoader src={src} />}
      crossOrigin="anonymous"
      onError={imageErrorHandler}
    />
  )
}
