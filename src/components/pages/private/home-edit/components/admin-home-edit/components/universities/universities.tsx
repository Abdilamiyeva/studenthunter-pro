import {Button} from '@/components/common'
import {CheckedIcon} from '@/icons'
import {UniversityCard, UpdateForm} from './components'
import {useState} from 'react'
import {Props} from './types'

export const Universities = ({universities}: Props) => {
  const [openUpdateForm, setOpenUpdateForm] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold leading-7.5">Institutional Highlights</h1>
        <Button
          onClick={() => setOpenUpdateForm(true)}
          theme="orange"
          icon={<CheckedIcon />}
          className="flex items-center gap-2 px-6 text-base font-bold leading-6.5 py-2 rounded-lg bg-orange-6 border-orange-6 hover:bg-orange-6/90"
          noSpaceBetweenIcon
        >
          Update
        </Button>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4 sm:mt-10">
        {universities.map(university => (
          <UniversityCard key={university._id} university={university} />
        ))}
      </div>

      <UpdateForm close={() => setOpenUpdateForm(false)} open={openUpdateForm} universities={universities} />
    </>
  )
}
