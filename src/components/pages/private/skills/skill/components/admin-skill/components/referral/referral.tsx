import {Button} from '@/components/common'
import {EditIcon} from '@/icons'
import {EditForm} from './components'
import {useState} from 'react'
import {Props} from './types'

export const Referral = ({skill}: Props) => {
  const [openEditForm, setOpenEditForm] = useState(false)

  return (
    <section className="section" id="referral-link">
      <div className="border border-blue-4 py-3 px-5 sm:py-5 sm:px-8 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h1 className="text-xl text-blue font-bold leading-8 mb-2 sm:mb-0">Referral link</h1>
          <Button
            onClick={() => setOpenEditForm(true)}
            className="rounded px-7 py-2 text-sm"
            icon={<EditIcon className="w-3 h-3" />}
          >
            Edit
          </Button>
        </div>
        <div className="mt-8">
          <p className="text-blue-2 text-sm font-normal">Skill info</p>
          {skill.link ? (
            <a target="_blank" href={skill.link} className="text-blue-9 font-bold leading-6 break-all">
              {skill.link}
            </a>
          ) : (
            'N/A'
          )}
        </div>
      </div>
      <EditForm open={openEditForm} close={() => setOpenEditForm(false)} skill={skill} />
    </section>
  )
}
