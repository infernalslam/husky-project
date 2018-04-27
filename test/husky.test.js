const husky = require('../husky')
/* global test, expect */
test('test sound with husky', () => {
  expect(husky.sound('woof')).toBe('Husky sound like woof')
})
