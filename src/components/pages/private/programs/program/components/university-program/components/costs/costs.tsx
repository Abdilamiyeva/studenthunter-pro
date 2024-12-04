import {useMemo} from 'react'
import {Button} from '@/components/common'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {EditIcon} from '@/icons'
import {Scholarship, TuitionFee} from './components'

export const Costs = () => {
  const tabs = useMemo(
    () => [
      {label: 'Tuition Fee', key: 'tuition-fee', children: <TuitionFee />},
      {label: 'Scholarship', key: 'scholarship', children: <Scholarship />},
    ],
    [],
  )

  return (
    <section id="costs" className="mt-20 border border-blue-4 rounded-2xl pt-3 pb-3 px-5 sm:pt-5 sm:pb-7 sm:px-7">
      <div className="flex items-center justify-between mb-6">
        <h5 className="text-xl font-bold leading-7.5">Costs</h5>
        <Button className="rounded px-7 h-8 py-1 text-sm" icon={<EditIcon className="w-3 h-3" />}>
          Edit
        </Button>
      </div>
      <Tabs defaultValue={tabs[0].key}>
        <TabsList className="w-full flex items-center bg-transparent gap-x-7 justify-between p-0 relative after:absolute after:bottom-0 after:left-0 after:w-full after:!h-0.5 after:bg">
          <div className="w-full flex gap-x-7 justify-start p-0 relative before:absolute before:h-0.5 before:w-full before:bg-blue-4 before:top-8 before:rounded-full">
            {tabs.map(tab => (
              <TabsTrigger
                key={tab.key}
                value={tab.key}
                className="text-base data-[state=active]:text-blue !bg-transparent !shadow-none p-0 font-semibold relative after:absolute after:top-8 after:left-0 after:z-10 after:w-full after:h-0.5 after:rounded-full data-[state=active]:after:bg-blue after:duration-default pb-8"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
        {tabs.map(tab => (
          <TabsContent key={tab.key} value={tab.key}>
            {tab.children}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
