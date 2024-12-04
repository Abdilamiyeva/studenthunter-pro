import {AppliedUniversities, SavedUniversities} from './components'
import {Props} from './types'

export const UserUniversities = ({userID}: Props) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 mt-10">
    <AppliedUniversities userID={userID} />
    <SavedUniversities userID={userID} />
  </div>
)
