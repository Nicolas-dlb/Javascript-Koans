const doAfter1s = async (value, error, syncError, log) => {
  if (error && syncError) {
    throw error
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(error)
      } else {
        resolve(value)
      }
    }, 1000)
  })
}

const doAsync = (value, err, syncError, log) => {
  return new Promise(function (resolve, reject) {
    if (err && syncError) {
      log(err.message)
      reject(err)
    } else {
      setTimeout(function () {
        if (err) {
          log && log(err.message)
          reject(err)
        } else {
          resolve(value)
        }
      }, 1000)
    }
  })
}

export { doAsync }
