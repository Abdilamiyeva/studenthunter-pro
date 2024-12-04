import {BoldTabs, Button} from '@/components/common'
import {PlusIcon} from '@/icons'
import {Bachelor, Foundation, Masters, PHD} from './components'

export const UniversityPrograms = () => (
  <BoldTabs
    tabs={[
      {label: 'Foundation', children: <Foundation />},
      {label: 'Bachelor', children: <Bachelor />},
      {label: 'Masters', children: <Masters />},
      {label: 'PHD', children: <PHD />},
    ]}
    leftSideContent={
      <div className="flex flex-col sm:flex-row w-full xl:w-auto justify-end">
        <Button
          theme="orange"
          icon={<PlusIcon className="w-4 h-4" />}
          className="px-7 py-2 text-sm font-bold leading-6 rounded bg-orange-6 hover:bg-orange-6/90 border-orange-6"
        >
          Add new program
        </Button>
      </div>
    }
    tabsClassName="flex flex-wrap xl:flex-nowrap items-start gap-3 justify-between"
  />
)
