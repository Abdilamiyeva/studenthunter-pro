import {Tabs} from '@/components/common'
import {Props} from './types'
import {Summary, Requriments, DeadLine} from './components'
export const Admission = ({universityItem}: Props) => (
  <div className="w-full py-4 md:px-5 sm:py-6 sm:px-8">
    <h1 className="font-bold md:text-2xl md:leading-9 leading-5 text-blue mb-4">Admission</h1>
    <Tabs
      tabs={[
        {
          label: 'Summary',
          children: <Summary summary={universityItem.summary as string} />,
          key: 'summary',
        },
        {
          label: 'Requriments',
          children: <Requriments requriments={[]} />,
          key: 'Requriments',
        },
        {
          label: 'Deadline',
          children: <DeadLine university={universityItem} />,
          key: 'deadline',
        },
      ]}
    />
  </div>
)
