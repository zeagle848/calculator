import { calculatePercentage } from '../src/utils/percentage';

test('Can convert 100 to percentage', () => {
  expect(calculatePercentage('100')).toBe(1);
});

test('Can convert 50 to percentage', () => {
  expect(calculatePercentage('50')).toBe('0.50');
});

test('Can convert 8.5 to percentage and round up', () => {
  expect(calculatePercentage('8.5')).toBe('0.09');
});

test('Can convert 2 to percentage', () => {
  expect(calculatePercentage('2')).toBe('0.02');
});
