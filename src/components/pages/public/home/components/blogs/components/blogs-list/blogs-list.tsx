import {Button} from '@/components/common'
import {Link} from 'react-router-dom'
import {useGetBlogsQuery} from '@/features/blogs'
import {calculateEstimatedReadingTime} from '@/utils/time'
import {formatDistance} from 'date-fns'

export const BlogsList = () => {
  const {data: {data: Blogs} = {}} = useGetBlogsQuery({status: 1})
  return (
    <div>
      <div className="divide-y divide-blue-4 mb-5 md:mb-12">
        <h5 className="text-xl md:text-2xl font-bold leading-7.5 md:leading-8.5 mb-4 md:mb-7">Most popular</h5>
        {Blogs?.slice(2, 6).map((blog, index) => (
          <div key={index} className="flex flex-col gap-2 py-4">
            <Link to={'/blogs/1'}>
              <h6 className="text-base md:text-xl font-bold leading-5 md:leading-7.5">{blog.title_en}</h6>
            </Link>
            <div className="flex items-center gap-2.5 text-xs md:text-sm text-blue-2 leading-4.5 md:leading-6">
              <p>
                {formatDistance(new Date(blog.created_at), new Date(), {addSuffix: false} || Date)?.replace(
                  'about',
                  '',
                )}
              </p>
              <div className="w-1 h-1 bg-blue-2" />
              <p>{calculateEstimatedReadingTime(blog.text_en)} min red</p>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        className="bg-transparent py-2 md:py-3 px-5 md:px-16 border-2 border-blue text-base md:text-2xl leading-5 md:leading-8.5 rounded md:rounded-lg"
      >
        View All
      </Button>
    </div>
  )
}
