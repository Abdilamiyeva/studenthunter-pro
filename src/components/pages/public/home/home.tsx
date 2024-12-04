import {
  Blogs,
  CallToAction,
  FAQ,
  HowItWorks,
  Main,
  Programs,
  Reviews,
  SocialMedia,
  Universities,
  Vacancies,
} from './components'

export const HomePage = () => (
  <div>
    <Main />
    <Universities />
    <Vacancies />
    <Programs />
    <HowItWorks />
    <Reviews />
    <Blogs />
    <SocialMedia />
    <FAQ />
    <CallToAction />
  </div>
)
