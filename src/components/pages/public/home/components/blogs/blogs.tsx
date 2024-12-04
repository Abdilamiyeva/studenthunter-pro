import {useGetBlogsQuery} from '@/features/blogs'
import {BlogCards, BlogsList} from './components'

export const Blogs = () => {
  const {data: {data: blogs} = {}} = useGetBlogsQuery({status: 1})
  return (
    <section id="blog" className="bg-blue-5">
      <div className="px-4 md:container mx-auto pt-14 pb-5 md:pt-20 md:pb-10">
        <h2 className="text-4xl md:text-[50px] font-bold leading-9 md:leading-17 text-center">Our Blog</h2>
        <div className="flex flex-wrap lg:flex-nowrap items-start gap-5 md:gap-24 mt-[] md:mt-14">
          <div className="w-full lg:w-[58%]">
            <BlogCards />
          </div>
          {(blogs?.length || 0) > 2 && (
            <div className="w-full lg:w-[42%]">
              <BlogsList />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
