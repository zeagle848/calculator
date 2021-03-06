import { operate } from '../src/utils/operate';

test('Can add two numbers', () => {
  expect(operate({ operator: 'add', leftOperand: '2', rightOperand: '2' })).toBe(4);
});

test('Can minus two numbers', () => {
  expect(operate({ operator: 'minus', leftOperand: '10', rightOperand: '2' })).toBe(8);
});

test('Can multiply two numbers', () => {
  expect(operate({ operator: 'multiply', leftOperand: '8', rightOperand: '2' })).toBe(16);
});

test('Can divide two numbers', () => {
  expect(operate({ operator: 'divide', leftOperand: '25', rightOperand: '5' })).toBe(5);
});

test('Can convert long numbers to exponentials', () => {
  expect(operate({ operator: 'multiply', leftOperand: '9999999', rightOperand: '9999999' })).toBe(
    '1.00e+14',
  );
});

test('Can convert long number to negative exponential', () => {
  expect(operate({ operator: 'multiply', leftOperand: '-9999999', rightOperand: '9999999' })).toBe(
    '-1.00e+14',
  );
});
