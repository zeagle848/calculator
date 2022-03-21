import {
  getLeftOperand,
  getOperator,
  setLeftOperand,
  setCurrentValue,
  setLastAction,
  setOperator,
  getCurrentValue,
} from '../../state/calculator-state';
import { updateDisplay } from '../../utils/update-display';
import { operate } from '../../utils/operate';

export function equalsButtonClickEvent() {
  if (getLeftOperand() && getOperator()) {
    const newLeftOperand = operate({
      operator: getOperator(),
      leftOperand: getLeftOperand(),
      rightOperand: getCurrentValue(),
    });
    console.log(newLeftOperand);
    setLeftOperand({ value: newLeftOperand });
    setCurrentValue({ value: getLeftOperand() });

    updateDisplay({ updateValue: getCurrentValue() });
    setLastAction({ latestAction: 'result' });
    setOperator({ newOperator: '' });
  }
}
