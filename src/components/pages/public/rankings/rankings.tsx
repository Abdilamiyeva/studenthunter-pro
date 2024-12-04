import {BreadcrumbData} from './constants/rankings'
import {Breadcrumb, Button, Table} from '@/components/common'
import {TableBody, TableHead, TableHeader} from '@/components/common/table/components'
import {DotsRowIcon} from '@/icons'
import {RankingRow} from './components'

export const RankingsPage = () => (
  <section className="pt-4 pb-7">
    <div className="container">
      <Breadcrumb links={BreadcrumbData} />
      <div className="text-center pt-20 pb-28 mb-3">
        <h1 className="text-4xl md:text-8xl leading-17 font-bold text-center mb-4">
          University Rankings According to <br /> Student Hunter
        </h1>
      </div>
      <Table>
        <TableHeader>
          <TableHead className="text-center py-6 pl-8 text-blue text-xl font-bold leading-8 ">Rank</TableHead>
          <TableHead className="text-start py-6 pl-8 text-blue text-xl font-bold leading-8">Name</TableHead>
          <TableHead className="py-6 pl-8 text-blue text-xl font-bold leading-8">Country</TableHead>
          <TableHead className="text-center py-6 pl-8 text-blue text-xl font-bold leading-8">Overall Score</TableHead>
        </TableHeader>
        <TableBody>
          {new Array(10)
            .fill({name: 'Harward University', country: 'United States', overallscore: '10'})
            .map((item, index) => (
              <RankingRow key={index} index={index} ranking={item} />
            ))}
        </TableBody>
      </Table>
      <Button icon={<DotsRowIcon />} variant="outline" className="mt-10">
        Lead More
      </Button>
    </div>
  </section>
)
