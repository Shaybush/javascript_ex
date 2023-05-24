const maxNumberInArr = require("./maxNumberInArr");

test('should return max number', () => {
  const arr = [1, 89, 35, 29, 101]
  expect(maxNumberInArr(arr)).toBe(101);
});

test('should return null for null param', () => {
  expect(maxNumberInArr(null)).toBe(null);
});

test('should return null for empty array', () => {
  expect(maxNumberInArr([])).toBe(null);
});
