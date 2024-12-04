import {useGetBlogsQuery} from '@/features/blogs'
import {BlogCard} from '..'
import {Loader} from '@/components/common'
import {Navigate} from 'react-router-dom'
import {BlogStatus} from '@/constants/statusues'

export const PublishedBlogs = () => {
  const {data: {data: blogs} = {}, isLoading} = useGetBlogsQuery({status: BlogStatus.ACTIVE})

  if (isLoading) {
    return (
      <div className="h-80 relative ">
        <Loader className="absolute" />
      </div>
    )
  }

  if (!blogs) {
    return <Navigate to="/" />
  }

  return (
    <div className="mt-7 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
      {blogs.map(blog => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  )
}
