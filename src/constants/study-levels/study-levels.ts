export enum StudyLevel {
  BACHELOR = 'Bachelor',
  CERTIFICATION = 'Certification',
  MBA = 'MBA',
  MASTERS = 'Masters',
  PHD = 'PhD',
  RESEARCH = 'research',
}

export const STUDY_LEVELS = [
  {label: 'Bachelor', value: StudyLevel.BACHELOR},
  {label: 'Certification', value: StudyLevel.CERTIFICATION},
  {label: 'MBA', value: StudyLevel.MBA},
  {label: 'Masters', value: StudyLevel.MASTERS},
  {label: 'Research', value: StudyLevel.RESEARCH},
  {label: 'PhD', value: StudyLevel.PHD},
]

export const LEARNING_LEVELS = [
  {label: 'Beginner', value: 'Beginner'},
  {label: 'Intermediate', value: 'Intermediate'},
  {label: 'Advanced', value: 'Advanced'},
]

export const SKILL_CATEGORIES = [
  {label: 'Beginner', value: 'Beginner'},
  {label: 'Intermediate', value: 'Intermediate'},
  {label: 'Advanced', value: 'Advanced'},
]

export const STUDY_DURATIONS = [
  {label: '4-year', value: '4'},
  {label: '2-year', value: '2'},
]

export const STUDY_FORMATS = [
  {label: 'Full time', value: 'Full time'},
  {label: 'Part time', value: 'Part time'},
]

export const STUDY_ATTENDANCE = [
  {label: 'Offline on Campus', value: 'Offile on Campus'},
  {label: 'Offline outside of Campus', value: 'Offile outside of Campus'},
  {label: 'Both - Online & Offline', value: 'Both - Online & Offline'},
]
