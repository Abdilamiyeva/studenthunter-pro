import {Button} from '@/components/common'
import {EditIcon} from '@/icons'
import {useState} from 'react'
import {EditForm} from './components'
import {Props} from './types'
import MDEditor from '@uiw/react-md-editor'

export const About = ({consulting}: Props) => {
  const [open, setOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="about" className="section mt-10 md:mt-20 bg-blue-7 py-4 px-5 sm:py-6 sm:px-8 rounded-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-7 gap-1">
        <h5 className="text-xl font-bold leading-7.5">About Consulting</h5>
        <Button
          icon={<EditIcon className="w-3 h-3" />}
          className="w-full sm:w-auto px-7 py-1 rounded text-sm font-bold leading-6 mt-2 sm:mt-0"
          onClick={() => setOpen(true)}
        >
          Edit
        </Button>
      </div>
      {consulting.about ? (
        <MDEditor.Markdown
          source={
            consulting.about.length > 500
              ? showAll
                ? consulting.about
                : consulting.about.slice(0, 450)
              : consulting.about
          }
        />
      ) : (
        <p className="text-center text-blue-2 my-5">No description</p>
      )}
      {(consulting.about?.length || 0) > 500 && (
        <button onClick={() => setShowAll(prev => !prev)} className="text-sm font-bold leading-5">
          Read {showAll ? 'less' : 'more'} ...
        </button>
      )}
      <EditForm open={open} close={() => setOpen(false)} consulting={consulting} />
    </section>
  )
}
