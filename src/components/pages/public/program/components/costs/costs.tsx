import {Tabs} from '@/components/common'
import {LivingConsts, ScholarShip, TuitionFee} from './components'
import {Props} from './types'

export const Costs = ({program}: Props) => (
  <div className="w-full py-4 md:px-5 mt-10">
    <h1 className="font-bold md:text-2xl md:leading-9 leading-5 text-blue mb-4">Costs</h1>
    <Tabs
      tabs={[
        {
          label: 'Tuition Fee',
          children: <TuitionFee universityId={program.university_id._id} fee={program?.fee} />,
          key: 'tuition_fee',
        },
        {
          label: 'Scholarship',
          children: <ScholarShip description={program?.scholarship_description as string} />,
          key: 'scholarship',
        },
        {
          label: 'Living costs',
          children: <LivingConsts program={program} />,
          key: 'living_costs',
        },
      ]}
    />
  </div>
)
