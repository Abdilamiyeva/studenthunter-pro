import {Header, Footer} from './components'
import {Props} from './types'

export const PublicLayout = ({children}: Props) => (
  <main>
    <Header />
    {children}
    <Footer />
  </main>
)
