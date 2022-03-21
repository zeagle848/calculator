import { toggleSignEvent } from '../src/component-utils/toggle-sign-event';

test('Can convert positive number to negative number', () => {
  expect(toggleSignEvent('200')).toBe('-200');
});

test('Can convert negative number to positive number', () => {
  expect(toggleSignEvent('-200')).toBe('200');
});

test('Can handle input zero (0) ', () => {
  expect(toggleSignEvent('0')).toBe('0');
});
