import {Button} from '@/components/common'
import {ArrowUpIcon, SearchIcon} from '@/icons'
import {ALL_RECOMMENDED_DATA} from './mock'
import {Card, DropDown} from './components'
import {CategoriesData} from './constants'
import {HoverCard, HoverCardTrigger} from '@/components/ui/hover-card'
import React from 'react'

export const Courses = () => (
  <React.Fragment>
    <div className="relative container mb-20">
      <div className="absolute w-full left-2 -top-14 mb-16">
        <div className="flex justify-between top-2 gap-x-1 pr-4 lg:gap-x-3 relative">
          <div className="w-[20%] lg:w-[15%] relative">
            <HoverCard>
              <HoverCardTrigger className="" asChild>
                <button className="cursor-pointer w-full px-2 lg:px-0 flex justify-center items-center gap-x-4 bg-white h-full border border-blue-4 text-blue-2 text-xl leading-8 font-medium rounded-lg">
                  <span className="text-xs lg:text-lg">Categories</span> <ArrowUpIcon />
                </button>
              </HoverCardTrigger>
              <DropDown category={CategoriesData} />
            </HoverCard>
          </div>
          <div className="w-[80%] lg:w-[85%]">
            <div className="bg-white flex items-center justify-between py-3 lg:py-4 pr-5 pl-8  rounded-lg border border-blue-4">
              <input
                type="text"
                className="text-sm lg:text-xl font-medium leading-9"
                placeholder="Search for anything"
              />
              <Button
                theme="orange"
                icon={<SearchIcon className="min-w-4 min-h-4 md:min-w-[20px] md:min-h-[20px] ml-2  md:mr-2" />}
                className="p-2 text-xl w-max md:px-9 md:py-[15px]"
              >
                <span className="hidden md:inline">Search</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-20 container">
      <h1 className="text-blue lg:text-4xl font-bold leading-8 my-7">Recommended for you</h1>
      <div className="grid grid-cols-1 gap-y-7 lg:gap-y-0  md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-16">
        {ALL_RECOMMENDED_DATA.map((item, index) => (
          <Card key={index} course={item} />
        ))}
      </div>
    </div>
    <div className="container mt-20">
      <h1 className="text-blue lg:text-4xl font-bold leading-8 my-7">Featured Courses</h1>
      <div className="grid grid-cols-1 gap-y-7 lg:gap-y-0  md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-16">
        {ALL_RECOMMENDED_DATA.map((item, index) => (
          <Card key={index} course={item} />
        ))}
      </div>
    </div>
    <div className="container mt-20">
      <h1 className="text-blue lg:text-4xl font-bold leading-8 my-7">Popular for Web Designers</h1>
      <div className="grid grid-cols-1 gap-y-7 lg:gap-y-0  md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-16">
        {ALL_RECOMMENDED_DATA.map((item, index) => (
          <Card key={index} course={item} />
        ))}
      </div>
    </div>
  </React.Fragment>
)
