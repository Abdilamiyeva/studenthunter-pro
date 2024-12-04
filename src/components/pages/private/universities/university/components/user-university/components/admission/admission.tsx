import {Tabs} from '@/components/common'
import {TabsData} from './constants/admission'

export const Admission = () => (
  <section id="admission" className="section">
    <div className="w-full py-4 px-5 sm:py-6 sm:px-8">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl leading-9 text-blue mb-4">Admission</h1>
      </div>
      <Tabs tabs={TabsData} />
    </div>
  </section>
)
