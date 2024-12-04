import {Table} from '@/components/common'
import {TableHeader, TableHead, TableBody, TableLoader, TableNotFound} from '@/components/common/table/components'
import {FacultyRow} from './components'
import {Props} from './types'
import {useGetUniversityFacultiesQuery} from '@/features/faculty'
import {useParams} from 'react-router-dom'

export const Faculties = ({level}: Props) => {
  const {id} = useParams()
  const {data: {data: faculties} = {}, isFetching} = useGetUniversityFacultiesQuery({
    university_id: id as string,
    level,
  })

  return (
    <Table>
      <TableHeader className="text-blue-1">
        <TableHead className="py-5" />
        <TableHead className="pl-4 w-56">Major</TableHead>
        <TableHead className="w-44 pl-6">Faculty</TableHead>
        <TableHead className="text-right">tution</TableHead>
        <TableHead className="text-center">IELTS</TableHead>
        <TableHead className="text-center">SAT</TableHead>
        <TableHead className="text-center">Deadline</TableHead>
        <TableHead className="text-center">More</TableHead>
      </TableHeader>
      <TableBody className="bg-white">
        {isFetching ? (
          <TableLoader colSpan={8} />
        ) : faculties?.length ? (
          faculties.map((faculty, index) => <FacultyRow key={faculty._id} index={index} faculty={faculty} />)
        ) : (
          <TableNotFound colSpan={8} />
        )}
      </TableBody>
    </Table>
  )
}
