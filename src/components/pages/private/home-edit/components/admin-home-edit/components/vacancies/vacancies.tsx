import {Button} from '@/components/common'
import {CheckedIcon} from '@/icons'
import {UpdateForm, VacancyCard} from './components'
import {useState} from 'react'
import {Props} from './types'

export const Vacancies = ({vacancies}: Props) => {
  const [openUpdateForm, setOpenUpdateForm] = useState(false)

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold leading-7.5">Vacancy Highlights</h1>
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
        {vacancies.map(vacancy => (
          <VacancyCard key={vacancy._id} vacancy={vacancy} />
        ))}
      </div>
      <UpdateForm open={openUpdateForm} close={() => setOpenUpdateForm(false)} vacancies={vacancies} />
    </>
  )
}
