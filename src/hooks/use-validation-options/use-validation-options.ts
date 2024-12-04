import {RegisterOptions} from 'react-hook-form'

export const useValidationOptions =
  () =>
  (
    required: boolean,
    minLength?: boolean | number,
    maxLength?: boolean | number,
    extraValidatons = {},
  ): RegisterOptions<any> => {
    const validations: RegisterOptions<any> = extraValidatons

    if (required) {
      validations.required = 'Please fill out the form!'
    }

    if (typeof minLength === 'number') {
      validations.minLength = {
        value: minLength,
        message: `Minimum ${minLength} characters required`,
      }
    }

    if (typeof maxLength === 'number') {
      validations.maxLength = {
        value: maxLength,
        message: `Maximum ${maxLength} characters allowed`,
      }
    }

    return validations
  }
