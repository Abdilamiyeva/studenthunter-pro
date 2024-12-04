import {BoldTabs, Button} from '@/components/common'
import {DownloadIcon} from '@/icons'
import {ConsultingProfile, ConsultingUniversities} from './components'

export const AdminConsulting = () => (
  <BoldTabs
    tabs={[
      {label: 'Consulting Profile', children: <ConsultingProfile />},
      {label: 'Consulitng Colleges', children: <ConsultingUniversities />},
    ]}
    leftSideContent={
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end w-full xl:w-auto gap-2 sm:gap-5">
        <Button
          theme="orange"
          icon={<DownloadIcon className="w-4 h-4" />}
          className="px-5 py-2 text-sm font-bold leading-6 bg-orange-6 hover:bg-orange-6/90 border-orange-6"
        >
          &nbsp;Download Excel file
        </Button>
      </div>
    }
    tabsClassName="flex flex-wrap xl:flex-nowrap items-start gap-3 justify-between"
  />
)
