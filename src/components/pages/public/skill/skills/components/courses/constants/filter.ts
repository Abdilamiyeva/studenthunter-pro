export const CategoriesData = [
  {
    name: 'Development',
    value: 'development',
    child: Array(7).fill({
      name: 'Development',
      child: Array(3).fill({name: 'Javascript', child: []}),
      value: 'development',
    }),
  },
  {
    name: 'Business',
    value: 'business',
    child: Array(7).fill({name: 'Business 1', child: Array(3).fill({name: 'Sales 2', child: []})}),
  },
  {
    name: 'Finance & Accounting',
    child: Array(7).fill({
      name: 'Finance & Accounting 1',
      child: Array(4).fill({name: 'Finance & Accounting 1', child: []}),
    }),
  },
  {
    name: 'IT & Software',
    child: Array(7).fill({
      name: 'IT & Software 1',
      child: Array(7).fill({name: 'IT & Software 2', child: []}),
    }),
  },
  {
    name: 'Office Productivity',
    child: Array(7).fill({
      name: 'Office Productivity 1',
      child: Array(10).fill({name: 'Office Productivity 2', child: []}),
    }),
  },
  {
    name: 'Design',
    child: Array(7).fill({
      name: 'Design 1',
      child: Array(1).fill({name: 'Design 2', child: []}),
    }),
  },
  {
    name: 'Marketing',
    child: Array(10).fill({name: 'Marketing 1', child: Array(2).fill({name: 'Marketing 1', child: []})}),
  },
]
