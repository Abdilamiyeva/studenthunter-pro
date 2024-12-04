import {Tab} from '@/components/common/tabs/types'
import {CostIcon} from '@/icons'

export const TabsData: Tab[] = [
  {
    label: 'Tuition fee',
    children: (
      <div>
        <p>
          To see always correct tuition fees{' '}
          <a href="https://university.com/home" className="text-blue-9 underline">
            {' '}
            visit university page.
          </a>
        </p>
        <div className="bg-blue-7 p-6 mt-4">
          <div className="p-4 border border-blue-4 max-w-xs rounded-lg flex items-center gap-3">
            <CostIcon />
            <p className="text-xl font-bold">28,500,000</p>
            <div className="flex items-end ">
              <p className="text-xs">UZS</p>
              <p className="text-xs text-blue-2">/year</p>
            </div>
          </div>
        </div>
      </div>
    ),
    key: 'fee',
  },
  {
    label: 'Scholarship',
    children: (
      <p className="text-sm font-normal leading-normal text-blue-2 ">
        " We admit the most academically able and motivated students and provide them with inspiring, world class
        teaching. We’re confident that we also offer the best resources and facilities to support their <br /> <br /> At
        Hult, we want to understand who you are and what drives you. We’re looking for students who'll make an
        impact—not just in business, <br /> <br /> but in the world. Students who demonstrate academic achievement,
        passion, curiosity, leadership potential , <br /> <br /> and drive. With that in mind, we take a comprehensive
        approach to reviewing all information submitted with every application.{' '}
      </p>
    ),
    key: 'scholarship',
  },
  {
    label: 'Living costs',
    children: (
      <p className="text-sm font-normal leading-normal text-blue-2">
        " We admit the most academically able and motivated students and provide them with inspiring, world class
        teaching. We’re confident that we also offer the best resources and facilities to support their <br /> <br /> At
        Hult, we want to understand who you are and what drives you. We’re looking for students who'll make an
        impact—not just in business, <br /> but in the world. Students who demonstrate academic achievement, passion,{' '}
        <br /> curiosity, leadership potential, and drive. With that in mind, we take a comprehensive approach to
        reviewing all information <br /> submitted with every application.{' '}
      </p>
    ),
    key: 'costs',
  },
]
