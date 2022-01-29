export default function sum(...values) {
  let x = 0
  values = values.join('').split('')
  values.map((item) => {
    if ('0123456789'.includes(Number(item))) {
      x += Number(item)
    }
  })
  return x
}
