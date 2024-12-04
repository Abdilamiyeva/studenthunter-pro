import {BoldTabs, Button} from '@/components/common'
import {DownloadIcon, PlusIcon} from '@/icons'
import {ActiveCompanies, CreateForm, RequestedCompanies} from './components'
import {useToast} from '@/components/ui/use-toast'
import {useState} from 'react'

export const AdminCompanies = () => {
  const [openCreateForm, setOpenCreateForm] = useState(false)
  const {toast} = useToast()

  return (
    <>
      <BoldTabs
        tabs={[
          {label: 'Active Companies', children: <ActiveCompanies />},
          {label: 'Requested Companies', children: <RequestedCompanies />},
        ]}
        leftSideContent={
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end w-full xl:w-auto gap-2 sm:gap-5">
            <Button
              onClick={() => toast({title: 'Download feature coming soon!'})}
              theme="orange"
              icon={<DownloadIcon className="w-4 h-4" />}
              className="min-w-max px-5 py-2 text-sm font-bold leading-6 bg-orange-6 hover:bg-orange-6/90 border-orange-6"
            >
              &nbsp;Download Excel file
            </Button>
            <Button
              onClick={() => setOpenCreateForm(true)}
              theme="orange"
              icon={<PlusIcon className="w-4 h-4" />}
              className="min-w-max px-5 py-2 text-sm font-bold leading-6 bg-orange-6 hover:bg-orange-6/90 border-orange-6"
            >
              &nbsp;Add new company
            </Button>
          </div>
        }
        tabsClassName="flex flex-wrap xl:flex-nowrap items-start gap-3 justify-between"
      />
      <CreateForm open={openCreateForm} close={() => setOpenCreateForm(false)} />
    </>
  )
}
