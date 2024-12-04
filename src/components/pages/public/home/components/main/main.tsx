import {Button, Image} from '@/components/common'
import {useGetUserQuery} from '@/features/auth'
import {FrameRightIcon} from '@/icons'
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export const Main = () => {
  const navigate = useNavigate()
  const [isApply, setisApply] = useState(false)

  const {data: {data: user} = {}} = useGetUserQuery('')

  return (
    <section id="main" className="xl:container mx-auto">
      <div className="relative overflow-hidden pt-14 md:py-44 px-4 md:px-16 min-h-[800px] md:min-h-[auto]">
        <Image
          src="/images/pages/home/main/main.png"
          alt="Student Hunter's Student"
          className="absolute top-0 left-0 min-w-full min-h-full"
          imageClassName="hidden md:block absolute top-0 left-0 min-w-full min-h-full object-cover"
        />
        <Image
          src="/images/pages/home/main/main-mobile.png"
          alt="Student Hunter's Student"
          className="absolute top-0 left-0 min-w-full min-h-full"
          imageClassName="block md:hidden absolute top-0 left-0 min-w-full min-h-full object-cover"
        />
        <div className="relative">
          <h1 className="md:text-start text-center leading-[60px] text-4xl md:text-[50px] font-bold md:leading-17 w-auto md:w-[520px]">
            Discover your dream university or vacancy
          </h1>
          <p className="md:text-start text-center text-blue-1 text-sm md:text-xl leading-6 md:leading-7.5 w-auto md:w-[498px] mt-2.5 mb-10 md:mb-16">
            The way to get started is to quit talking and begin doing. If you keep moving in the right direction you'll
            get your dream or something better
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:flex items-center gap-2 md:gap-5">
            {isApply ? (
              <React.Fragment>
                <Button
                  onClick={() => navigate('/universities-programs?tabs=universities')}
                  variant="outline"
                  className="px-[35px] py-[15px] "
                >
                  To University <FrameRightIcon className="mt-px ml-[10px] " />
                </Button>
                <Button onClick={() => navigate('/jobs')} variant="outline" className="px-[35px] py-[15px]">
                  To Vacancy <FrameRightIcon className="mt-px ml-[10px]" />
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Button className="px-10 py-2 md:px-16 md:py-3.5 border-2" onClick={() => setisApply(true)}>
                  Apply
                </Button>
                {!Object.keys(user || {}).length ? (
                  <Button
                    onClick={() => navigate('/auth/sign-up')}
                    variant="outline"
                    className="px-10 py-2 md:px-16 md:py-3.5 border-2 border-blue bg-transparent"
                  >
                    Sign up
                  </Button>
                ) : (
                  <Button
                    onClick={() => navigate('/dashboard')}
                    variant="outline"
                    className="px-10 py-2 md:px-16 md:py-3.5 border-2 border-blue bg-transparent"
                  >
                    Go To Dashboard
                  </Button>
                )}
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
      <div className="w-full overflow-auto">
        <div className="inline-flex flex-nowrap w-full items-center md:py-7 py-4 md:px-5 border-b border-blue-4 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-20px),transparent_100%)]">
          <ul className="flex items-center [&_li]:mx-4 [&_img]:max-w-none  animate-infinite-scroll">
            <li>
              <Image
                imageClassName="md:w-44 h-8 md:h-12 object-contain"
                src="/images/pages/home/main/logos/yia.svg"
                alt="Yoshlar ishlari agentligi"
              />
            </li>
            <li>
              <Image
                imageClassName="md:w-44 h-8 md:h-12 object-contain"
                src="/images/pages/home/main/logos/bcit.svg"
                alt="Biritish columbia institute of technology"
              />
            </li>
            <li>
              <Image
                imageClassName="md:w-44 h-8 md:h-12 object-contain"
                src="/images/pages/home/main/logos/mu.svg"
                alt="University of Manitoba"
              />
            </li>
            <li>
              <Image
                imageClassName="md:w-44 h-8 md:h-12 object-contain"
                src="/images/pages/home/main/logos/unbc.svg"
                alt="UNBC"
              />
            </li>
            <li>
              <Image
                imageClassName="md:w-44 h-8 md:h-12 object-contain"
                src="/images/pages/home/main/logos/wu.svg"
                alt="University of Waterloo"
              />
            </li>
          </ul>
          <ul
            className="flex items-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden={true}
          >
            <li>
              <Image
                imageClassName="md:w-44 h-8 md:h-12 object-contain"
                src="/images/pages/home/main/logos/yia.svg"
                alt="Yoshlar ishlari agentligi"
              />
            </li>
            <li>
              <Image
                imageClassName="md:w-44 h-8 md:h-12 object-contain"
                src="/images/pages/home/main/logos/bcit.svg"
                alt="Biritish columbia institute of technology"
              />
            </li>
            <li>
              <Image
                imageClassName="md:w-44 h-8 md:h-12 object-contain"
                src="/images/pages/home/main/logos/mu.svg"
                alt="University of Manitoba"
              />
            </li>
            <li>
              <Image
                imageClassName="md:w-44 h-8 md:h-12 object-contain"
                src="/images/pages/home/main/logos/unbc.svg"
                alt="UNBC"
              />
            </li>
            <li>
              <Image
                imageClassName="md:w-44 h-8 md:h-12 object-contain"
                src="/images/pages/home/main/logos/wu.svg"
                alt="University of Waterloo"
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
