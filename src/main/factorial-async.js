export default async function factorial(x) {
  const facto = (x) => {
    return x === 0 ? 1 : x * factorial(x - 1)
  }
  setTimeout(Promise.resolve(facto(x)), 20)
}
