export const findMultiples = (max, multiples) => {
  let result = []
  let num = 0
  let numA = 0
  let numB = 0
  if (multiples instanceof Array) {
    const a = multiples[0]
    const b = multiples[1]
    while (numA + a <= max) {
      numA += a
      result.push(numA)
    }
    while (numB + b <= max) {
      numB += b
      result.push(numB)
    }
  } else {
    while (num + multiples <= max) {
      num += multiples
      result.push(num)
    }
  }
  result.sort()
  if (result[0] == 10) {
    result
      .join('')
      .split('10')[0]
      .map((x) => Number(x))
  }
  return result
}
