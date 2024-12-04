export const useErrorMsg = () => (error: any) =>
  typeof error === 'string'
    ? error
    : typeof error === 'object'
    ? error?.msg || error?.error?.msg || error?.data?.error?.msg || 'unknown error occured'
    : 'unknown error occured'
