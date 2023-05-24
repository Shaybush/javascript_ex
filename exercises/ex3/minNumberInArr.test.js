const minNumberInArr = require("./minNumberInArr");

test('should return max number', () => {
    const arr = [1, 89, 35, 29, 101]
    expect(minNumberInArr(arr)).toBe(1);
});

test('should return null for null param', () => {
    expect(minNumberInArr(null)).toBe(null);
});

test('should return null for empty array', () => {
    expect(minNumberInArr([])).toBe(null);
});
