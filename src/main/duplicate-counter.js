const countDuplicate = (ar) => {
  const num = []
  const result = []
  ar.map((x) => (num.includes(x) ? result.push(x) : num.push(x)))
  return result.length
}

export { countDuplicate }
