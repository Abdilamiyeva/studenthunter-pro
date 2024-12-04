import {Tag} from '@/components/common'
import {EditButton} from '../edit-button'
import {EditForm} from './components'
import {useState} from 'react'
import {Props} from './type'

export const Skills = ({vacancy}: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <section id="skills" className="section my-10 sm:my-20">
      <div className="border border-blue-4 rounded-2xl py-4 px-5 sm:py-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h1 className="text-blue text-xl font-bold leading-7 mb-2 sm:mb-0">Skills</h1>
          <EditButton onClick={() => setOpen(true)} />
        </div>
        <div className="flex flex-wrap gap-2 pt-10">
          {!vacancy.skills?.length ? (
            vacancy.skills.map(skill => <Tag key={skill} title={skill} />)
          ) : (
            <p className="text-xs w-full text-center my-10 text-blue-2">Nothing yet for description...</p>
          )}
        </div>
      </div>
      <EditForm open={open} close={() => setOpen(false)} />
    </section>
  )
}
