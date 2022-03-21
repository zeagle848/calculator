import {
  getCurrentValue,
  getLastAction,
  setLeftOperand,
  setLastAction,
  setCurrentValue,
} from '../state/calculator-state';
import { updateDisplay } from '../utils/update-display';

export function numeralButtonEvent(event) {
  // If the input is longer than 9 characters do nothing
  if (
    (getCurrentValue().length >= 9 && getLastAction() === 'numCapture') ||
    (event.target.value === '.' && getCurrentValue().includes('.'))
  )
    return;

  if (getLastAction() === 'result') {
    setLeftOperand({ value: '' });
  }

  // If the lastAction is numCapture and the current value is not 0, append currentValue
  // with the number selected
  if (getLastAction() === 'numCapture' && getCurrentValue() !== '0' && getCurrentValue() !== '-0') {
    const newCurrentValue = getCurrentValue() + event.target.value;
    setCurrentValue({ value: newCurrentValue });
  }
  // If the current lastAction is NOT numCapture or the initial value is 0 then make
  // currentValue equal to number selected
  else {
    if (event.target.value === '.') {
      setCurrentValue({ value: `${getCurrentValue()}.` });
    }
    setCurrentValue({ value: event.target.value });
  }

  setLastAction({ latestAction: 'numCapture' });
  updateDisplay({ updateValue: getCurrentValue() });
}
