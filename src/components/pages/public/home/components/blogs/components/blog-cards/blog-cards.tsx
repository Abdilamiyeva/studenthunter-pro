import {useGetBlogsQuery} from '@/features/blogs'
import {BlogCard} from './components'
import {Navigate} from 'react-router-dom'

export const BlogCards = () => {
  const {data: {data: blogs} = {}, isLoading} = useGetBlogsQuery({status: 1})

  if (!isLoading && !blogs?.length) {
    return <Navigate to="/" />
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {blogs?.slice(0, 2)?.map((blog, index) => <BlogCard key={index} blog={blog} />)}
    </div>
  )
}
