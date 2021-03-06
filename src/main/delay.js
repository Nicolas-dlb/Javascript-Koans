const delay = (ms, value) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(value)
    }, ms)
  })
}

export default delay
