import {BoldTabs, Button} from '@/components/common'
import {ActiveUniversities, RequestedUniversities} from './components'
import {DownloadIcon} from '@/icons/download'
import {PlusIcon} from '@/icons'
import {CreateForm} from './components/create-form'
import React, {useState} from 'react'
import {useToast} from '@/components/ui/use-toast'

export const AdminUniversities = () => {
  const [openCreateForm, setOpenCreateForm] = useState(false)
  const {toast} = useToast()

  return (
    <React.Fragment>
      <BoldTabs
        tabs={[
          {label: 'Active Universities', children: <ActiveUniversities />},
          {label: 'Requested Universities', children: <RequestedUniversities />},
        ]}
        leftSideContent={
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end w-full xl:w-auto gap-2 sm:gap-5">
            <Button
              className="bg-orange-6 border-none hover:bg-orange-6 text-sm font-bold leading-6 px-5 py-2 gap-3"
              icon={<DownloadIcon className="w-4 h-4" />}
              noSpaceBetweenIcon
              onClick={() => toast({title: 'Download feature coming soon!'})}
            >
              Download Excel file
            </Button>
            <Button
              className="bg-orange-6 border-none hover:bg-orange-6 text-sm font-bold leading-6 px-5 py-2 gap-3"
              icon={<PlusIcon />}
              noSpaceBetweenIcon
              onClick={() => setOpenCreateForm(true)}
            >
              Add new university
            </Button>
          </div>
        }
        tabsClassName="flex flex-wrap xl:flex-nowrap items-start gap-3 justify-between"
      />
      <CreateForm close={() => setOpenCreateForm(false)} open={openCreateForm} />
    </React.Fragment>
  )
}
