import {Button, Image} from '@/components/common'
import {useNavigate} from 'react-router-dom'

export const CallToAction = () => {
  const naviagte = useNavigate()
  return (
    <section id="call-to-action" className="relative md:py-20 py-10 text-white">
      <Image
        src="/images/pages/home/call-to-action/bg.png"
        alt="Find answers to unknowns"
        className="absolute top-0 left-0 min-w-full min-h-full"
        imageClassName="absolute w-full h-full"
      />
      <div className="relative flex flex-col gap-14 items-center">
        <h2 className="md:text-6xl font-bold md:leading-[50px] leading-9 text-center text-4xl">
          Got questions? Ask us anything
        </h2>
        <Button
          onClick={() => naviagte('/contact')}
          className="bg-white text-blue md:py-3 md:px-14 py-1 px-6 md:hover:bg-white/90 border-0 md:text-2xl font-medium leading-8.5"
        >
          Contact us
        </Button>
      </div>
    </section>
  )
}
