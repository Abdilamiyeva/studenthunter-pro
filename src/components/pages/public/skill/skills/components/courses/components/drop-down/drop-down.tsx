import {RightArrowIcon} from '@/icons'
import {Props} from './types'
import {useState} from 'react'
import {HoverCardContent} from '@/components/ui/hover-card'
import {Link} from 'react-router-dom'

export const DropDown = ({category}: Props) => {
  const [first, setFirst] = useState<any>([])
  const [second, setSecond] = useState<any>([])

  return (
    <HoverCardContent side="left" className="mt-12 border-blue-4 w-auto z-10 border p-6 bg-white rounded-2xl absolute">
      <div className="w-full h-full flex lg:flex-row flex-col ">
        <ul className="flex w-[316px] max-h-[462px] overflow-y-auto flex-col gap-y-7" onMouseOver={() => setSecond([])}>
          {category.map(item => (
            <li>
              <Link
                to="/skills/topic/1"
                onMouseOver={() => setFirst(item.child)}
                className="w-full text-blue-2 transition-all hover:text-blue pb-2 flex justify-between items-center cursor-pointer text-base font-medium leading-relaxed"
              >
                {item.name}
                <RightArrowIcon className="w-4 h-4" />
              </Link>
            </li>
          ))}
        </ul>
        {Boolean(first.length) && (
          <div className="relative mx-10">
            <span className="absolute top-0 left-0 w-px h-full bg-blue-4"></span>
          </div>
        )}
        {Boolean(first.length) && (
          <ul className="max-h-[462px] overflow-y-auto flex w-[316px]  flex-col gap-y-7">
            {first.map((item: any) => (
              <li onMouseOver={() => setSecond(item.child)}>
                <Link
                  to="/skills/topic/2"
                  className="w-full text-blue-2 pb-2 transition-all hover:text-blue flex justify-between items-center cursor-pointer text-base font-medium leading-relaxed"
                >
                  {item?.name}
                  <RightArrowIcon className="w-4 h-4" />
                </Link>
              </li>
            ))}
          </ul>
        )}
        {Boolean(second.length) && (
          <div className="relative mx-10">
            <span className="absolute top-0 left-0 w-px h-full bg-blue-4"></span>
          </div>
        )}
        {Boolean(second.length) && (
          <ul className="max-h-[462px] overflow-y-auto flex w-[316px]  flex-col gap-y-7">
            {second.map((item: any) => (
              <li>
                <Link
                  to="/skills/topic/1"
                  className="w-full text-blue-2 pb-2 transition-all hover:text-blue flex justify-between items-center cursor-pointer text-base font-medium leading-relaxed"
                >
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </HoverCardContent>
  )
}
