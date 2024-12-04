import {UNIVERSITIES} from './universities'

export const PROGRAMS = [
  {
    id: 1,
    title: 'Business Administration',
    desscription:
      'Hult’s transformative Bachelor of Business Administration (BBA) is designed around the universal truth that to master a skill—any skill, from riding a bike ...',
    statues: ['Bachelors', '$55k yearly', '4-years', 'Full-time', 'Business and Management'],
    universities: UNIVERSITIES[2],
    img: '/images/pages/universities/programs/programs1.png',
  },
  {
    id: 2,
    title: 'Cybersecurity Engineering',
    desscription:
      'Hult’s transformative Bachelor of Business Administration (BBA) is designed around the universal truth that to master a skill—any skill, from riding a bike ...',
    statues: ['Bachelors', '$55k yearly', '4-years', 'Full-time', 'Business and Management'],
    universities: UNIVERSITIES[1],
    img: '/images/pages/universities/programs/programs2.png',
  },
  {
    id: 3,
    title: 'BSc in Computer Science',
    desscription:
      'Hult’s transformative Bachelor of Business Administration (BBA) is designed around the universal truth that to master a skill—any skill, from riding a bike ...',
    statues: ['Bachelors', '$55k yearly', '4-years', 'Full-time', 'Business and Management'],
    universities: UNIVERSITIES[3],
    img: '/images/pages/universities/programs/programs4.png',
  },
]

export const FILTERS = [
  {
    label: 'Program',
    value: 'program',
    type: 'checkbox',
    options: [
      {label: 'Agriculture & Forestry', value: 'Agriculture & Forestry', count: 426},
      {label: 'Applied Sciences & Profess', value: 'Applied Sciences & Profess', count: 1021},
      {label: 'Arts, Design & Architecture', value: 'Arts, Design & Architecture', count: 2013},
      {label: 'Business & Management', value: 'Business & Management', count: 4546},
      {label: 'Computers Science & IT', value: 'Computers Science & IT', count: 3280},
      {label: 'Education & Training', value: 'Education & Training', count: 1271},
      {label: 'Engineering & Technology', value: 'Engineering & Technology', count: 1037},
      {label: 'Environmental Studies', value: 'Environmental Studies', count: 882},
      {label: 'Hospitality, Leisure & Sports', value: 'Hospitality, Leisure & Sports', count: 996},
      {label: 'Humanities', value: 'Humanities', count: 1109},
      {label: 'Journalism & Media', value: 'Journalism & Media', count: 1271},
      {label: 'Medicine & Health', value: 'Medicine & Health', count: 2803},
    ],
  },
  {
    label: 'Study Level',
    value: 'study_level',
    type: 'checkbox',
    options: [
      {
        label: 'Foundation',
        value: 'Foundation',
      },
      {
        label: 'High School',
        value: 'High School',
      },
      {
        label: 'Bachelors',
        value: 'Bachelors',
      },
      {
        label: 'Masters',
        value: 'Masters',
      },
      {
        label: 'PHD',
        value: 'PHD',
      },
      {
        label: 'Research',
        value: 'Research',
      },
    ],
  },
  {
    label: 'Duration',
    value: 'duration',
    type: 'checkbox',
    options: [
      {
        label: '1 Year',
        value: '1 Year',
      },
      {
        label: '2 Years',
        value: '2 Years',
      },
      {
        label: '3 Years',
        value: '3 Years',
      },
      {
        label: '4 Years',
        value: '4 Years',
      },
      {
        label: '5 Years',
        value: '5 Years',
      },
    ],
  },
  {
    label: 'Study Mode',
    value: 'study_mode',
    type: 'checkbox',
    options: [
      {
        label: 'Full-time',
        value: 'Full-time',
      },
      {
        label: 'Part-time',
        value: 'Part-time',
      },
    ],
  },
  {label: 'Tuition Fee Yearly', value: 'salary', type: 'price-range'},
  {
    label: 'Attendance',
    value: 'attendance',
    type: 'checkbox',
    options: [
      {
        label: 'On Campus',
        value: 'On Campus',
      },
      {
        label: 'Online Learning',
        value: 'Online Learning',
      },
      {
        label: 'Blended learning',
        value: 'Blended learning',
      },
    ],
  },
]
