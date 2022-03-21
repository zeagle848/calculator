import './style.css';
import { updateDisplay } from './utils/update-display';
import {
  resetState,
  getCurrentValue,
  setCurrentValue,
  setLastAction,
} from './state/calculator-state';
import { numeralButtonsClickEvent } from './component-utils/numeral-buttons-click-event';
import { equalsButtonClickEvent } from './component-utils/operator-events/equals-button-click-event';
import { arithmeticButtonsClickEvent } from './component-utils/operator-events/arithmetic-buttons-click-event';
import { toggleSign } from './utils/toggle-sign';
import { calculatePercentage } from './utils/percentage';

const numeralButtons = document.querySelectorAll('.numeral-button');
const operatorButtons = document.querySelectorAll('.operator-button');

numeralButtons.forEach((button) => {
  button.addEventListener('click', numeralButtonsClickEvent);
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', arithmeticButtonsClickEvent);
});

document.getElementById('equals').addEventListener('click', equalsButtonClickEvent);

document.getElementById('clear').addEventListener('click', () => {
  resetState();
});

document.getElementById('toggle-sign').addEventListener('click', () => {
  setCurrentValue({ value: toggleSign(getCurrentValue()) });
  setLastAction({ latestAction: 'numCapture' });
  updateDisplay({ updateValue: getCurrentValue() });
});

document.getElementById('percentage').addEventListener('click', () => {
  setCurrentValue({ value: calculatePercentage(getCurrentValue()) });
  setLastAction({ latestAction: 'numCapture' });
  updateDisplay({ updateValue: getCurrentValue() });
});

resetState();
updateDisplay({ updateValue: '0' });
