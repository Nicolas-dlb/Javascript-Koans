export const maxLength = (array) => {
  let maxL = 0
  array.map((x) => {
    let length = 0
    if (x instanceof Array) {
      length = x.length
    } else {
      length = x.split('').length
    }
    if (length > maxL) maxL = length
  })
  return maxL
}
