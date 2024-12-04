import {Pagination} from '@/components/common'
import {MediaCard} from './components'
import {useGetHomePageQuery} from '@/features/home'
import {useMemo} from 'react'
import {MediaPost} from './mock/media-posts/types'

export const SocialMedia = () => {
  const {data: {data: homePage} = {}} = useGetHomePageQuery('')

  const socialMedia = useMemo(
    () =>
      homePage?.instagram_highlights.map(item => ({
        thumbnail: '/images/demo-media.png',
        type: 'video',
        source: item.link,
      })),
    [homePage],
  )

  return (
    <section id="social-media" className="px-4 md:container pt-14 md:pt-20 pb-7 md:pb-12 ">
      <h2 className="text-4xl md:text-[50px] font-bold leading-9 md:leading-17 text-center">
        Get Inspired: Social Media Highlights
      </h2>
      <div className="w-full overflow-x-auto">
        <div className="flex items-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-7 md:mt-14 mb-12 w-max md:w-[auto]">
          {socialMedia?.map((mediaPost, index) => <MediaCard key={index} mediaPost={mediaPost as MediaPost} />)}
        </div>
      </div>
      <div className="hidden md:flex justify-center">
        <Pagination perPage={10} totalDataCount={100} />
      </div>
    </section>
  )
}
