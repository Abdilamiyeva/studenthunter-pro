import MDEditor from '@uiw/react-md-editor'
import {Props} from './types'
import {useMemo, useState} from 'react'

export const AboutPrograms = ({program}: Props) => {
  const [open, setOpen] = useState(false)

  const about = useMemo(() => (!open ? program?.about?.slice(0, 350) : program?.about), [program, open])

  return (
    <div className="py-4 mt-10 px-5 sm:py-6 sm:px-8 rounded-xl bg-blue-7">
      <h2 className="md:text-xl text-blue font-bold leading-8">About Program</h2>
      <p className="text-sm font-normal leading-normal my-4 text-blue-2">
        {!about?.length ? (
          <div>
            <h2 className="text-blue-2 text-center">
              <p>No About Compoany</p>
            </h2>
          </div>
        ) : (
          <MDEditor.Markdown className="text-blue-1" source={about} />
        )}
      </p>
      {Number(about?.length) >= 350 && (
        <p className="text-xs md:text-sm font-bold text-blue cursor-pointer" onClick={() => setOpen(prev => !prev)}>
          {!open ? 'Read more ...' : 'Hide'}
        </p>
      )}
    </div>
  )
}
