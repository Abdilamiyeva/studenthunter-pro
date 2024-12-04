import {Tabs} from '@/components/common'
import {Tab} from '@/components/common/tabs/types'
import {Bachelor} from './components/bachelor'
import {Masters} from './components/masters'
import {Mba} from './components/mba'
import {Phd} from './components/phd'
import {Props} from './types'

export const AvailablePrograms = ({setSelectProgram, selectProgram}: Props) => {
  const tabData: Tab[] = [
    {
      children: <Bachelor selectProgram={selectProgram} setSelectProgram={setSelectProgram} />,
      key: 'bachelor',
      label: 'Bachelor',
    },
    {
      children: <Masters selectProgram={selectProgram} setSelectProgram={setSelectProgram} />,
      key: 'masters',
      label: 'Masters',
    },
    {children: <Mba selectProgram={selectProgram} setSelectProgram={setSelectProgram} />, key: 'mba', label: 'MBA'},
    {children: <Phd selectProgram={selectProgram} setSelectProgram={setSelectProgram} />, key: 'phd', label: 'PHD'},
  ]

  return (
    <div className="w-full py-4 mt-10  md:px-5 sm:py-6">
      <h1 className="font-bold  md:text-2xl leading-9 text-blue mb-4">Available Programs</h1>
      <Tabs tabItemClassName="w-full" tabs={tabData} />
    </div>
  )
}
