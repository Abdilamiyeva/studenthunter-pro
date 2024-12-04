import {Button} from '@/components/common'
import {EditIcon} from '@/icons'
import {Props} from './types'
import MDEditor from '@uiw/react-md-editor'
import {useState} from 'react'
import {EditForm} from './components'

export const About = ({company}: Props) => {
  const [openEditForm, setOpenEditForm] = useState(false)
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="about" className="section mt-10 md:mt-20 bg-blue-7 py-4 px-5 sm:py-6 sm:px-8 rounded-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-7 gap-1">
        <h5 className="text-xl font-bold leading-7.5">About Company</h5>
        <Button
          onClick={() => setOpenEditForm(true)}
          icon={<EditIcon className="w-3 h-3" />}
          className="w-full sm:w-auto px-7 py-1 rounded text-sm font-bold leading-6 mt-2 sm:mt-0"
        >
          Edit
        </Button>
      </div>
      <MDEditor.Markdown source={showAll ? company.description : company.description?.slice(0, 450)} />
      {company.description ? (
        company.description?.length > 450 && (
          <button onClick={() => setShowAll(prev => !prev)} className="text-sm font-bold leading-5 mt-4">
            {showAll ? 'Read less' : 'Read more'} ...
          </button>
        )
      ) : (
        <p className="text-xs text-center my-10 text-blue-2">Nothing yet for description...</p>
      )}
      <EditForm open={openEditForm} close={() => setOpenEditForm(false)} company={company} />
    </section>
  )
}
