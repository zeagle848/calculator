import { parseStringForDisplay } from './parse-string';

export function operate({ operator, leftOperand, rightOperand }) {
  const leftOperandFloat = parseFloat(leftOperand);
  const rightOperandFloat = parseFloat(rightOperand);

  switch (operator) {
    case 'add':
      return parseStringForDisplay(leftOperandFloat + rightOperandFloat);
    case 'minus':
      return parseStringForDisplay(leftOperandFloat - rightOperandFloat);
    case 'divide':
      return parseStringForDisplay(leftOperandFloat / rightOperandFloat);
    case 'multiply':
      return parseStringForDisplay(leftOperandFloat * rightOperandFloat);
    default:
      return '';
  }
}
