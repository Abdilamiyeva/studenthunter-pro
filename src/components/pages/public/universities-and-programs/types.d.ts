export interface TabsType {
  [key: string]: {
    filter: typeof UNIVERSITY_FILTERS | typeof PROGRAM_FILTERS
    content: ReactNode
  }
}
