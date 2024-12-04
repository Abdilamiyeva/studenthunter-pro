import {Tabs} from '@/components/common'
import {Bachelor} from './components/bachelor'
import {Masters} from './components/masters'
import {Mba} from './components/mba'
import {Phd} from './components/phd'
import {Tab} from '@/components/common/tabs/types'

export const ProgramsFromUniversity = () => {
  const tabData: Tab[] = [
    {children: <Bachelor />, key: 'bachelor', label: 'Bachelor'},
    {children: <Masters />, key: 'masters', label: 'Masters'},
    {children: <Mba />, key: 'mba', label: 'MBA'},
    {children: <Phd />, key: 'phd', label: 'PHD'},
  ]

  return (
    <div className="w-full py-4 md:px-5 mt-10">
      <h1 className="font-bold md:text-2xl leading-5 md:leading-9 text-blue mb-4">More Programs from the University</h1>
      <Tabs tabs={tabData} />
    </div>
  )
}
