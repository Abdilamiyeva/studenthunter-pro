import {Breadcrumb, Image} from '@/components/common'
import {Tag} from '@/components/common/tag'
import {Navigate, useParams} from 'react-router-dom'
import {useGetBlogQuery} from '@/features/blogs'
import {getImageURL} from '@/utils/get-image'
import {calculateEstimatedReadingTime} from '@/utils/time'
import formatDistance from 'date-fns/formatDistance'
import {Loader} from './components'
import MDEditor from '@uiw/react-md-editor'

export const BlogPage = () => {
  const {id: blogId} = useParams()
  const {data: {data: blog} = {}, isLoading} = useGetBlogQuery({id: blogId || ''})

  if (isLoading) {
    return (
      <div className="container h-[50vh] flex justify-center items-center">
        <Loader />
      </div>
    )
  }

  if (!blog) {
    return <Navigate to="/" />
  }

  return (
    <div className="container mx-auto mt-8 mb-24">
      <Breadcrumb
        links={[
          {label: 'Home', path: '/'},
          {label: 'Blog', path: '/blogs'},
          {label: `${blog.title_en?.slice(0, 9)}...`},
        ]}
      />
      <div className="flex flex-wrap lg:flex-nowrap items-start gap-4 lg:gap-16 mt-11">
        <div className="w-full lg:w-[70%]">
          <h1 className="text-4xl md:text-8xl leading-17 font-bold">{blog?.title_en}</h1>
          <div className="flex items-center gap-2.5 my-8 text-blue-2">
            <p>
              {formatDistance(new Date(blog?.created_at || new Date()), new Date(), {addSuffix: false}).replace(
                'about',
                '',
              )}{' '}
              ago
            </p>
            <div className="w-1 h-1 bg-blue-2" />
            <p>{calculateEstimatedReadingTime(blog?.text_en || '')} min read</p>
          </div>
          <Image
            src={getImageURL(blog?.image || '')}
            className="min-w-full min-h-[540px]"
            imageClassName="w-full h-full rounded-2xl"
          />
          <div>
            <MDEditor.Markdown source={blog?.text_en} />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 w-full lg:w-[30%]">
          {blog.tags.map((tag, index) => (
            <Tag
              key={index}
              title={tag}
              className="bg-blue-5 cursor-default text-blue-1 text-2xl leading-8.5 font-normal px-6 py-1.5 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
