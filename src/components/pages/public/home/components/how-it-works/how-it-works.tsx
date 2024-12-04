import {Image} from '@/components/common'
import {GuideCard} from './components/guide-card'
import {GUIDANCE} from './constants/guidance'
import {VideoPlayIcon} from '@/icons'
import {useState} from 'react'

export const HowItWorks = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <section id="how-it-works" className="px-4 md:container md:py-24 py-14">
      <div className="w-full overflow-x-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[25px]">
          {GUIDANCE.map((guidance, index) => (
            <GuideCard key={index} guidance={guidance} />
          ))}
        </div>
      </div>
      <div className="mt-12 md:mt-20">
        <h2 className="text-4xl md:text-[50px] font-bold leading-9 md:leading-17 text-center">How it works</h2>
        <div className="md:mx-24">
          <div className="relative overflow-hidden mt-8 md:mt-14 rounded md:rounded-2xl w-full h-[200px] md:h-[300px] lg:h-[681px]">
            {isPlaying ? (
              <video
                autoPlay
                className="absolute top-0 left-0 min-w-full min-h-full"
                src="./video.mp4"
                controls
              ></video>
            ) : (
              <Image
                src="/images/pages/home/how-it-works/video-thumbnail.png"
                alt="Video Thumnail"
                className="absolute top-0 left-0 min-w-full min-h-full"
                imageClassName="absolute w-full h-full"
              />
            )}
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 md:p-6 border-2 border-white bg-white/50 rounded-full text-white"
              >
                <VideoPlayIcon className="w-6 h-6 md:w-12 md:h-12" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
