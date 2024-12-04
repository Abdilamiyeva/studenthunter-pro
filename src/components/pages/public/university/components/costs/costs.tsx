import {Tabs} from '@/components/common'
import {Props} from './types'
import {TuitionFee} from './components/tuition-fee'
import {ScholarShip} from './components/scholarship'
import {useLazyGetPublicProgramQuery} from '@/features/programs'
import {useEffect} from 'react'
import {useHandleRequest} from '@/hooks/use-handle-request'
import {PublicPrograms} from '@/types/program'
import {LivingConsts} from './components/living-costs/living-costs'

export const Costs = ({university, selectProgram}: Props) => {
  const [getPublicProgram, {data: program}] = useLazyGetPublicProgramQuery()
  const handleRequest = useHandleRequest()
  const getFetchProgram = async () => {
    handleRequest({
      request: async () => {
        const result = await getPublicProgram({id: selectProgram})
        return result
      },
    })
  }
  useEffect(() => {
    if (selectProgram) {
      getFetchProgram()
    }
  }, [selectProgram])

  return (
    <div className="w-full py-4 md:px-5 sm:py-6 sm:px-8">
      <h1 className="font-bold md:text-2xl md:leading-9 leading-5 text-blue mb-4">Costs</h1>
      <Tabs
        tabs={[
          {
            label: 'Tuition Fee',
            children: <TuitionFee selectProgram={selectProgram} program={program?.data as PublicPrograms} />,
            key: 'tuition_fee',
          },
          {
            label: 'Scholarship',
            children: <ScholarShip selectProgram={selectProgram} program={program?.data as PublicPrograms} />,
            key: 'scholarship',
          },
          {
            label: 'Living costs',
            children: <LivingConsts university={university} />,
            key: 'living_costs',
          },
        ]}
      />
    </div>
  )
}
