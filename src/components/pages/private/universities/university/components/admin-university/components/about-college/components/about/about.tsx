import {Button} from '@/components/common'
import {EditIcon} from '@/icons'
import {EditForm} from './components'
import {useState} from 'react'
import {Props} from './types'
import MDEditor from '@uiw/react-md-editor'

export const About = ({university}: Props) => {
  const [open, setOpen] = useState(false)
  const [readMore, setReadMore] = useState(false)

  return (
    <section id="about" className="section">
      <div className="bg-blue-7 my-20 rounded-2xl py-4 px-5 sm:py-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h1 className="text-blue text-xl font-bold leading-7 mb-2">About University</h1>
          <Button
            onClick={() => setOpen(true)}
            icon={<EditIcon className="w-3 h-3" />}
            className="rounded py-1.5 px-7 text-sm"
          >
            Edit
          </Button>
        </div>
        <div className="my-4">
          {
            <MDEditor.Markdown
              source={!readMore ? university.description_en?.substring(0, 450) : university.description_en}
              className="text-blue-1 text-sm font-normal leading-normal"
            />
          }
        </div>
        {university.description_en?.length > 450 && (
          <button
            onClick={() => setReadMore(prev => !prev)}
            type="button"
            className="text-blue text-sm font-bold leading-5"
          >
            {readMore ? 'Read less' : 'Read more'} ...
          </button>
        )}
        <EditForm open={open} close={() => setOpen(false)} university={university} />
      </div>
    </section>
  )
}
