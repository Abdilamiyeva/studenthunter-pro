import {Button} from '@/components/common'
import {CheckIcon} from '@/icons'

export const Learn = () => (
  <div className="px-4 lg:px-0">
    <div className="p-2 lg:p-10 mb-10 border border-blue-4 rounded-[14px]">
      <h1 className="text-blue text-xl lg:text-4xl font-bold leading-10">What you’ll learn</h1>
      <div className="flex justify-between flex-wrap my-3">
        {[...new Array(5)].map((_, index) => (
          <div key={index} className="text-blue-1 w-full text-sm lg:text-base lg:w-1/2 p-2 flex  gap-x-4">
            <CheckIcon className="w-3 h-2 mt-[5px] " />
            Why code is the key to building whatever you can imagine with WordPress
          </div>
        ))}
      </div>
    </div>
    <Button className="px-6 lg:px-20 py-5 bg-orange-6 hover:bg-orange-6/95 border-transparent mb-24">
      Buy this course
    </Button>
  </div>
)
