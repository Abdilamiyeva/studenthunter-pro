import {Tabs} from '@/components/common'
import {Props} from './types'
import {Deadline, Requirements, Summary} from './components'

export const Admission = ({program}: Props) => (
  <div className="w-full md:py-4 mt-10 md:px-5 ">
    <h1 className="font-bold md:text-2xl md:leading-9 leading-5 text-blue mb-4">Admission</h1>
    <Tabs
      tabs={[
        {label: 'Summary', children: <Summary summary={program.summary as string} />, key: 'summary'},
        {
          label: 'Requirements',
          children: <Requirements requirements={program?.requirements as []} />,
          key: 'requirements',
        },
        {
          label: 'Deadline',
          children: <Deadline program={program} />,
          key: 'deadline',
        },
      ]}
    />
  </div>
)
