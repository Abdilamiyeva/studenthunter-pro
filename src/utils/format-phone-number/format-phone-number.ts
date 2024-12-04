export const formatInputValueAsPhoneNumber = (inputValue: string) => {
  let formattedNumber = inputValue.replace(/\D/g, '').slice(0, 9)

  if (formattedNumber.length > 2) {
    formattedNumber = `(${formattedNumber.slice(0, 2)}) ${formattedNumber.slice(2)}`
  }

  if (formattedNumber.length > 6) {
    formattedNumber = `${formattedNumber.slice(0, 4)}${formattedNumber.slice(4)}`
  }

  if (formattedNumber.length > 8) {
    formattedNumber = `${formattedNumber.slice(0, 8)} ${formattedNumber.slice(8)}`
  }

  if (formattedNumber.length > 11) {
    formattedNumber = `${formattedNumber.slice(0, 11)} ${formattedNumber.slice(11)}`
  }

  return formattedNumber
}

export const formatGlobalPhoneNumber = (phoneNumber: string, country: string) => {
  switch (country) {
    case 'ca':
      return phoneNumber.slice(0, 11).replace(/(\d{1,3})(\d{0,3})(\d{0,4})/, (_, p1, p2, p3) => {
        let parts = [p1, p2, p3].filter(part => part !== '')

        if (parts.join('').length > 10) {
          parts = [parts[0], parts[1].slice(0, 3), parts[2].slice(0, 4)]
        }

        return parts.join(' ')
      })
    case 'us':
      return phoneNumber.slice(0, 11).replace(/(\d{1,3})(\d{0,3})(\d{0,4})/, (_, p1, p2, p3) => {
        let parts = [p1, p2, p3].filter(part => part !== '')

        if (parts.join('').length > 10) {
          parts = [parts[0], parts[1].slice(0, 3), parts[2].slice(0, 4)]
        }

        return parts.join(' ')
      })
    case 'cn':
      return phoneNumber
        .slice(0, 12)
        .replace(/(\d{0,3})(\d{0,4})(\d{0,4})/, (_, p1, p2, p3) => [p1, p2, p3].filter(part => part !== '').join(' '))
    case 'se':
      return phoneNumber
        .slice(0, 10)
        .replace(/(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,2})/, (_, p1, p2, p3, p4) =>
          [p1, p2, p3, p4].filter(part => part !== '').join(' '),
        )
    case 'uk':
      return phoneNumber
        .slice(0, 13)
        .replace(/(\d{0,5})(\d{0,6})/, (_, p1, p2) => [p1, p2].filter(part => part !== '').join(' '))
    case 'uz':
      return phoneNumber
        .slice(0, 10)
        .replace(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/, (_, p1, p2, p3, p4) =>
          [p1, p2, p3, p4].filter(part => part !== '').join(' '),
        )
    default:
      return phoneNumber
  }
}

export const formatBackToShortNumber = (phoneNumber: string) => phoneNumber.replaceAll(' ', '')
