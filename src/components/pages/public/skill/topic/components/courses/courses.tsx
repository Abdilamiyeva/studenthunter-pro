import {Button, Filter} from '@/components/common'
import {ArrowUpIcon, SearchIcon} from '@/icons'
import {FILTERS_DATA} from './mock'
import {ComponentType} from '@/components/common/filter/types'
import {Card, DropDown} from './components'
import {HoverCard, HoverCardTrigger} from '@/components/ui/hover-card'
import {CategoriesData} from './constants'

export const Courses = () => (
  <>
    <div className="relative container mb-20">
      <div className="absolute w-full -top-14 mb-16">
        <div className="flex justify-between top-2 gap-x-3 relative">
          <div className="w-[15%] relative">
            <HoverCard>
              <HoverCardTrigger className="" asChild>
                <button className="cursor-pointer w-full flex justify-center items-center gap-x-4 bg-white h-full border border-blue-4 text-blue-2 text-xl leading-8 font-medium rounded-lg">
                  Categories <ArrowUpIcon />
                </button>
              </HoverCardTrigger>
              <DropDown category={CategoriesData} />
            </HoverCard>
          </div>
          <div className="w-[85%]">
            <div className="bg-white flex items-center justify-between py-4 pr-5 pl-8  rounded-lg border border-blue-4">
              <input type="text" className="text-xl font-medium leading-9" placeholder="Search for anything" />
              <Button theme="orange" icon={<SearchIcon />} className="px-9 py-4">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-20 container">
      <div className="flex justify-between items-center">
        <h1 className="text-blue text-4xl font-bold leading-8">Figma Courses</h1>
        <p className="text-blue-2 text-2xl font-medium leading-10">170 results</p>
      </div>
      <div className="flex gap-x-12 my-8">
        <div className="w-[25%]">
          <Filter
            className="border border-blue-4 px-6 py-5 rounded-lg bg-orange-9"
            components={FILTERS_DATA as ComponentType[]}
          />
        </div>
        <div className="w-[75%] flex flex-col gap-y-8">
          {new Array(10).fill(' ').map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  </>
)
