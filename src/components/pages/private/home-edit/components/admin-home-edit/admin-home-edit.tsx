import {BoldTabs, Loader} from '@/components/common'
import {FAQs, Feedbacks, SocialHighLights, Universities, Vacancies} from './components'
import {useGetHomePageQuery} from '@/features/home-edit'

export const AdminHomeEdit = () => {
  const {data: {data: homePage} = {}, isFetching} = useGetHomePageQuery('')

  if (isFetching) {
    return (
      <div className="relative h-80">
        <Loader className="absolute" />
      </div>
    )
  }

  return (
    <BoldTabs
      tabs={[
        {label: 'University of the day', children: <Universities universities={homePage?.universities || []} />},
        {label: 'Vacancy of the day', children: <Vacancies vacancies={homePage?.vacancies || []} />},
        {label: 'Feedbacks', children: <Feedbacks feedbacks={homePage?.feedbacks || []} />},
        {
          label: 'Instagram highlights',
          children: <SocialHighLights highlights={homePage?.instagram_highlights || []} />,
        },
        {label: 'FAQs', children: <FAQs faqs={homePage?.faqs || []} />},
      ]}
    />
  )
}
