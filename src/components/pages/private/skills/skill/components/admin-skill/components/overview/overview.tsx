import {Button} from '@/components/common'
import {EditIcon} from '@/icons'
import {OverviewForm, ProfileForm} from './components'
import {Fragment, useState} from 'react'
import {Props} from './types'
import {getImageURL} from '@/utils/get-image'

export const Overview = ({skill}: Props) => {
  const [openProfileEditForm, setOpenProfileEditForm] = useState(false)
  const [openOverviewEditForm, setOpenOverviewEditForm] = useState(false)

  return (
    <section id="overview" className="section">
      <div className="flex flex-col sm:flex-row relative gap-x-8">
        <div>
          <video
            className="rounded sm:w-52 min-w-full"
            src={getImageURL(skill.video, 'videos')}
            crossOrigin="anonymous"
          />
        </div>
        <div className="flex flex-col-reverse sm:flex-col justify-between w-full">
          <Button
            onClick={() => setOpenProfileEditForm(true)}
            className="rounded px-7 py-2 text-sm w-max ml-auto"
            icon={<EditIcon className="w-3 h-3" />}
          >
            Edit
          </Button>
          <div>
            <h2 className="text-xl font-semibold leading-6 sm:leading-8">{skill.title}</h2>
            <p className="text-blue-2">{skill.created_by}</p>
          </div>
        </div>
      </div>
      <div className="my-8 border border-blue-4 py-3 px-5 sm:py-5 sm:px-8 rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
          <h1 className="text-xl text-blue font-bold leading-8 mb-2 sm:mb-0">Overview</h1>
          <Button
            onClick={() => setOpenOverviewEditForm(true)}
            className="rounded px-7 py-2 text-sm"
            icon={<EditIcon className="w-3 h-3" />}
          >
            Edit
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 mt-6">
          <div>
            <p className="text-blue-2 text-sm font-normal">Created by</p>
            <p className="font-bold leading-6">{skill.created_by}</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm font-normal">Price</p>
            <p className="font-bold leading-6">${skill.price}</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm font-normal">Language</p>
            <p className="font-bold leading-6">{skill.language}</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm font-normal">Discounted Price</p>
            <p className="font-bold leading-6">${skill.discount_price}</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm font-normal">Duration</p>
            <p className="font-bold leading-6">{skill.duration}</p>
          </div>
          <div>
            <p className="text-blue-2 text-sm font-normal">Level</p>
            <p className="font-bold leading-6">{skill.level}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-blue-2 text-sm font-normal">Categories</p>
            <div className="flex flex-wrap items-center gap-x-2 text-blue text-base font-bold leading-6">
              {skill.categories.map((category, index) => (
                <Fragment key={index}>
                  {category} {skill.categories.length - 1 !== index && <div className="w-1 h-1 bg-blue" />}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ProfileForm open={openProfileEditForm} close={() => setOpenProfileEditForm(false)} skill={skill} />
      <OverviewForm open={openOverviewEditForm} close={() => setOpenOverviewEditForm(false)} skill={skill} />
    </section>
  )
}
