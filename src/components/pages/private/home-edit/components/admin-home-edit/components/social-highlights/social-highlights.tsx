import {Button} from '@/components/common'
import {PlusIcon} from '@/icons'
import {AddForm, HighLightCard} from './components'
import {useState} from 'react'
import {Props} from './types'

export const SocialHighLights = ({highlights}: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        theme="orange"
        icon={<PlusIcon className="w-5 sm:w-8 h-5 sm:h-8" />}
        className="text-base sm:text-xl font-bold leading-7.5 px-4 sm:px-6 py-1.5 sm:py-2.5 flex items-center gap-1 bg-orange-6 border-orange-6 hover:bg-orange-6/90 w-max ml-auto rounded sm:rounded-lg"
        noSpaceBetweenIcon
        onClick={() => setOpen(true)}
      >
        Add new
      </Button>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4 sm:mt-10">
        {highlights.map(highlight => (
          <HighLightCard key={highlight._id} highlight={highlight} />
        ))}
      </div>
      <AddForm open={open} close={() => setOpen(false)} />
    </>
  )
}
