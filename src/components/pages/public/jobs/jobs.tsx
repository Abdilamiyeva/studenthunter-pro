import {Button, Filter, Loader} from '@/components/common'
import {DotsRowIcon, FrameFilterIcon, SearchIcon} from '@/icons'
import {JobCard} from './components'
import {FILTERS} from './mock/filters'
import {ComponentType} from '@/components/common/filter/types'
import {KeyboardEvent, useEffect, useState} from 'react'
import {useLazyGetPublicJobsQuery} from '@/features/jobs'
import {useHandleRequest} from '@/hooks/use-handle-request'

export const JobsPage = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const [filter, setFilter] = useState({})
  const [getJobs, {data: jobs, isLoading, isFetching}] = useLazyGetPublicJobsQuery()
  const handleRequest = useHandleRequest()
  const [pageCount, setPageCount] = useState(5)
  const [search, setSearch] = useState('')
  const getFetchJobs = async () => {
    await handleRequest({
      request: async () => {
        const result = await getJobs({
          data: encodeURIComponent(JSON.stringify({...filter, per_page: pageCount, search})),
        })
        return result
      },
    })
  }

  const handleFilter = (filterData: object | any) => {
    const cleanArray = (data: Record<string, boolean>) => {
      const filteredKeys = Object.keys(data).filter(key => data[key])
      return filteredKeys.length > 0 ? filteredKeys : undefined
    }

    setFilter({
      experience_level: cleanArray(filterData.experience_level || {}),
      city: cleanArray(filterData.location?.cities || {}),
      country: cleanArray(filterData.location || {}),
      specialties: cleanArray(filterData.specialties || {}),
      job_type: cleanArray(filterData.job_type || {}),
      min_salary: filterData.salary.min,
      max_salary: filterData.salary.max,
      from_date: filterData.data_posted,
    })
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      getFetchJobs()
    }
  }

  useEffect(() => {
    getFetchJobs()
  }, [filter, pageCount])

  useEffect(() => {
    if (search === '') {
      getFetchJobs()
    }
  }, [search])

  useEffect(() => {
    document.body.style.overflow = isOpenFilter ? 'hidden' : 'auto'
  }, [isOpenFilter])

  useEffect(() => {
    setIsOpenFilter(false)
    document.body.style.overflow = 'scroll'
  }, [])

  if (isLoading) {
    return (
      <div className="h-80 relative">
        <Loader className="absolute" />
      </div>
    )
  }

  return (
    <section>
      <div className="bg-blue-5 text-center pt-20 pb-28 mb-3 px-4 md:px-0">
        <h1 className="text-4xl md:text-8xl font-bold leading-17 mb-4">Search for your next job</h1>
        <p className="max-w-[502px] text-center text-blue-1 mx-auto text-sm md:text-base">
          When you’re searching for a job, there are a few things you can do to get the most out of your search
        </p>
      </div>
      <div className="px-4 md:container md:py-4">
        <label className="flex items-stretch border border-blue-4 justify-between md:container bg-white shadow-box md:pt-3.5 md:pb-4 pl-7 md:pr-5 pr-2 rounded-lg -mt-9 md:-mt-14 md:mb-[60px] mb-8">
          <input
            onChange={e => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            type="search"
            placeholder="Job title, keyword or company"
            className="w-full text-xs md:text-xl"
          />
          <Button
            onClick={getFetchJobs}
            noSpaceBetweenIcon
            icon={<SearchIcon className="max-w-xl max-h-xl md:max-h-[20px] md:max-w-[20px]p md:ml-2 md:mr-2" />}
            className="bg-orange-6 rounded-[10px] border-transparent p-2 my-2 md:my-auto text-xl w-max md:px-9 md:py-[15px] hover:bg-orange-6"
          >
            <span className="hidden md:inline">Search</span>
          </Button>
        </label>
        <div className="container flex flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row gap-x-4 lg:gap-x-[74px] lg:px-0 px-5">
          <div className="w-full lg:w-[73%]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold leading-5 text-blue-2">Search results: {jobs?.total} </p>
              <button
                onClick={() => setIsOpenFilter(true)}
                className="md:hidden p-2 rounded border border-blue justify-center items-center inline-flex"
              >
                <FrameFilterIcon />
              </button>
            </div>
            <div className="   flex flex-col gap-7 mt-4">
              {jobs?.data?.map((job, index) => <JobCard key={index} job={job} />)}
            </div>
          </div>
          <div
            className={`fixed transition-all md:static md:block md:w-full lg:w-[28%] md:border md:border-blue-4 md:rounded-2xl md:py-5  ${
              isOpenFilter ? 'top-0' : '-top-full'
            } left-0 w-full h-screen md:h-max bg-white pt-40  overflow-y-auto`}
          >
            <Filter
              onChange={values => handleFilter(values)}
              close={() => setIsOpenFilter(false)}
              components={FILTERS as ComponentType[]}
              className="bg-white h-full px-6"
            />
          </div>
        </div>
        <div>
          <Button
            loading={isFetching}
            onClick={() => setPageCount(prev => prev + 5)}
            icon={<DotsRowIcon />}
            variant="outline"
            className="border py-[17px] px-7 my-10"
          >
            Load more
          </Button>
        </div>
      </div>
    </section>
  )
}
