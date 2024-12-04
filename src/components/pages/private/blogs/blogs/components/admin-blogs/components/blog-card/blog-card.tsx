import dayjs from 'dayjs'
import {Props} from './types'
import {Button} from '@/components/common'
import {ArchiveIcon, EditIcon, TrashIcon} from '@/icons'
import {calculateEstimatedReadingTime} from '@/utils/time'
import MDEditor from '@uiw/react-md-editor'
import {useArchiveBlogMutation, useDeleteBlogMutation} from '@/features/blogs'
import {useToast} from '@/components/ui/use-toast'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {EditForm} from './components'
import {useState} from 'react'
import {BlogStatus} from '@/constants/statusues'

export const BlogCard = ({blog}: Props) => {
  const [deleteBlog] = useDeleteBlogMutation()
  const [archiveBlog, {isLoading: isArchiveing}] = useArchiveBlogMutation()
  const [open, setOpen] = useState(false)
  const handleRequest = useHandleRequest()
  const {toast} = useToast()

  const onDelete = async () => {
    await handleRequest({
      request: async () => {
        const result = await deleteBlog({id: blog._id})
        return result
      },
      onSuccess: () => {
        toast({
          title: 'Blog successfully deleted',
        })
      },
    })
  }

  const onArchive = async () => {
    await handleRequest({
      request: async () => {
        const result = await archiveBlog({id: blog._id, params: {status: BlogStatus.ARCHIVED}})
        return result
      },
      onSuccess: () => {
        toast({
          title: 'Blog successfully Archived',
        })
      },
    })
  }

  const unArchive = async () => {
    await handleRequest({
      request: async () => {
        const result = await archiveBlog({id: blog._id, params: {status: BlogStatus.ACTIVE}})
        return result
      },
      onSuccess: () => {
        toast({
          title: 'Blog successfully Unarchived',
        })
      },
    })
  }

  return (
    <div className="shadow-box flex flex-col justify-between rounded-2xl bg-white">
      <div className="p-5 pb-6 border-b border-blue-4">
        <h2 className="text-xl font-bold leading-7.5 line-clamp-2">{blog.title_en}</h2>
        <p className="text-sm leading-6 mt-1 mb-6 text-blue-2 line-clamp-2">
          <MDEditor.Markdown source={blog.text_en} />
        </p>
        <div className="flex items-center gap-2.5 text-blue-2 text-sm leading-6">
          <p>{dayjs(blog.created_at).format('DD.MM.YYYY')}</p>
          <div className="w-1 h-1 bg-blue-2" />
          <p>{calculateEstimatedReadingTime(blog?.text_en || '')} read</p>
        </div>
      </div>
      <div className="flex items-end justify-between gap-4 px-4 pb-5 pt-7">
        <Button
          variant="outline"
          icon={<EditIcon className="w-3 h-3" />}
          className="w-max bg-transparent py-1.5 px-5 text-xs font-bold leading-5 rounded border-blue"
          onClick={() => setOpen(true)}
        >
          Edit
        </Button>
        <Button
          variant="outline"
          theme="orange"
          icon={<TrashIcon className="w-3 h-3" />}
          className="text-xs leading-5 rounded py-1.5 px-4 font-bold"
          onClick={onDelete}
        >
          Delete
        </Button>
        {blog.status === 0 ? (
          <Button
            variant="outline"
            theme="orange"
            icon={<ArchiveIcon className="w-3 h-3" />}
            className="text-xs leading-5 rounded py-1.5 px-4 border border-blue-2 text-blue-1 bg-blue-5 hover:bg-blue-2 hover:text-white duration-100 font-bold"
            onClick={unArchive}
            loading={isArchiveing}
          >
            Unarchive
          </Button>
        ) : (
          <Button
            variant="outline"
            theme="orange"
            icon={<ArchiveIcon className="w-3 h-3" />}
            className="text-xs leading-5 rounded py-1.5 px-4 border border-blue-2 text-blue-1 bg-blue-5 hover:bg-blue-2 hover:text-white duration-100 font-bold"
            onClick={onArchive}
            loading={isArchiveing}
          >
            Archive
          </Button>
        )}
      </div>
      <EditForm
        blogId={blog._id}
        defaultValues={{
          text_en: blog.text_en,
          tags: blog.tags,
          text_ru: blog.text_ru,
          text_uz: blog.text_uz,
          title_en: blog.title_en,
          title_ru: blog.title_ru,
          title_uz: blog.title_uz,
          image: blog.image,
        }}
        open={open}
        close={() => setOpen(false)}
      />
    </div>
  )
}
