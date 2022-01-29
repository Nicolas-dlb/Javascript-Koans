const factorial = (x) => {
  return x === 0 ? 1 : x * factorial(x - 1)
}

export default factorial
