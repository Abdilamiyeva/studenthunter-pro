import {BoldTabs, Button} from '@/components/common'
import {PlusIcon} from '@/icons'
import {ArchivedBlogs, DraftBlogs, PublishedBlogs} from './components'
import {Link} from 'react-router-dom'

export const AdminBlogs = () => (
  <div>
    <BoldTabs
      tabs={[
        {label: 'Published', children: <PublishedBlogs />},
        {label: 'Drafts', children: <DraftBlogs />},
        {label: 'Archived', children: <ArchivedBlogs />},
      ]}
      leftSideContent={
        <div className="flex flex-col sm:flex-row w-full xl:w-auto justify-end">
          <Link to="/dashboard/blogs/new">
            <Button
              theme="orange"
              className="w-full bg-orange-6 hover:bg-orange-6/90 border-orange-6 py-2.5 px-7 leading-6 text-sm rounded duration-default"
              icon={<PlusIcon className="w-5 h-5" />}
            >
              Add new blog
            </Button>
          </Link>
        </div>
      }
      tabsClassName="flex flex-wrap xl:flex-nowrap items-start gap-3 justify-between"
    />
  </div>
)
