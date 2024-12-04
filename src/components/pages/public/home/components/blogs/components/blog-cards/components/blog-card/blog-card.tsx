import {Image} from '@/components/common'
import {Props} from './types'
import {Tag} from '@/components/common/tag'
import {Link} from 'react-router-dom'
import {getImageURL} from '@/utils/get-image'
import {calculateEstimatedReadingTime} from '@/utils/time'
import formatDistance from 'date-fns/formatDistance'

export const BlogCard = ({blog}: Props) => (
  <Link to={`/blogs/${blog._id}`} className="bg-white border border-blue-4 rounded-lg overflow-hidden">
    <Image src={getImageURL(blog.image)} alt={blog.title_uz} className="min-w-full" imageClassName="w-full h-48" />
    <div className="px-5 pt-4 pb-5">
      <div className="flex flex-wrap gap-2.5">
        {blog.tags.map((tag: string, index: number) => (
          <Tag
            key={index}
            title={tag}
            className="bg-blue-5 px-2.5 py-1 h-7 text-sm leading-4.5 font-normal text-blue"
          />
        ))}
        <h3 className="mt-2 text-xl font-bold leading-7.5">{blog.title_en?.slice(0, 40)}...</h3>
        <p className="text-blue-2 text-sm leading-6 line-clamp-2">{blog.text_en?.replace(/<[^>]*>?/gm, '')}</p>
        <div className="flex h-full items-center justify-between w-full mt-7">
          <div className="flex items-center gap-2.5 text-5 text-blue-2 leading-[30px]">
            <p>
              {formatDistance(new Date(blog.created_at), new Date(), {addSuffix: false} || Date)?.replace('about', '')}{' '}
              ago
            </p>
            <div className="w-1 h-1 bg-blue-2" />
            <p>{calculateEstimatedReadingTime(blog.text_en)} min red</p>
          </div>
        </div>
      </div>
    </div>
  </Link>
)
