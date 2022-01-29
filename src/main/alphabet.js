export const buildLetters = (start, end) => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65)
  const alphab = alpha.map((x) => String.fromCharCode(x))
  let result = alphab.join('').toLowerCase()
  const isUpperCase = (letter) => {
    return letter.toUpperCase() === letter
  }
  if (start && isUpperCase(start)) {
    result = start + result.split(start.toLowerCase())[1].toUpperCase()
  } else if (start && !isUpperCase(start)) {
    result = start + result.split(start)[1]
  }
  if (end && isUpperCase(end)) {
    result = result.split(end)[0].toUpperCase() + end
  } else if (end && !isUpperCase(end)) {
    result = result.split(end)[0] + end
  }
  return result
}
