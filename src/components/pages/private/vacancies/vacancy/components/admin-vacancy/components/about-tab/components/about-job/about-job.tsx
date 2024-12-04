import {useState} from 'react'
import {EditButton} from '../edit-button'
import {EditForm} from './components'
import {Props} from './types'
import MDEditor from '@uiw/react-md-editor'

export const AboutJob = ({vacancy}: Props) => {
  const [open, setOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="about" className="section my-10 sm:my-20">
      <div className="border border-blue-4 rounded-2xl py-4 px-5 sm:py-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h1 className="text-blue text-xl font-bold leading-7 mb-2 sm:mb-0">About job</h1>
          <EditButton onClick={() => setOpen(true)} />
        </div>
        <MDEditor.Markdown source={showAll ? vacancy.description : vacancy.description?.slice(0, 450)} />
        {vacancy.description ? (
          vacancy.description?.length > 450 && (
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="text-sm font-bold leading-5 text-orange-6 flex items-center gap-1.5 group hover:text-orange-6/80 duration-default mt-5"
            >
              <span className="flex items-center gap-0.5">
                {[...new Array(3)].map((_, index) => (
                  <span
                    key={index}
                    className="block w-1 h-1 rounded-full bg-orange-6 group-hover:bg-orange-6/80 duration-default"
                  />
                ))}
              </span>
              <span>{showAll ? 'See less' : 'See more'}</span>
            </button>
          )
        ) : (
          <p className="text-xs text-center my-10 text-blue-2">Nothing yet for description...</p>
        )}
      </div>
      <EditForm open={open} close={() => setOpen(false)} />
    </section>
  )
}
