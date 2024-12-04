import {Tab} from '@/components/common/tabs/types'
import {TuitionFee} from '../components/tuition-fee'
import {LivingConsts} from '../components/living-costs'
import {ScholarShip} from '../components/scholarship'

export const tabsData: Tab[] = [
  {
    label: 'Tuition Fee',
    children: <TuitionFee />,
    key: 'tuition_fee',
  },
  {
    label: 'Scholarship',
    children: <ScholarShip />,
    key: 'scholarship',
  },
  {
    label: 'Living costs',
    children: <LivingConsts />,
    key: 'living_costs',
  },
]
