import {Tab} from '@/components/common/tabs/types'

export const TabsData: Tab[] = [
  {
    label: 'Summary',
    children: (
      <p className="text-sm font-normal leading-normal text-blue-2">
        " We admit the most academically able and motivated students and provide them with inspiring, world class
        teaching. We’re confident that we also offer the best resources and facilities to support their <br /> <br /> At
        Hult, we want to understand who you are and what drives you. We’re looking for students who'll make an
        impact—not just in business, but in the world. Students who demonstrate academic achievement, passion,
        curiosity, leadership potential, and drive. With that in mind, we take a comprehensive approach to reviewing all
        information submitted with every application.{' '}
      </p>
    ),
    key: 'summary',
  },
  {
    label: 'Requirements',
    children: (
      <>
        <ul className="flex w-full border justify-between border-blue-4 bg-blue-7 rounded-md md:mt-10 text-center">
          <li className="flex flex-col py-3 px-5 w-full border-r border-blue-4">
            <span className="text-sm text-blue-3">TOEFL</span>
            <span className="font-bold">79+</span>
          </li>
          <li className="flex flex-col py-3 px-5 w-full border-r border-blue-4">
            <span className="text-sm text-blue-3">ACT</span>
            <span className="font-bold">22+</span>
          </li>
          <li className="flex flex-col py-3 px-5 w-full border-r border-blue-4">
            <span className="text-sm text-blue-3">IELTS</span>
            <span className="font-bold">7+</span>
          </li>
          <li className="flex flex-col py-3 px-5 w-full">
            <span className="text-sm text-blue-3">SAT</span>
            <span className="font-bold">1150+</span>
          </li>
        </ul>
        <p className="text-sm  text-blue-3 leading-5.5 md:leading-6 mt-3">
          You need to have one of these exam scores in order to get admission in Hult University
        </p>
      </>
    ),
    key: 'requirements',
  },
  // {
  //   label: 'Guide',
  //   children: (
  //     <p className="text-sm font-normal leading-normal text-blue-2">
  //       " We admit the most academically able and motivated students and provide them with inspiring, world class
  //       teaching. We’re confident that we also offer the best resources and facilities to support their <br /> <br /> At
  //       Hult, we want to understand who you are and what drives you. We’re looking for students who'll make an
  //       impact—not just in business, <br /> but in the world. Students who demonstrate academic achievement, passion,{' '}
  //       <br /> curiosity, leadership potential, and drive. With that in mind, we take a comprehensive approach to
  //       reviewing all information <br /> submitted with every application.{' '}
  //     </p>
  //   ),
  //   key: 'guide',
  // },
  {
    label: 'Deadline',
    children: (
      <p className="text-sm font-normal leading-normal text-blue-2">
        " We admit the most academically able and motivated students and provide them with inspiring, world class
        teaching. <br /> We’re confident that we also offer the best resources and facilities to support their <br />{' '}
        <br /> At Hult, we want to understand who you are and what drives you. We’re looking for students who'll make an
        impact—not just in business, but in the world. Students who demonstrate academic achievement, passion,
        curiosity, <br />
        <br /> leadership potential, and drive. With that in mind, we take a comprehensive approach to reviewing all
        information submitted with every application.{' '}
      </p>
    ),
    key: 'deadline',
  },
]
