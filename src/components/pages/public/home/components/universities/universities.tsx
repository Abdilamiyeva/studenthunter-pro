import {SwiperCarousel} from '@/components/common/swiper'
import {useGetHomePageQuery} from '@/features/home'
import {ImageCard} from './components'
import {getFindImage, getImageURL} from '@/utils/get-image'
import {useMemo} from 'react'
export const Universities = () => {
  const {data: {data: homePage} = {}} = useGetHomePageQuery('')

  const swiperData = useMemo(
    () =>
      homePage?.universities?.map((image, index) => ({
        card: <ImageCard key={index} title={image.title} src={getImageURL(getFindImage(image.media as any))} />,
      })),
    [homePage, ImageCard],
  )

  return (
    <section className="px-4 md:container mt-10 md:mt-20">
      <h2 className="text-4xl md:text-[50px] leading-9 md:leading-17 font-bold text-center">Universities of the day</h2>
      <p className="text-sm md:text-2xl leading-6 md:leading-8.5 text-blue-1 text-center mt-3 pb-7 md:pb-14">
        Apply for unlimited number of prestigious universities
      </p>
      <SwiperCarousel
        type="coverflow"
        cards={swiperData || []}
        wrapBtnsClassName="px-14 mt-20"
        className="!mt-0 !pt-0 !pb-16 "
      />
    </section>
  )
}
