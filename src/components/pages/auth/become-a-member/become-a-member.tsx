import {Breadcrumb} from '@/components/common'
import {CompaniesIcon, ConsultingManIcon, UniversityIcon} from '@/icons'
import {Link} from 'react-router-dom'

export const BecomeAMemberPage = () => (
  <div className="container mt-8 mb-24">
    <Breadcrumb links={[{label: 'Home', path: '/'}, {label: 'Become a member'}]} className="mb-10" />
    <h1 className="text-4xl lg:text-8xl font-bold leading-6 lg:leading-17 mb-3 text-center">Which one are you?</h1>
    <p className="text-blue-2 text-sm lg:text-2xl leading-8.5 text-center">
      Build a new resume or upload an existing file
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 mt-24">
      <Link
        to="/auth/become-a-member/university"
        className="flex flex-col items-center justify-center text-center bg-blue-7 rounded-2xl py-16 hover:bg-blue group duration-default"
      >
        <UniversityIcon className="w-[150px] h-[150px] group-hover:text-orange-6 duration-default" />
        <p className="text-blue-2 text-7xl font-bold leading-14.5 mt-5 group-hover:text-white duration-default">
          University
        </p>
      </Link>
      <Link
        to="/auth/become-a-member/company"
        className="flex flex-col items-center justify-center text-center bg-blue-7 rounded-2xl py-16 hover:bg-blue group duration-default"
      >
        <CompaniesIcon className="w-[150px] h-[150px] group-hover:text-orange-6 duration-default" />
        <p className="text-blue-2 text-7xl font-bold leading-14.5 mt-5 group-hover:text-white duration-default">
          Company
        </p>
      </Link>
      <Link
        to="/auth/become-a-member/consulting"
        className="flex flex-col items-center justify-center text-center bg-blue-7 rounded-2xl py-16 hover:bg-blue group duration-default"
      >
        <ConsultingManIcon className="w-[150px] h-[150px] group-hover:text-orange-6 duration-default" />
        <p className="text-blue-2 text-7xl font-bold leading-14.5 mt-5 group-hover:text-white duration-default">
          Consulting
        </p>
      </Link>
    </div>
  </div>
)
