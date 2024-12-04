import {Button, Tabs} from '@/components/common'
import {PlusIcon} from '@/icons'
import {Faculties, CreateForm} from './components'
import {useState} from 'react'
import {STUDY_LEVELS} from '@/constants/study-levels'
import {useParams} from 'react-router-dom'

export const CollegePrograms = () => {
  const {id} = useParams()
  const [openCreateForm, setOpenCreateForm] = useState(false)

  return (
    <div>
      <Tabs
        tabs={STUDY_LEVELS.map(studyLevel => ({
          label: studyLevel.label,
          children: <Faculties level={studyLevel.value} />,
          key: studyLevel.value,
        }))}
        className="my-8"
        rightElement={
          <Button
            onClick={() => setOpenCreateForm(true)}
            className="mb-5 px-5 py-2 text-sm font-bold leading-6 bg-orange-6 border-transparent hover:bg-orange-6/90"
            icon={<PlusIcon />}
          >
            Add new program
          </Button>
        }
      />
      <CreateForm open={openCreateForm} close={() => setOpenCreateForm(false)} universityID={id as string} />
    </div>
  )
}
