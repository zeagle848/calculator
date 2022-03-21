import { toggleSign } from '../src/utils/toggle-sign';

test('Can convert positive number to negative number', () => {
  expect(toggleSign('200')).toBe('-200');
});

test('Can convert negative number to positive number', () => {
  expect(toggleSign('-200')).toBe('200');
});

test('Can handle input zero (0) ', () => {
  expect(toggleSign('0')).toBe('0');
});
