import {TableCell, TableRow} from '@/components/common/table/components'
import {Props} from './types'
import {DotsDropdown, Image} from '@/components/common'
import {EditIcon, TrashIcon} from '@/icons'

export const UserRow = ({index}: Props) => (
  <TableRow>
    <TableCell className="text-xs font-semibold leading-5">{index + 1}</TableCell>
    <TableCell>
      <div className="flex items-center gap-4">
        <Image
          src="/images/demo-user.svg"
          alt="Demo user"
          imageClassName="min-w-[40px] w-10 min-h-[40px] h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-semibold leading-5">Lola</p>
          <p className="text-blue-2 text-xs leading-4">Aliyeva</p>
        </div>
      </div>
    </TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">Web design</TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">5</TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">5.5</TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5 text-center">1450</TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5">
      <div className="bg-green text-white py-0.5 px-3 rounded text-sm font-medium leading-5 w-max mx-auto">
        Accepted
      </div>
    </TableCell>
    <TableCell className="text-blue-1 text-sm font-medium leading-5">
      <div className="grid place-content-center">
        <DotsDropdown
          buttons={[
            {
              label: 'Delete',
              icon: <TrashIcon className="w-3.5 h-3.5" />,
              className: 'text-orange hover:!text-orange hover:!bg-orange/10',
            },
            {
              label: 'Edit',
              icon: <EditIcon className="w-3.5 h-3.5" />,
              className: 'text-green hover:!text-green hover:!bg-green/10',
            },
          ]}
        />
      </div>
    </TableCell>
  </TableRow>
)
