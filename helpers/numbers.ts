export const numberFromString = (
  string: string,
  type: NumberType = 'int'
): number => {
  const parseNumber = type === 'int' ? parseInt : parseFloat
  const number = parseNumber(string.replace(/\D/g, ''))

  return !isNaN(number) || isFinite(number) ? number : 0
}


type NumberType = 'int' | 'float'