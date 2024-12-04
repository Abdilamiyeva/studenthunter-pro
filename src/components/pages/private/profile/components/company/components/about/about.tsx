import {Button} from '@/components/common'
import {EditIcon} from '@/icons'
import {EditForm} from './components'
import {useState} from 'react'

export const About = () => {
  const [open, setOpen] = useState(false)
  return (
    <section id="about" className="section mt-10 md:mt-20 bg-blue-7 py-4 px-5 sm:py-6 sm:px-8 rounded-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-7 gap-1">
        <h5 className="text-xl font-bold leading-7.5">About Company</h5>
        <Button
          icon={<EditIcon className="w-3 h-3" />}
          className="w-full sm:w-auto px-7 py-1.5 rounded text-sm font-bold leading-6 mt-2 sm:mt-0"
          onClick={() => setOpen(true)}
        >
          Edit
        </Button>
      </div>
      <p className="my-4 text-blue-1 text-sm leading-6">
        We're looking for a detail oriented, results driven, Graphic Designer that thrives working in start-up
        environments and is well versed in providing creative support. The ideal candidate for this role has a track
        record of operating with a sense of urgency, genetic information, marital status, medical condition, national
        origin, physical or mental disability, political affiliation, protected veteran status, race, religion, sex
        (including pregnancy), sexual orientation, or any other characteristic protected ...
      </p>
      <button className="text-sm font-bold leading-5">Read more ...</button>
      <EditForm open={open} close={() => setOpen(false)} />
    </section>
  )
}
