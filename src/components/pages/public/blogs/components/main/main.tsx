import {Image} from '@/components/common'

export const Main = () => (
  <section id="main" className="relative pt-28 pb-48 text-white">
    <Image
      src="/images/pages/blog/main/bg.png"
      alt="Student Hunter - Blog"
      className="absolute top-0 left-0 min-w-full min-h-full"
      imageClassName="absolute w-full h-full"
    />
    <Image
      src="/images/pages/blog/main/bg-layer.png"
      alt="Student Hunter - Blog Layer"
      className="absolute top-0 left-0 min-w-full min-h-full"
      imageClassName="absolute w-full h-full bg-top"
    />
    <div className="relative container">
      <h1 className="text-7xl md:text-9xl  leading-18 font-bold">Student Hunter Blog</h1>
      <p className="mt-5 w-auto md:w-[557px] text-xl md:text-2xl leading-8.5">
        Latest news, trends, updates, tips and advices to help you across every step of the study journey{' '}
      </p>
    </div>
  </section>
)
