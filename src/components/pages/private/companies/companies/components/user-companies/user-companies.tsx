import {BoldTabs, Button} from '@/components/common'
import {UniversityIcon} from '@/icons'
import {AppliedCompanies, SavedCompanies} from './components'

export const UserCompanies = () => (
  <div>
    <BoldTabs
      tabs={[
        {label: 'Applied Companies', children: <AppliedCompanies />},
        {label: 'Saved Companies', children: <SavedCompanies />},
      ]}
      leftSideContent={
        <div className="flex flex-col sm:flex-row w-full xl:w-auto justify-end">
          <Button
            icon={<UniversityIcon className="w-4 h-4" />}
            theme="orange"
            className="min-w-max bg-orange-6 border-orange-6 hover:bg-orange-6/90 text-sm font-bold leading-6"
          >
            &nbsp;&nbsp;Explore more companies
          </Button>
        </div>
      }
      tabsClassName="flex flex-wrap xl:flex-nowrap items-start gap-3 justify-between"
    />
  </div>
)
