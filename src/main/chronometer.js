/* eslint-disable sort-keys */
export const createChronometer = () => {
  const update = () => {
    clock += delta()
  }
  const delta = () => {
    var now = Date.now(),
      d = now - offset

    offset = now
    return d
  }
  let clock = 0
  let offset = 0
  let elapsedMs = 0
  let interval
  return {
    start: () => {
      interval = setInterval(update, 20)
    },

    stop: () => {
      clearInterval(interval)
    },
  }
}
