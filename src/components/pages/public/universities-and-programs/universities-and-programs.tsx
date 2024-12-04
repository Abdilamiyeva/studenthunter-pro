import {Navigate, useSearchParams} from 'react-router-dom'
import {Programs, Universities} from './components'

export const UniversitiesAndProgramsPage = () => {
  const [searchParams] = useSearchParams()

  switch (searchParams.get('tabs')) {
    case 'universities':
      return <Universities />
    case 'programs':
      return <Programs />
  }

  return <Navigate to="/universities-programs?tabs=universities" />
}
