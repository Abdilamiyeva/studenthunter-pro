import {STATES} from '@/constants/countries'
import {getFiltersCountries} from '@/utils/get-filters-countries'
import dayjs from 'dayjs'

export const FILTERS = [
  {
    label: 'Data posted',
    value: 'data_posted',
    type: 'radio-input',
    options: [
      {
        label: 'Any time',
        value: '1970-01-01',
      },
      {
        label: 'Past month',
        value: dayjs(new Date(new Date().setMonth(new Date().getMonth() - 1))).format('YYYY-MM-DD'),
      },
      {
        label: 'Past week',
        value: dayjs(new Date(new Date().setMonth(new Date().getDay() - 7))).format('YYYY-MM-DD'),
      },
      {
        label: 'Past 24 hours',
        value: dayjs(new Date(new Date().setMonth(new Date().getDay() - 1))).format('YYYY-MM-DD'),
      },
    ],
  },
  {
    label: 'Job Type',
    value: 'job_type',
    type: 'checkbox',
    options: [
      {label: 'Full-time', value: 'Full-time'},
      {label: 'Part-time', value: 'Part-time'},
    ],
  },
  {
    label: 'Specialties',
    value: 'specialties',
    type: 'checkbox',
    options: [
      {label: 'Bachelors', value: 'Bachelors'},
      {label: 'Business', value: 'Business'},
      {label: 'IT', value: 'IT'},
      {label: 'Engineering', value: 'Engineering'},
      {label: 'Marketing', value: 'Marketing'},
      {label: 'Data science', value: 'Data science'},
      {label: 'Management', value: 'Management'},
      {label: 'Content', value: 'Content'},
      {label: 'HR', value: 'HR'},
      {label: 'Finance', value: 'Finance'},
      {label: 'Design', value: 'Design'},
    ],
  },
  {
    label: 'Location',
    value: 'location',
    type: 'checkbox',
    options: getFiltersCountries(STATES as any),
  },
  {label: 'Monthly Salary Estimate', value: 'salary', type: 'price-range'},
  {
    label: 'Experience level',
    value: 'experience_level',
    type: 'checkbox',
    options: [
      {
        label: 'Internship',
        value: 'Internship',
      },
      {
        label: 'Entry level',
        value: 'Entry level',
      },
      {
        label: 'Intermediate',
        value: 'Intermediate',
      },
      {
        label: 'Mid - Senior level',
        value: 'Mid - Senior level',
      },
    ],
  },
]
