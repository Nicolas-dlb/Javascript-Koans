export const computeCart = (cartContent) => {
  cartContent = cartContent.split('\n')
  let result = 0
  cartContent.map((line) => {
    const number = Number(line.split(' ')[0])
    const price = Number(line.split(' ')[1])
    if (line.split(' ').length > 1) {
      result += number * price
    }
  })

  return result
}
