import {BoldTabs, Button} from '@/components/common'
import {CollegeIcon} from '@/icons'
import {AppliedColleges} from './components/applied-colleges'
import {SavedColleges} from './components/saved-colleges'

export const UserUniversities = () => (
  <BoldTabs
    tabs={[
      {label: 'Applied Colleges', children: <AppliedColleges />},
      {label: 'Saved Colleges', children: <SavedColleges />},
    ]}
    leftSideContent={
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end w-full xl:w-auto gap-2 sm:gap-5">
        <Button className="bg-orange-6 border-none hover:bg-orange-6" icon={<CollegeIcon />}>
          Explore more colleges
        </Button>
      </div>
    }
    tabsClassName="flex flex-wrap xl:flex-nowrap items-start gap-3 justify-between"
  />
)
