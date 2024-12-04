import {Pagination, Autoplay, Navigation, EffectCoverflow} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Props} from './types'
import {cn} from '@/lib/utils'
import {useMemo, useRef} from 'react'
import {Swiper as SwiperType} from 'swiper/types'
import {ArrowLeft} from '@/icons/arrow-left'

export const SwiperCarousel = ({cards, className, type = 'default', wrapBtnsClassName}: Props) => {
  const swiperRef = useRef<SwiperType | null | any>(null)
  const handleNextSlide = () => {
    if (swiperRef?.current !== null && swiperRef?.current?.swiper) {
      swiperRef.current?.swiper?.slideNext()
    }
  }

  const handlePrevSlide = () => {
    if (swiperRef?.current !== null && swiperRef?.current?.swiper) {
      swiperRef?.current?.swiper?.slidePrev()
    }
  }

  const coverflowEffect = useMemo(() => {
    switch (type) {
      case 'coverflow':
        return {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }
      case 'default':
        return {}
    }
  }, [type])

  const modules = useMemo(() => {
    switch (type) {
      case 'coverflow':
        return [EffectCoverflow, Pagination, Navigation]
      case 'default':
        return [Pagination, Autoplay, Navigation]
    }
  }, [type])

  return (
    <Swiper
      effect={type === 'coverflow' ? 'coverflow' : undefined}
      ref={swiperRef}
      slidesPerView={type === 'coverflow' ? 3 : 4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      loop={type === 'default'}
      centeredSlides={type === 'coverflow'}
      coverflowEffect={coverflowEffect}
      modules={modules}
      className={cn('my-4 !pb-40 pt-10', className)}
      initialSlide={type === 'coverflow' ? 1 : undefined}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>{card.card}</SwiperSlide>
      ))}
      <div className={cn('w-full absolute bottom-0 flex justify-between px-4 pt-72', wrapBtnsClassName)}>
        <button
          onClick={handlePrevSlide}
          className="hidden z-50 md:flex cursor-pointer bg-transparent w-12 h-12 justify-center items-center rounded-full border-blue border-1 border"
        >
          <span className="w-full h-full flex items-center justify-center ">
            <ArrowLeft className="-ml-px" />
          </span>
        </button>
        <button
          onClick={handleNextSlide}
          className="hidden z-50 md:flex cursor-pointer bg-transparent w-12 h-12 justify-center items-center rounded-full border-blue border-1 border"
        >
          <span className="w-full h-full flex items-center justify-center ">
            <ArrowLeft className="rotate-180 ml-px" />
          </span>
        </button>
      </div>
    </Swiper>
  )
}
