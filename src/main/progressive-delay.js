export const progressiveDelay = async (num, func) => {
  // const a = (ms) =>
  //   new Promise(function (resolve, reject) {
  //     setTimeout(function () {
  //       func
  //       resolve()
  //     }, ms)
  //   })
  // async function wrapperFunc() {
  //   try {
  //     let r1 = await a(1000)
  //     let r2 = await a(2000)
  //     let r3 = await a(3000)
  //     let r4 = await a(2000)
  //     // now process r2
  //     await r3 // this will be the resolved value of the returned promise
  //   } catch (e) {
  //     console.log(e)
  //     throw e // let caller know the promise was rejected with this reason
  //   }
  // }
  // wrapperFunc()
}
