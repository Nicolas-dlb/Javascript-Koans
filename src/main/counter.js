export default function counterFactory() {
  let result = 0
  return () => {
    result += 1
    return result
  }
}
