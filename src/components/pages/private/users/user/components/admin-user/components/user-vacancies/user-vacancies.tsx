import {AppliedVacancies, SavedVacancies} from './components'

export const UserVacancies = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 mt-10">
    <AppliedVacancies />
    <SavedVacancies />
  </div>
)
