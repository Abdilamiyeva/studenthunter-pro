import {Pagination, Table} from '@/components/common'
import {VacancyRow} from './components'
import {TableBody, TableHead, TableHeader} from '@/components/common/table/components'
import {VACANCIES} from './mock/vacancies'

export const CompanyVacancies = () => (
  <section className="h-full flex flex-col ">
    <h1 className="text-4xl font-bold pb-8">Vacancies</h1>
    <Table>
      <TableHeader className="text-left">
        <TableHead className="pr-12" />
        <TableHead className="w-4/12">Job title</TableHead>
        <TableHead className="text-left w-2/12">company</TableHead>
        <TableHead className="text-left w-2/12">Applications</TableHead>
        <TableHead className="text-left w-2/12">Specialities</TableHead>
        <TableHead className="text-left w-2/12">Salary</TableHead>
        <TableHead className="text-center w-32 pr-8">
          <p className="min-w-max">More</p>
        </TableHead>
      </TableHeader>
      <TableBody>
        {VACANCIES.map((vacancy, index) => (
          <VacancyRow key={index} index={index} vacancy={vacancy} />
        ))}
      </TableBody>
    </Table>
    <div className="my-8">
      <Pagination perPage={10} totalDataCount={50} perPageAble />
    </div>
  </section>
)
