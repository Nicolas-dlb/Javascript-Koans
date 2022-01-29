const getAllTruthies = () => {
  return ['a', 1, true, -1, [], {}, new Date()]
}

const getAllFalsies = () => {
  return ['', 0, NaN, false, null, undefined]
}

export { getAllFalsies, getAllTruthies }
