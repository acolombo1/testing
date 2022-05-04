const reverseString = require('./script2.js');

test('tests "\n puta" to yield "atup \n"', () => {
  expect(reverseString('\n puta')).toBe('atup \n');
});