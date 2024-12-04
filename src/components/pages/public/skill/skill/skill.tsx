import {Breadcrumb} from '@/components/common'
import {BreadcrumbData} from './constants'
import {Learn, Main} from './components'
export const SkillPage = () => (
  <section>
    <div className="container">
      <div className="my-10">
        <Breadcrumb links={BreadcrumbData} />
      </div>
    </div>
    <div className="container px-0 lg:px-28">
      <Main />
      <Learn />
    </div>
  </section>
)
