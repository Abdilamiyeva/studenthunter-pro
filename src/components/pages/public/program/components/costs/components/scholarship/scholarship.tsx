import {Button} from '@/components/common'
import {DownloadIcon} from '@/icons'
import {Props} from './types'

export const ScholarShip = ({description}: Props) => (
  <div className="w-full">
    {description ? (
      <p className="text-sm text-blue-3">{description}</p>
    ) : (
      <div className="flex text-blue-2 justify-center h-20 items-center">
        <p>No Scholarship Description</p>
      </div>
    )}

    {description && (
      <Button className="text-sm font-normal mt-5" icon={<DownloadIcon className="w-3 h-3 md:w-5 md:h-5" />}>
        Download Scholarship guide
      </Button>
    )}
  </div>
)
