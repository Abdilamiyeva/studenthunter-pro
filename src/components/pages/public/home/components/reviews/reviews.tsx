import {cn} from '@/lib/utils'
import {useState, useMemo} from 'react'
import {ReviewCard} from './components'
import {useGetHomePageQuery} from '@/features/home'

export const Reviews = () => {
  const [activeTagIdx, setActiveTabIdx] = useState(0)
  const {data: {data: homePage} = {}} = useGetHomePageQuery('')
  const tabs = useMemo(
    () => [
      {label: 'Students', value: 'students'},
      {label: 'Universities', value: 'universities'},
      {label: 'Partners', value: 'partners'},
    ],
    [],
  )

  const reviewsData = useMemo(
    () =>
      homePage?.feedbacks.map(item => [
        {
          imageURL: item.image,
          review: item.feedback,
          name: item.name,
          occupation: item.position,
        },
      ]),
    [homePage],
  )

  return (
    <section id="reviews" className="bg-blue text-white py-7 md:pt-14 md:pb-24">
      <div className="px-4 md:container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold leading-9 md:leading-17 text-center">
          What Our Partners Have to Say
        </h2>
        <div className="relative w-max mt-5 md:mt-10 mb-7 md:mb-14 mx-auto border border-blue-2 rounded-full p-1">
          <div
            className="w-1/3 bg-white rounded-full absolute top-1 left-1 h-[calc(100%-8px)] duration-default"
            style={{left: `calc(${activeTagIdx * 33 + (activeTagIdx === tabs.length - 1 ? 0 : 1)}%)`}}
          />
          {tabs.map((tab, index) => (
            <button
              key={tab.value}
              onClick={() => setActiveTabIdx(index)}
              className={cn(
                'relative py-1 md:py-2.5 px-4 md:px-16 text-blue-4 duration-default text-sm md:text-base',
                activeTagIdx === index ? 'text-blue' : 'hover:text-white',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14">
          {(reviewsData || [])[activeTagIdx]?.map((review, index) => <ReviewCard key={index} review={review} />)}
        </div>
      </div>
    </section>
  )
}
