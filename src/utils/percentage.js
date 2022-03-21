import { operate } from './operate';

export function calculatePercentage(currentValue) {
  return operate({
    operator: 'divide',
    leftOperand: currentValue,
    rightOperand: '100',
  });
}
