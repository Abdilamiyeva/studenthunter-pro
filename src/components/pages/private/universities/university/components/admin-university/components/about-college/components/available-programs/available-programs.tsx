import {Button, Tabs} from '@/components/common'
import {Bachelor} from './components/bachelor'
import {Masters} from './components/masters'
import {Mba} from './components/mba'
import {Phd} from './components/phd'
import {PopoverContent, PopoverTrigger, Popover} from '@/components/ui/popover'
import {ArrowUpIcon, EditIcon} from '@/icons'
import {useMemo} from 'react'

export const AvailablePrograms = () => {
  const tabData = useMemo(
    () => [
      {children: <Bachelor />, key: 'bachelor', label: 'Bachelor'},
      {children: <Masters />, key: 'masters', label: 'Masters'},
      {children: <Mba />, key: 'mba', label: 'MBA'},
      {children: <Phd />, key: 'phd', label: 'PHD'},
    ],
    [],
  )
  return (
    <section id="available-programs" className="section">
      <div className="w-full py-4 px-5 sm:py-6 sm:px-8">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl leading-9 text-blue mb-4">Available Programs</h1>
          <Button icon={<EditIcon className="w-3 h-3" />} className="rounded my-2 w-24 h-7 py-1 px-3 text-sm">
            Edit
          </Button>
        </div>
        <Tabs tabs={tabData} />
        <Popover>
          <PopoverTrigger className="my-10">
            <div className="flex gap-x-2 items-center">
              <span>View All</span> <ArrowUpIcon className="w-5 h-5" />
            </div>
          </PopoverTrigger>
          <PopoverContent>View All </PopoverContent>
        </Popover>
      </div>
    </section>
  )
}
