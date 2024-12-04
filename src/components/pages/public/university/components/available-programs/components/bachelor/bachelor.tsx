import {Input} from '@/components/common'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion'
import {BachelorItem} from './components/bachelor-item/bachelor-item'
import {useGetUniversityFacultyQuery} from '@/features/university'
import {useParams} from 'react-router-dom'
import {useMemo, useState} from 'react'
import {ArrowUpIcon} from '@/icons'
import {Props} from './types'

export const Bachelor = ({setSelectProgram, selectProgram}: Props) => {
  const {id} = useParams()
  const [search, setSearch] = useState('')
  const {data: {data: faculty} = {}} = useGetUniversityFacultyQuery({university_id: id as string, level: 'Bachelor'})

  const otherProgram = useMemo(() => [...(faculty?.filter((c: any) => !c.faculty) || [])], [faculty])
  return (
    <div>
      {[...new Set(faculty?.map((item: any) => item?.program))]?.length ? (
        <Input value={search} onChange={e => setSearch(e.target.value)} type="search" />
      ) : (
        <div className="flex justify-center items-center text-blue-2 h-20">
          <h2>No Data</h2>
        </div>
      )}
      <Accordion type="single" collapsible className="mt-2">
        {[...new Set(faculty?.map((item: any) => item?.faculty))]
          ?.filter((facultyItem: any) => facultyItem !== '')
          .filter(searchItem => searchItem?.toLowerCase().includes(search?.toLowerCase()))
          .map((item, index) => (
            <AccordionItem className="px-[10px]" key={index} value={item as string}>
              <AccordionTrigger>
                <div className="flex items-center gap-x-1 ">
                  <h2>{item}</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="relative pl-4 py-2">
                {[...(faculty?.filter((c: any) => c.faculty === item) || [])]?.length ? (
                  [...(faculty?.filter((c: any) => c.faculty === item) || [])]?.map(facultyProgram => (
                    <BachelorItem
                      onClick={() => setSelectProgram(facultyProgram?._id)}
                      key={facultyProgram?._id}
                      label={facultyProgram.program}
                      isActive={selectProgram === facultyProgram._id}
                    />
                  ))
                ) : (
                  <div className="flex justify-center items-center text-blue-2 h-20">
                    <p>No Data</p>
                  </div>
                )}
                <span className="absolute top-0 left-2 border border-blue-2 border-dashed h-4/5 "></span>
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
      {Boolean([...new Set(faculty?.map((item: any) => item?.faculty))].length) && (
        <Accordion type="single" collapsible className="mt-2">
          <Accordion type="single" collapsible className="mt-2">
            <AccordionItem className="shadow-none border-none px-[10px]  " value={'others'}>
              <AccordionTrigger>
                <span>Others</span>
                <div className="w-[30px] h-6 rounded-full bg-blue-5"></div>
              </AccordionTrigger>
              <AccordionContent className="relative pl-4 py-2">
                {otherProgram.length ? (
                  otherProgram.map(programItem => (
                    <BachelorItem
                      onClick={() => setSelectProgram(programItem?._id)}
                      isActive={selectProgram === programItem._id}
                      key={programItem?._id}
                      label={programItem.program}
                    />
                  ))
                ) : (
                  <div className="flex justify-center items-center text-blue-2 h-20">
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
      {[...new Set(faculty?.map((item: any) => item?.faculty))].length >= 5 && (
        <div className="md:my-6 px-4 mb-8 md:mb-10 cursor-pointer">
          <div className="flex items-center">
            <span>View All</span> <ArrowUpIcon className="w-5 h-5" />
          </div>
        </div>
      )}
    </div>
  )
}