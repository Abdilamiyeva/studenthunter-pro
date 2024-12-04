import {Button, Filter, Loader} from '@/components/common'
import {DotsRowIcon, FrameFilterIcon, SearchIcon} from '@/icons'
import {FILTERS} from './mock/programs'
import {ProgramsCard} from '..'
import {KeyboardEvent, useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import {ComponentType} from '@/components/common/filter/types'
import {useLazyGetPublicProgramsQuery} from '@/features/programs'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {useTranslation} from 'react-i18next'

export const Programs = () => {
  const {t} = useTranslation()
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const [getPublicPrograms, {data: programs, isFetching, isLoading}] = useLazyGetPublicProgramsQuery()
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const handleRequest = useHandleRequest()
  const [filter, setFilter] = useState({})
  const [pageCount, setPageCount] = useState(5)
  const getFetchPrograms = async () => {
    handleRequest({
      request: async () => {
        const result = await getPublicPrograms({data: JSON.stringify({...filter, per_page: pageCount, search})})
        return result
      },
    })
  }

  const setSearchParamsHandle = () => {
    searchParams.set('tabs', 'universities')
    setSearchParams(searchParams)
  }

  const handleFilter = (filterData: object | any) => {
    const cleanArray = (data: Record<string, boolean>) => {
      const filteredKeys = Object.keys(data).filter(key => data[key])
      return filteredKeys.length > 0 ? filteredKeys : undefined
    }
    setFilter({
      program: cleanArray(filterData.program || {}),
      level: cleanArray(filterData.study_level || {}),
      from_fee: filterData.salary?.min,
      to_fee: filterData.salary?.max,
      format: cleanArray(filterData.study_mode || {}),
      attendance: cleanArray(filterData.attendance || {}),
      duration: cleanArray(filterData.duration || {}),
    })
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      getFetchPrograms()
    }
  }

  useEffect(() => {
    getFetchPrograms()
  }, [filter, pageCount])

  useEffect(() => {
    if (search === '') {
      getFetchPrograms()
    }
  }, [search])

  if (isLoading) {
    return (
      <div className="h-80 relative">
        <Loader className="absolute" />
      </div>
    )
  }

  return (
    <section>
      <div className="text-center pt-20 pb-28 mb-3 bg-blue-7 px-4">
        <h1 className="text-4xl md:text-8xl font-bold leading-17 md:leading-17 mb-4">
          {t('university.explore_programs_and_universities')}
        </h1>
        <p className="max-w-[676px]  mx-auto text-center text-blue-1 text-sm leading-7 md:text-xl">
          {t('university.when_youre_searching_for')}
        </p>
      </div>
      <div className="px-4 md:container md:py-4">
        <label className="flex items-stretch border border-blue-4 justify-between md:container bg-white shadow-box md:pt-3.5 md:pb-4 pl-7 md:pr-5 pr-2 rounded-lg -mt-9 md:-mt-14 md:mb-[60px] mb-8">
          <input
            onChange={e => setSearch(e.target.value.trim())}
            onKeyDown={handleKeyDown}
            type="search"
            placeholder={t('university.program_University_or_keyword')}
            className="w-full text-xs md:text-xl"
          />
          <Button
            noSpaceBetweenIcon
            onClick={getFetchPrograms}
            icon={<SearchIcon className="max-w-xl max-h-xl md:max-h-[20px] md:max-w-[20px]p md:ml-2 md:mr-2" />}
            className="bg-orange-6 rounded-[10px] border-transparent p-2 my-2 md:my-auto text-xl w-max md:px-9 md:py-[15px] hover:bg-orange-6"
          >
            <span className="hidden md:inline">{t('university.search')}</span>
          </Button>
        </label>
        <div className="flex gap-4 gap-x-[72px] lg:gap-x-[72px] lg:gap-9 px-0 lg:flex-nowrap  flex-wrap lg:flex-row flex-col-reverse">
          <div className="w-full lg:w-[73%]">
            <div className="md:w-full flex justify-between">
              <div className="flex">
                <Button variant="default" className={'rounded-r-none text-sm md:w-auto px-10 md:py-[15px] md:px-10'}>
                  {t('university.programs')}
                </Button>
                <Button
                  onClick={setSearchParamsHandle}
                  variant="outline"
                  className="rounded-l-none text-sm md:py-[15px] px-4 md:px-[50px] md:w-auto"
                >
                  {t('university.universities')}
                </Button>
              </div>

              <Button onClick={() => setIsOpenFilter(true)} className="md:hidden bg-transparent px-3" variant="outline">
                <FrameFilterIcon />
              </Button>
            </div>
            <div className="flex flex-col gap-7 mt-[30px]">
              {programs?.data?.map((program, index) => <ProgramsCard key={index} program={program} />)}
            </div>
          </div>
          <div
            className={`fixed transition-all md:static md:block md:w-full lg:w-[28%] md:border md:border-blue-4 md:rounded-2xl md:py-6 md:px-3 ${
              isOpenFilter ? 'top-0' : '-top-full'
            } left-0 w-full h-screen md:h-max  bg-white pt-40  overflow-y-auto`}
          >
            <Filter
              onChange={(filterValue: object | any) => handleFilter(filterValue)}
              className="h-full bg-white px-4"
              close={() => setIsOpenFilter(false)}
              components={FILTERS as ComponentType[]}
            />
          </div>
        </div>
        <Button
          loading={isFetching}
          onClick={() => setPageCount(prev => prev + 5)}
          icon={<DotsRowIcon />}
          variant="outline"
          className="border py-[17px] px-7 my-10"
        >
          {t('university.load_more')}
        </Button>
      </div>
    </section>
  )
}
