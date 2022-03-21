import {
  getLastAction,
  getLeftOperand,
  getOperator,
  getCurrentValue,
  setCurrentValue,
  setLeftOperand,
  setOperator,
  setLastAction,
} from '../../state/calculator-state';
import { operate } from '../../utils/operate';
import { updateDisplay } from '../../utils/update-display';

export function arithmeticEvent(event) {
  if (getLastAction() === 'numCapture') {
    if (!getLeftOperand()) {
      setLeftOperand({ value: getCurrentValue() });
    } else {
      const newLeftOperand = operate({
        operator: getOperator(),
        leftOperand: getLeftOperand(),
        rightOperand: getCurrentValue(),
      });
      setLeftOperand({ value: newLeftOperand });
      setCurrentValue({ value: getLeftOperand() });
      updateDisplay({ updateValue: getCurrentValue() });
    }
  }
  setLastAction({ latestAction: 'operatorCapture' });
  setOperator({ newOperator: event.target.value });
}
