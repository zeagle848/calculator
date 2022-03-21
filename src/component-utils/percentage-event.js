import { operate } from '../utils/operate';

export function percentageEvent(currentValue) {
  return operate({
    operator: 'divide',
    leftOperand: currentValue,
    rightOperand: '100',
  });
}
