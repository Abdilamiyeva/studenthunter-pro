import {Button, Tabs} from '@/components/common'
import {TabsData} from './constants/admission'
import {EditIcon} from '@/icons'

export const Admission = () => (
  <section id="admission" className="section">
    <div className="w-full py-4 px-5 sm:py-6 sm:px-8">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl leading-9 text-blue mb-4">Admission</h1>
        <Button icon={<EditIcon className="w-3 h-3" />} className="rounded  h-7 py-1 px-7 text-sm">
          Edit
        </Button>
      </div>
      <Tabs tabs={TabsData} />
    </div>
  </section>
)
