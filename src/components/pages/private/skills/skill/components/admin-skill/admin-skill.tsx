import {DashboardBack, Loader, ScrollableTabs} from '@/components/common'
import {SkillLinksData} from './constants'
import {AboutCourse, Learn, Overview, Referral} from './components'
import {useGetSkillDetailsQuery} from '@/features/skills'
import {Navigate, useParams} from 'react-router-dom'

export const AdminSkill = () => {
  const {id} = useParams()
  const {data: {data: skill} = {}, isFetching} = useGetSkillDetailsQuery({skillID: id as string})

  if (isFetching) {
    return (
      <div className="relative h-80">
        <Loader className="absolute" />
      </div>
    )
  }

  if (!skill) {
    return <Navigate to="/dashbpard/skills" />
  }

  return (
    <div>
      <div className="mb-7">
        <DashboardBack link="/dashboard/skills">Back to all Skills</DashboardBack>
      </div>
      <ScrollableTabs topSize={220} links={SkillLinksData} sideBarTitle="Skill">
        <Overview skill={skill} />
        <AboutCourse skill={skill} />
        <Learn skill={skill} />
        <Referral skill={skill} />
      </ScrollableTabs>
    </div>
  )
}
