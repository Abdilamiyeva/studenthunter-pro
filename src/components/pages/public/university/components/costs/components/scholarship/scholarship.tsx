import {DownloadIcon} from '@/icons'
import {Props} from './types'
import {Button} from '@/components/common'
import {getFile} from '@/utils/get-file'

export const ScholarShip = ({program, selectProgram}: Props) => (
  <div className="w-full">
    {!selectProgram && (
      <div className="flex justify-center items-center h-20 text-blue-2">
        <p> Plaease Select Program </p>
      </div>
    )}
    {selectProgram && !program?.fee_description ? (
      <div>
        <p className="text-sm font-normal leading-normal text-blue-2">No Scholarship Description</p>
      </div>
    ) : (
      <p className="text-sm text-blue-3">{program?.fee_description}</p>
    )}
    {program?.fee_description && (
      <a download target="_self" href={getFile(program?.scholarship as string)}>
        <Button className="text-sm font-normal mt-5" icon={<DownloadIcon className="w-3 h-3 md:w-5 md:h-5" />}>
          Download Scholarship guide
        </Button>
      </a>
    )}
  </div>
)
