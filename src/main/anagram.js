export const isAnagram = (a, b) => {
  let y = a.split(' ').join('').split("'").join('').split('').sort()
  let z = b.split(' ').join('').split("'").join('').split('').sort()
  let areAnagrams = true
  for (let i = 0; i < y.length && areAnagrams; i++) {
    if (y.length === z.length) {
      if (y[i].toLowerCase() === z[i].toLowerCase()) {
        // good for now
        // console.log('up to now it matches')
      } else {
        // a letter differs
        console.log('a letter differs')
        areAnagrams = false
      }
    } else {
      //  console.log(a + ' has a different amount of letters than ' + b)
      areAnagrams = false
    }
  }

  return areAnagrams
}
