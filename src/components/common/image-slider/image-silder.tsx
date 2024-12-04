import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {Props} from './types'
import {Image} from '..'
import {getImageURL} from '@/utils/get-image'
import {Swiper, SwiperSlide} from 'swiper/react'

import {ArrowLeftIcon, ArrowRightIcon} from '@radix-ui/react-icons'
import React, {useEffect, useRef} from 'react'
import {XIcon} from '@/icons'

export const ImageSilder = ({images, open, close}: Props) => {
  const swiperRef = useRef<null | any>(null)
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

  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : 'auto'
  }, [open])

  return (
    <React.Fragment>
      {open && (
        <div className="w-full fixed top-0 left-0 flex h-screen z-50 items-center justify-center">
          <div className=" w-full h-full relative flex justify-center items-center mx-auto">
            <Swiper loop={true} ref={swiperRef} className=" w-[800px]">
              {images?.map((img, index) => (
                <SwiperSlide className="text-center w-full" key={index}>
                  <Image
                    imageClassName="w-full"
                    className="w-full"
                    src={getImageURL(img)}
                    alt="student hunter university image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={handleNextSlide}
              className="px-4 z-50 absolute left-0 hover:bg-black/20 hover:backdrop-blur-sm"
            >
              <ArrowLeftIcon className="w-20 h-20 text-white " />
            </button>
            <button
              onClick={handlePrevSlide}
              className="px-4 absolute z-1 right-0 hover:bg-black/20 hover:backdrop-blur-sm"
            >
              <ArrowRightIcon className="w-20 h-20 text-white" />
            </button>
            <button
              onClick={close}
              className="hover:bg-black/20  absolute hover:backdrop-blur-sm  flex justify-center items-center w-8 h-8 text-white top-10 right-10"
            >
              <XIcon className=" text-white" />
            </button>
          </div>
        </div>
      )}
      {open && <div onClick={close} className="w-full h-screen fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"></div>}
    </React.Fragment>
  )
}
