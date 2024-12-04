import {CompanyIcon, SkillIcon, UniversityIcon, VacancyIcon} from '@/icons'
import {DashboardCard} from './components'
import {DashboardChart} from '..'

export const UserDashboard = () => (
  <div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
      <DashboardCard
        icon={<UniversityIcon className="w-9 h-9 text-orange" />}
        title="Colleges"
        actives={213}
        count={1054}
        iconParentClassName="bg-orange-7"
      />

      <DashboardCard
        icon={<VacancyIcon className="w-9 h-9 text-sky-4" />}
        title="Vacancies"
        actives={105}
        count={964}
        iconParentClassName="bg-sky-2"
      />
      <DashboardCard
        icon={<CompanyIcon className="w-9 h-9 text-green" />}
        title="Companies"
        actives={21}
        count={97}
        iconParentClassName="bg-green-3"
      />
      <DashboardCard
        icon={<SkillIcon className="w-9 h-9 text-purple" />}
        title="Skills"
        actives={984}
        count={964}
        iconParentClassName="bg-purple-1"
      />
    </div>
    <DashboardChart />
  </div>
)
