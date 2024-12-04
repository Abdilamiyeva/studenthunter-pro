import {Pagination, Table} from '@/components/common'
import {TableBody, TableHead, TableHeader} from '@/components/common/table/components'
import {ListItem} from './components'
import {useState} from 'react'
import {USER_APPLIED_COLLEGES} from '@/components/pages/private/universities/mock/user-university'

export const AppliedColleges = () => {
  const [page, setPage] = useState(1)

  return (
    <>
      <Table>
        <TableHeader>
          <TableHead className=""></TableHead>
          <TableHead className="">University name</TableHead>
          <TableHead className="">programs</TableHead>
          <TableHead className="text-center">status</TableHead>
          <TableHead className="text-center">message</TableHead>
        </TableHeader>
        <TableBody>
          {USER_APPLIED_COLLEGES.slice((page - 1) * 10, page * 10).map((item, i) => (
            <ListItem key={item.id} university={item} index={i} />
          ))}
        </TableBody>
      </Table>
      <div className="my-8">
        <Pagination perPageAble perPage={10} totalDataCount={USER_APPLIED_COLLEGES.length} onPageChange={setPage} />
      </div>
    </>
  )
}
