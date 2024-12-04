import {Button} from '@/components/common'
import {EditIcon} from '@/icons'
import {EditForm} from './components'
import {useState} from 'react'
import {Props} from './types'
import MDEditor from '@uiw/react-md-editor'

export const Learn = ({skill}: Props) => {
  const [openEditForm, setOpenEditForm] = useState(false)

  return (
    <section className="section my-10 sm:my-20" id="what-you-ll-learn">
      <div className="border border-blue-4 py-3 px-5 sm:py-5 sm:px-8 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h1 className="text-xl text-blue font-bold leading-8 mb-2 sm:mb-0">What you’ll learn</h1>
          <Button
            onClick={() => setOpenEditForm(true)}
            className="rounded px-7 py-2 text-sm"
            icon={<EditIcon className="w-3 h-3" />}
          >
            Edit
          </Button>
        </div>
        <div className="my-6">
          {skill.what_learned ? (
            <MDEditor.Markdown source={skill.what_learned} className="text-blue-1" />
          ) : (
            <p className="text-center text-sm text-blue-2 my-5">Nothing there...</p>
          )}
        </div>
      </div>
      <EditForm open={openEditForm} close={() => setOpenEditForm(false)} skill={skill} />
    </section>
  )
}
