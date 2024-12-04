import React from 'react'

export const Serach = () => (
  // const [open, setOpen] = useState(false)
  // const [searchValue, setSearchValue] = useState('')
  // const [debouncedValue] = useDebounce(searchValue, 500)
  // const [homeSerach, {data: searchResult, isLoading}] = useLazyGetHomeSerachQuery()
  // const handleRequest = useHandleRequest()
  // const navigate = useNavigate()
  // const location = useLocation()
  // const onSearchHandle = async () => {
  //   handleRequest({
  //     request: async () => {
  //       const result = await homeSerach({
  //         q: debouncedValue,
  //       })
  //       return result
  //     },
  //   })
  // }

  // useEffect(() => {
  //   if (debouncedValue === '') {
  //     onSearchHandle()
  //   }
  // }, [debouncedValue])

  // useEffect(() => {
  //   if (debouncedValue) {
  //     onSearchHandle()
  //   }
  // }, [debouncedValue, searchValue])

  // useEffect(() => {
  //   setOpen(false)
  // }, [location])

  <React.Fragment>
    {/* <div className="px-[45px] w-full">
      <div className="w-full z-[100] relative" onBlur={() => setIsSearch(false)}>
        <Input
          isSearching={isLoading}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          onFocus={() => setOpen(true)}
          baseClassName="w-full z-30 rounded-t-[6px]  focus:border-blue focus:bg-blue-7 bg-blue-7 border border-blue px-4 py-[7px] text-xl w-full font-bold rounded-t-[6px]"
        />
        {/* {open && (
            <div className="absolute z-[100] max-h-[336px] w-full py-3 bg-white top-[41.8px] border border-blue rounded-b-[6px]">
              {results?.universities?.slice(0, 3).map((item: object | any, index: number) => (
                <div
                  onClick={() => navigate('/universities/' + item._id)}
                  key={index}
                  className="px-[30px] py-2 hover:bg-blue-7 cursor-pointer "
                >
                  <div className="flex items-center gap-x-4 ">
                    <Avatar type="university" fullName="University" />
                    <h2 className="text-blue text-sm font-semibold leading-5">{item.title}</h2>
                  </div>
                </div>
              ))}
              {results?.vacancy?.slice(0, 4).map((item: object | any, index: number) => (
                <div
                  onClick={() => {
                    navigate('/jobs/' + item._id)
                  }}
                  key={index}
                  className="px-[30px] py-2 hover:bg-blue-7 cursor-pointer "
                >
                  <div className="flex items-center gap-x-4 ">
                    <Avatar type="vacancy" fullName="University" />
                    <h2 className="text-blue text-sm font-semibold leading-5">{item.job_title}</h2>
                  </div>
                </div>
              ))}
              {results?.feedbacks?.map((item: object | any, index: number) => (
                <div
                  onClick={() => navigate('/feedback/', item._id)}
                  key={index}
                  className="px-[30px] py-2 hover:bg-blue-7 cursor-pointer "
                >
                  <div className="flex items-center gap-x-4 ">
                    <Avatar fullName="University" />
                    <h2 className="text-blue text-sm font-semibold leading-5">{item.job_title}</h2>
                  </div>
                </div>
              ))}
            </div>
          )} */}
    {/* </div>
      {!isSearch ? (
        <div
          onClick={() => setIsSearch(true)}
          className=" bg-transparent fixed top-0 left-0 h-screen w-full z-[99]"
        ></div>
      ) : (
        ''
      )}
    </div> */}
  </React.Fragment>
)
