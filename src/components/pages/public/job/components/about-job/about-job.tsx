import {Props} from './types'
import MDEditor from '@uiw/react-md-editor'
import {useMemo, useState} from 'react'

export const AboutJob = ({vacancy}: Props) => {
  const [open, setOpen] = useState(false)
  const about = useMemo(() => (!open ? vacancy.description?.slice(0, 350) : vacancy?.description), [vacancy, open])
  return (
    <div className="w-full mt-10 border-[1px] border-blue-4 p-3 px-8 rounded-2xl">
      <h2 className="font-bold text-xl text-blue my-2">About the job</h2>
      {about ? (
        <p className="text-sm text-blue-1 font-normal my-2">
          <MDEditor.Markdown className="text-blue-1" source={about} />
        </p>
      ) : (
        <div className="flex justify-center items-center text-blue-3 h-20">
          <p>No Description</p>
        </div>
      )}
      <div className="my-4 ml-4">
        {about?.length >= 350 && (
          <span onClick={() => setOpen(prev => !prev)} className="text-orange-5 cursor-pointer text-xs">
            {!open ? '...See more' : 'Hide'}
          </span>
        )}
      </div>
    </div>
  )
}
