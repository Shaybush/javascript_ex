const switchCase = require('./switchCase');

test('should return 1', () => {
    expect(switchCase(1)).toBe("1");
  });
test('should return 4', () => {
    expect(switchCase(4)).toBe("4");
  });
test('should return 8', () => {
    expect(switchCase(8)).toBe("8");
  });
test('should return 3', () => {
    expect(switchCase(3)).toBe("3");
  });
test('should return 0', () => {
    expect(switchCase(0)).toBe(0);
  });
test('should return null', () => {
    expect(switchCase(null)).toBe(0);
  });