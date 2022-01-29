import { basename } from 'path'

/**
 * @level 2
 * @tags sync
 */

const modName = basename(__filename, '.test.js')

describe('anagram', () => {
  describe('isAnagram', () => {
    let isAnagram
    beforeAll(async () => {
      ;({ isAnagram } = await import(`../main/${modName}`))
    })
    test.each([
      [true, 'énergie noire', 'reine ignorée'],
      [false, 'énergie noire', 'reine ignoré'],
      [false, 'énergie noire', 'reine ignoréz'],
      [true, 'énergie  noire', 'reine ignorée  '],
      [true, 'Albert Einstein', "rien n'est établi"],
      [true, 'Entreprise Monsanto', 'poison très rémanent'],
      [true, 'Laurent Fabius', 'Naturel abusif'],
    ])('should return %p given %p and %p', (anagram, s1, s2) => {
      // When
      const result = isAnagram(s1, s2)
      if (result !== anagram) {
        console.log(s1, s2)
      }
      expect(result).toEqual(anagram)
    })
  })
})
