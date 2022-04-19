export type FormattedValueType = 'currency' | 'phone' | 'cpf' | 'cnpj' | 'date' | 'cep' | 'none'

export type FormattedValue = {
  formattedValue: string
  value: number | string
}

export const onlyLetters = (value: string): string => value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, '')
export const onlyNumbers = (value: string): string => value.replace(/\D/g, '')

const unformattedCurrencyValue = (value: string): number => {
  return Number(onlyNumbers(value)) / 100
}
const formatCurrencyValue = (value: number): string => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const formatBrPhoneNumber = (phoneNumber: string): string => {
  phoneNumber.replace(/\D/g, '').replace(/^0/, '')

  if (phoneNumber.length > 10) {
    phoneNumber = phoneNumber.replace(/^(\d\d)(\d{1})(\d{4})(\d{4}).*/, '$1 $2 $3 $4')
  } else if (phoneNumber.length > 5) {
    phoneNumber = phoneNumber.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '$1 $2 $3')
  } else if (phoneNumber.length > 2) {
    phoneNumber = phoneNumber.replace(/^(\d\d)(\d{0,5})/, '$1 $2')
  } else {
    phoneNumber = phoneNumber.replace(/^(\d*)/, '$1')
  }

  return phoneNumber
}

const formatCPFNumber = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

const formatCNPJNumber = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

const unformattedDateValue = (value: string): string => {
  return value.replace(/\D/g, '-')
}
const formatDateValue = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1')
}

const formatCEPValue = (value: string): string => value.replace(/\D/g, '').replace(/^(\d{5})(\d{3})+?$/, '$1-$2')

export const format = (value: string, key?: FormattedValueType): FormattedValue => {
  const inputValue = value || ''
  let unformatted = onlyNumbers(value)
  let formattedValue
  switch (key) {
    case 'currency':
      unformatted = unformattedCurrencyValue(inputValue) as unknown as string
      formattedValue = formatCurrencyValue(unformatted as unknown as number)
      break
    case 'phone':
      formattedValue = formatBrPhoneNumber(unformatted)
      break
    case 'cpf':
      formattedValue = formatCPFNumber(unformatted)
      break
    case 'cnpj':
      formattedValue = formatCNPJNumber(unformatted)
      break
    case 'date':
      unformatted = unformattedDateValue(inputValue)
      formattedValue = formatDateValue(unformatted)
      break
    case 'cep':
      formattedValue = formatCEPValue(unformatted)
      break
    default:
      break
  }
  return {
    formattedValue: formattedValue || '',
    value: unformatted
  }
}
