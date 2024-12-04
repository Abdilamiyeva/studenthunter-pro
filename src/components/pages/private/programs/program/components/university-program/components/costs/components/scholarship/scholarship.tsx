import {Button} from '@/components/common'
import {DownloadIcon} from '@/icons'

export const Scholarship = () => (
  <div>
    <p className="text-blue-1 text-sm leading-6 mb-5">
      One of the important factors when considering a master's degree is the cost of study. Luckily, there are many
      options available to help students fund their master's programme. Download your copy of the Scholarship Guide to
      find out which scholarships from around the world could be available to you, and how to apply for them.
    </p>
    <Button icon={<DownloadIcon className="w-4 h-4" />} className="py-2.5 px-4 rounded-lg text-sm leading-6">
      Download scholarship guide
    </Button>
  </div>
)
