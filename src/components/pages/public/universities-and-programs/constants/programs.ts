export const FILTERS = [
  {
    label: 'Program',
    value: 'program',
    type: 'checkbox',
    options: [
      {label: 'Agriculture & Forestry', value: 'agriculture', count: 426},
      {label: 'Applied Sciences & Profess...', value: 'applied', count: 1021},
      {label: 'Arts, Design & Architecture', value: 'arts', count: 2013},
      {label: 'Business & Management', value: 'business', count: 4546},
      {label: 'Computers Science & IT', value: 'computers', count: 3280},
      {label: 'Education & Training', value: 'education', count: 1271},
      {label: 'Engineering & Technology', value: 'engineering', count: 1037},
      {label: 'Environmental Studies', value: 'environmental', count: 882},
      {label: 'Hospitality, Leisure & Sports', value: 'education', count: 996},
      {label: 'Humanities', value: 'education', count: 1109},
      {label: 'Journalism & Media', value: 'education', count: 1271},
      {label: 'Medicine & Health', value: 'education', count: 2803},
    ],
  },
  {
    label: 'Region',
    value: 'region',
    type: 'select',
    options: [
      {label: 'Africa', value: 'africa', count: 1023},
      {label: 'Asia', value: 'asia', count: 1233},
      {label: 'Europe', value: 'certification', count: 1233},
      {label: 'Latin America', value: 'latin_america', count: 4313},
      {label: 'North America', value: 'north_america', count: 4546},
      {label: 'Ocenia', value: 'ocenia', count: 546},
    ],
  },
  {
    label: 'Location',
    value: 'location',
    type: 'double-check',
    firstListLabel: 'Countries',
    firstListValue: 'countries',
    secondListLabel: 'Cities',
    secondListValue: 'cities',
    options: [
      {
        label: 'United Kingdom',
        value: 'United Kingdom',
        count: 234,
        options: [
          {label: 'London', value: 'london'},
          {label: 'Manchester', value: 'manchester'},
          {label: 'Liverpool', value: 'liverpool'},
        ],
      },
      {
        label: 'United Statues',
        value: 'United Statues',
        count: 234,
        options: [
          {label: 'Chicago', value: 'chicago'},
          {label: 'New york', value: 'new-york'},
          {label: 'California', value: 'california'},
        ],
      },
      {
        label: 'United Arabic Emirates',
        value: 'United Arabic Emirates',
        count: 234,
        options: [
          {label: 'London-2', value: 'london-2'},
          {label: 'Manchester-2', value: 'manchester-2'},
          {label: 'Liverpool-2', value: 'liverpool-2'},
        ],
      },
      {
        label: 'United ASIA',
        value: 'United ASIA',
        count: 234,
        options: [
          {label: 'Chicago-2', value: 'chicago-2'},
          {label: 'New york-2', value: 'new-york-2'},
          {label: 'California-2', value: 'california-2'},
        ],
      },
      {
        label: 'KBA',
        value: 'KBA',
        count: 234,
        options: [
          {label: 'London-3', value: 'london-3'},
          {label: 'Manchester-3', value: 'manchester-3'},
          {label: 'Liverpool-3', value: 'liverpool-3'},
        ],
      },
    ],
  },
  {label: 'Study Level', value: 'study_level', type: 'price-range'},
  {label: 'Duration', value: 'duration'},
  {label: 'Study Mode', value: 'salary-2', type: 'price-range'},
  {label: 'Attendance', value: 'salary', type: 'price-range'},
]
