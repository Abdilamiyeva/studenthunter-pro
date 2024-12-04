import {STATES} from '@/constants/countries'
import {getFiltersCountries} from '@/utils/get-filters-countries'

export const FILTERS = [
  {
    label: 'Location',
    value: 'location',
    type: 'checkbox',
    options: getFiltersCountries(STATES as []),
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
  {label: 'Tuition Fee Yearly', value: 'tuition_fee_yearly', type: 'price-range'},
]

export const UNIVERSITIES = [
  {
    id: 1,
    title: 'Hult International University',
    location: ['Boston', 'Cambridge', 'United States'],
    programs: 25,
    money: '$12k - $65k',
    rating: 184,
    img: '/images/pages/universities/university1.png',
  },
  {
    id: 2,
    title: 'Tashkent International University',
    location: ['Tashkent', 'Uzbekistan'],
    programs: 25,
    money: '$12k - $65k',
    rating: 184,
    img: '/images/pages/universities/university2.png',
  },
  {
    id: 3,
    title: 'American University of Paris',
    location: ['Bachelors', 'Masters', 'Summer Program'],
    programs: 25,
    money: '$12k - $65k',
    rating: 184,
    img: '/images/pages/universities/university3.png',
  },
  {
    id: 4,
    title: 'Millat Umidi University',
    location: ['Chilonzor', 'Tashkent', 'Uzbekistan'],
    programs: 25,
    money: '$12k - $65k',
    rating: 184,
    img: '/images/pages/universities/university4.png',
  },
]
