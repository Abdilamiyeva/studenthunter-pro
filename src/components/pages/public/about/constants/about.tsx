import {Link} from '@/components/common/breadcrumb/types'
import {Avatar} from '../components'

export const BreadcrumbData: Link[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
  },
]

export const OurTeam = [
  {card: <Avatar src="/images/pages/about/teacher1.png" headingTitle="Abdulloh Erkinov" subTitle="Senior Manager" />},
  {
    card: (
      <Avatar
        src="/images/pages/about/teacher2.png"
        headingTitle="Ilyosjon Anvarjonov"
        subTitle="Media Marketing Manager"
      />
    ),
  },
  {
    card: (
      <Avatar
        src="/images/pages/about/teacher3.png"
        headingTitle="Maqsadbek
    Fayzullayev"
        subTitle="SEO/CFO"
      />
    ),
  },
  {
    card: (
      <Avatar src="/images/pages/about/teacher4.png" headingTitle="MuhammadAziz Odilov" subTitle="Senior Manager" />
    ),
  },
  {card: <Avatar src="/images/pages/about/teacher1.png" headingTitle="Abdulloh Erkinov" subTitle="Senior Manager" />},
  {
    card: (
      <Avatar
        src="/images/pages/about/teacher2.png"
        headingTitle="Ilyosjon Anvarjonov"
        subTitle="Media Marketing Manager"
      />
    ),
  },
  {
    card: (
      <Avatar
        src="/images/pages/about/teacher3.png"
        headingTitle="Maqsadbek
    Fayzullayev"
        subTitle="SEO/CFO"
      />
    ),
  },
  {
    card: (
      <Avatar src="/images/pages/about/teacher4.png" headingTitle="MuhammadAziz Odilov" subTitle="Senior Manager" />
    ),
  },
]
