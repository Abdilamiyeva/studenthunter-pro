import {Input} from '@/components/common'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
import {BachelorItem} from '../bachelor/components/bachelor-item/bachelor-item'
import {useParams} from 'react-router-dom'
import {useGetPublicProgramQuery, useGetUniversityProgramQuery} from '@/features/programs'
import {useMemo, useState} from 'react'
import {ArrowUpIcon} from '@/icons'

export const Mba = () => {
  const {id: programId} = useParams()
  const {data: program} = useGetPublicProgramQuery({id: programId as string})
  const [search, setSearch] = useState('')
  const {data: {data: universityProgram} = {}} = useGetUniversityProgramQuery({
    university_id: program?.data?.university_id?._id as string,
    level: 'MBA',
  })

  const otherProgram = useMemo(() => [...(universityProgram?.filter(c => c.faculty === '') || [])], [universityProgram])

  return (
    <div>
      {[...new Set(universityProgram?.map(item => item?.faculty))]?.length ? (
        <Input value={search} onChange={e => setSearch(e.target.value)} type="search" />
      ) : (
        <div className="text-blue-2 flex  justify-center  items-center h-20">
          <p>No Data</p>
        </div>
      )}
      <Accordion type="single" collapsible className="mt-2">
        {[...new Set(universityProgram?.map(item => item?.faculty))]
          ?.filter(faculty => faculty !== '')
          .filter(searchItem => searchItem && searchItem.toLowerCase().includes(search.toLowerCase()))
          .map((item, index) => (
            <AccordionItem className="px-[10px]" key={index} value={item as string}>
              <AccordionTrigger>
                <div className="flex items-center gap-x-1 ">
                  <h2>{item}</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="relative pl-4 py-2">
                {[...(universityProgram?.filter(c => c.faculty === item) || [])].length ? (
                  [...(universityProgram?.filter(c => c.faculty === item) || [])]?.map(facultyProgram => (
                    <BachelorItem key={facultyProgram?._id} label={facultyProgram.program} />
                  ))
                ) : (
                  <div className="flex justify-center items-center h-20 text-blue-2">
                    <p>No Data</p>
                  </div>
                )}
                <span className="absolute top-0 left-2 border border-blue-2 border-dashed h-4/5 "></span>
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
      {Boolean([...new Set(universityProgram?.map(item => item?.faculty))].length) && (
        <Accordion type="single" collapsible className="mt-2">
          <Accordion type="single" collapsible className="mt-2">
            <AccordionItem className="shadow-none border-none px-[10px] " value={'others'}>
              <AccordionTrigger>Others</AccordionTrigger>
              <AccordionContent className="relative pl-4 py-2">
                {otherProgram.length ? (
                  otherProgram.map(programItem => <BachelorItem key={programItem?._id} label={programItem.program} />)
                ) : (
                  <div className="text-blue-2 flex justify-center items-center h-20">
                    <p>No Data</p>
                  </div>
                )}
                {Boolean(otherProgram.length) && (
                  <span className="absolute top-0 left-2 border border-blue-2 border-dashed h-4/5 "></span>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Accordion>
      )}
      {[...new Set(universityProgram?.map(item => item?.faculty))].length >= 5 && (
        <div className="md:my-6 px-4 mb-8 md:mb-10 cursor-pointer">
          <div className="flex items-center">
            <span>View All</span> <ArrowUpIcon className="w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  )
}
