import {Image, Tag} from '@/components/common'
import {GlobalIcon, ReceptionIcon, TimeForwardIcon} from '@/icons'
import {Link} from 'react-router-dom'

export const Main = () => (
  <div className="container">
    <Image
      src="/images/pages/skills/img2.png"
      alt="course title"
      imageClassName="h-full w-full"
      className="h-[210px] lg:h-[665px] max-w-full"
    />
    <div className="mt-16">
      <div className="flex gap-x-5">
        <Tag className="text-sm font-normal leading-4 text-blue" title="Figma" />
        <Tag className="text-sm font-normal leading-4 text-blue" title="Web design" />
      </div>
      <h1 className="text-blue text-xl lg:text-8xl font-bold leading-7 lg:leading-17 mt-5">
        Complete figma design course
      </h1>
      <p className="text-blue-1 text-sm lg:text-xl font-normal leading-7 w-auto lg:w-[905px] lg:mt-4">
        Have a deep understanding of typography, color theory, photos, layout, blocking and other design theory and
        skills
      </p>
      <Link to="/" className="text-blue text-sm lg:text-xl inline-block leading-8 font-medium underline mt-4">
        Created by Udemy
      </Link>
      <div className="flex items-center gap-x-2 lg:gap-x-6 mt-5 lg:mt-7 mb-9">
        <p className="text-orange-6 text-xl lg:text-7xl font-bold leading-15">$11.99</p>
        <del className="text-blue-2 text-xl lg:text-4xl font-normal leading-10justify-center ">$74.99</del>
      </div>
      <div className="flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row gap-x-32 mb-10">
        <div className="flex items-center gap-x-3">
          <div className="w-14 h-14 bg-blue-7 rounded-[10px] flex justify-center items-center">
            <GlobalIcon />
          </div>
          <div>
            <p className="text-blue-2 text-base font-normal leading-7">Language</p>
            <p className="text-xl text-blue font-bold leading-8">English</p>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="w-14 h-14 bg-blue-7 rounded-[10px] flex justify-center items-center">
            <TimeForwardIcon />
          </div>
          <div>
            <p className="text-blue-2 text-base font-normal leading-7">Duration</p>
            <p className="text-xl text-blue font-bold leading-8">20 hour</p>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="w-14 h-14 bg-blue-7 rounded-[10px] flex justify-center items-center">
            <ReceptionIcon />
          </div>
          <div>
            <p className="text-blue-2 text-base font-normal leading-7">Language</p>
            <p className="text-xl text-blue font-bold leading-8">English</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
