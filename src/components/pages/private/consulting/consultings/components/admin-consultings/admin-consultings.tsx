import {BoldTabs, Button} from '@/components/common'
import {DownloadIcon, PlusIcon} from '@/icons'
import {ActiveConsultings, CreateForm, RequestedConsultings} from './components'
import {useState} from 'react'

export const AdminConsultings = () => {
  const [openCreateForm, setOpenCreateForm] = useState(false)

  return (
    <>
      <BoldTabs
        tabs={[
          {label: 'Active Consultings', children: <ActiveConsultings />},
          {label: 'Requested Consultings', children: <RequestedConsultings />},
        ]}
        leftSideContent={
          <div className="flex flex-col sm:flex-row sm:items-center w-full xl:w-auto justify-end gap-2 sm:gap-5">
            <Button
              theme="orange"
              icon={<DownloadIcon className="w-4 h-4" />}
              className="px-5 py-2 text-sm font-bold leading-6 bg-orange-6 hover:bg-orange-6/90 border-orange-6"
            >
              &nbsp;Download Excel file
            </Button>
            <Button
              theme="orange"
              icon={<PlusIcon className="w-4 h-4" />}
              className="px-5 py-2 text-sm font-bold leading-6 bg-orange-6 hover:bg-orange-6/90 border-orange-6"
              onClick={() => setOpenCreateForm(true)}
            >
              &nbsp;Add new consulting
            </Button>
          </div>
        }
        tabsClassName="flex flex-wrap xl:flex-nowrap items-start gap-3 justify-between"
      />
      <CreateForm open={openCreateForm} close={() => setOpenCreateForm(false)} />
    </>
  )
}
