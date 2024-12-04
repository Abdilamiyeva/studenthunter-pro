import {Button, Tabs} from '@/components/common'
import {PlusIcon} from '@/icons'
import {AddForm, Companies, Universities, Users} from './components'
import {useState} from 'react'
import {Props} from './types'
import {FeedbackType} from '@/constants/statusues'

export const Feedbacks = ({feedbacks}: Props) => {
  const [open, setOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState<FeedbackType>(FeedbackType.USER)

  return (
    <div>
      <Tabs
        tabs={[
          {
            label: 'Users',
            key: FeedbackType.USER,
            children: <Users feedbacks={feedbacks.filter(feedback => feedback.type === FeedbackType.USER)} />,
          },
          {
            label: 'Universities',
            key: FeedbackType.UNIVERSITY,
            children: (
              <Universities feedbacks={feedbacks.filter(feedback => feedback.type === FeedbackType.UNIVERSITY)} />
            ),
          },
          {
            label: 'Company',
            key: FeedbackType.COMPANY,
            children: <Companies feedbacks={feedbacks.filter(feedback => feedback.type === FeedbackType.COMPANY)} />,
          },
        ]}
        rightElement={
          <Button
            theme="orange"
            icon={<PlusIcon className="w-5 sm:w-8 h-5 sm:h-8" />}
            className="text-base sm:text-xl font-bold leading-7.5 px-4 sm:px-6 py-1.5 sm:py-2.5 flex items-center gap-1 bg-orange-6 border-orange-6 hover:bg-orange-6/90 w-max mt-4 md:mt-0 ml-auto rounded sm:rounded-lg"
            noSpaceBetweenIcon
            onClick={() => setOpen(true)}
          >
            Add new
          </Button>
        }
        tabItemClassName="mb-28 md:mb-10"
        selectedTab={selectedTab}
        onChange={(val: string) => setSelectedTab(val as FeedbackType)}
      />
      <AddForm open={open} close={() => setOpen(false)} type={selectedTab} />
    </div>
  )
}
