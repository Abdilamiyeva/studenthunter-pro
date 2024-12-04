import {AppliedCompanies, SavedCompanies} from './components'

export const UserCompanies = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 mt-10">
    <AppliedCompanies />
    <SavedCompanies />
  </div>
)
