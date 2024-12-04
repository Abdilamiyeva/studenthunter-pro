import {useGetBlogsQuery} from '@/features/blogs'
import {BlogCard} from '../../../home/components/blogs/components/blog-cards/components'
import {useNavigate} from 'react-router-dom'

export const Blogs = () => {
  const {data: {data: allBlogs} = {}, isLoading} = useGetBlogsQuery({status: 1})
  const navigate = useNavigate()
  if (!isLoading && !allBlogs?.length) {
    navigate('/')
  }

  return (
    <div className="container mx-auto mt-14 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allBlogs?.map((blog, index) => <BlogCard key={index} blog={blog} />)}
      </div>
    </div>
  )
}
