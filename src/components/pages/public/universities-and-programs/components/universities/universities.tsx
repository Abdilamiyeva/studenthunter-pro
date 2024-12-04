import {Button, Filter, Loader} from '@/components/common'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {DotsRowIcon, FrameFilterIcon, SearchIcon} from '@/icons'
import {useEffect, useState, KeyboardEvent} from 'react'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {UniversityCard} from '..'
import {University} from '@/types/university'
import {FILTERS} from './mock/universities'
import {useLazyGetPublicUniversitiesQuery} from '@/features/university'
import {useTranslation} from 'react-i18next'

export const Universities = () => {
  const navigate = useNavigate()
  const {t} = useTranslation()
  const [isOpenFilter, setIsOpenFilter] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const [getPublicUniversities, {data: universities, isLoading, isFetching}] = useLazyGetPublicUniversitiesQuery()
  const handleRequest = useHandleRequest()
  const [filter, setFilter] = useState({})
  const [pageCount, setPageCount] = useState(5)
  const [search, setSearch] = useState('')
  const getFetchUniversities = async () => {
    handleRequest({
      request: async () => {
        const result = await getPublicUniversities({
          data: encodeURIComponent(JSON.stringify({...filter, per_page: pageCount, search})),
        })
        return result
      },
    })
  }

  const setSearchParamsHandle = () => {
    searchParams.set('tabs', 'programs')
    setSearchParams(searchParams)
  }

  const handleFilter = (filterData: object | any) => {
    const cleanArray = (data: Record<string, boolean>) => {
      const filteredKeys = Object.keys(data).filter(key => data[key])
      return filteredKeys.length > 0 ? filteredKeys : undefined
    }
    setFilter({
      country: cleanArray(filterData.location || {}),
      study_level: cleanArray(filterData.study_level || {}),
      from_fee: filterData.tuition_fee_yearly?.min,
      to_fee: filterData.tuition_fee_yearly?.max,
    })
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      getFetchUniversities()
    }
  }

  useEffect(() => {
    getFetchUniversities()
  }, [filter, pageCount])

  useEffect(() => {
    if (search === '') {
      getFetchUniversities()
    }
  }, [search])

  if (isLoading) {
    return (
      <div className="relative h-80">
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
        <label className="flex items-stretch justify-between border border-blue-4 md:container bg-white shadow-box md:pt-3.5 md:pb-4 pl-7 md:pr-5 pr-2 rounded-lg -mt-9 md:-mt-14 md:mb-[60px] mb-8">
          <input
            onChange={e => setSearch(e.target.value.trim())}
            type="search"
            placeholder={t('university.program_University_or_keyword')}
            className="w-full text-xs md:text-xl"
            onKeyDown={handleKeyDown}
          />
          <Button
            noSpaceBetweenIcon
            onClick={getFetchUniversities}
            icon={<SearchIcon className="max-w-xl max-h-xl md:max-h-[20px] md:max-w-[20px]p md:ml-2 md:mr-2" />}
            className="bg-orange-6 rounded-[10px] border-transparent p-2 my-2 md:my-auto text-xl w-max md:px-9 md:py-[15px] hover:bg-orange-6"
          >
            <span className="hidden md:inline"> {t('university.search')}</span>
          </Button>
        </label>
        <div className="flex gap-4 gap-x-[72px] lg:gap-x-[72px]  px-0 lg:flex-nowrap flex-wrap lg:flex-row flex-col-reverse">
          <div className="w-full lg:w-[73%]">
            <div className="md:w-full flex justify-between">
              <div className="w-full items-center flex justify-between">
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    className={'rounded-r-none text-sm md:w-auto px-10 md:py-[15px] md:px-10'}
                    onClick={setSearchParamsHandle}
                  >
                    {t('university.programs')}
                  </Button>
                  <Button
                    variant="default"
                    className="rounded-l-none text-sm md:py-[15px] px-4 md:px-[50px] md:w-auto"
                    onClick={() => navigate('/universities')}
                  >
                    {t('university.universities')}
                  </Button>
                </div>
                <p className="text-blue-2 text-6 ">
                  {universities?.total} {t('res')}
                </p>
              </div>

              <Button onClick={() => setIsOpenFilter(true)} className="md:hidden bg-transparent px-3" variant="outline">
                <FrameFilterIcon />
              </Button>
            </div>
            <div className="w-full flex flex-col gap-7  mt-[30px] ">
              {universities?.data?.map((university: University, index: number) => (
                <UniversityCard key={index} university={university} />
              ))}
            </div>
          </div>
          <div
            className={`fixed transition-all md:static md:block md:w-full lg:w-[28%] md:border md:border-blue-4 md:rounded-2xl md:py-6 md:px-3 ${
              isOpenFilter ? 'top-0' : '-top-full'
            } left-0 w-full h-screen md:h-max  bg-white pt-40  overflow-y-auto md:overflow-y-clip `}
          >
            <Filter
              onChange={filterValue => handleFilter(filterValue)}
              className="bg-white px-4"
              close={() => setIsOpenFilter(false)}
              components={FILTERS as any}
            />
          </div>
        </div>
        <Button
          onClick={() => setPageCount(prev => prev + 5)}
          loading={isFetching}
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
