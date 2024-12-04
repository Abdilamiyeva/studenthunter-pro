import {Breadcrumb} from '@/components/common/breadcrumb'
import {SwiperCarousel} from '@/components/common/swiper'
import {BreadcrumbData, OurTeam} from './constants'
import {ImageCard, TextCard} from './components'

export const AboutPage = () => (
  <div className="w-full">
    <div className="container">
      <Breadcrumb links={BreadcrumbData} className="my-12 mb-20" />
      <div className="flex flex-col gap-y-10 md:gap-y-20 mb-8">
        <div className="grid grid-cols-1 gap-y-7 xl:grid-cols-2 items-center md:gap-x-36">
          <TextCard
            headingText="Do you know about the Student Hunter project?"
            description="At StudentHunter we are committed to excellence, and our experience in providing proper communication between students and university admissions stands out. We understand the challenges that students experience while applying to universities or companies. That is why we are not scared to look outside the box and solve problems. Our mission is to link talents to opportunities."
          />
          <ImageCard src="/images/img1.png" />
        </div>
        <div className="grid grid-cols-1 xl:flex-row xl:grid-cols-2 items-center gap-y-7 xl:gap-x-36">
          <ImageCard src="/images/img2.png" />
          <TextCard
            headingText="Do you know about the Student Hunter project?"
            description="At StudentHunter we are committed to excellence, and our experience in providing proper communication between students and university admissions stands out. We understand the challenges that students experience while applying to universities or companies. That is why we are not scared to look outside the box and solve problems. Our mission is to link talents to opportunities."
          />
        </div>
      </div>
    </div>
    <div className="my-24 container">
      <h1 className="text-blue  font-bold mb-[60px] text-8xl leading-[60px]">Our team</h1>
      <SwiperCarousel className="pt-[60px]" type="default" cards={OurTeam} />
    </div>
  </div>
)
