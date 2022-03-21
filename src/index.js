import './style.css';
import { updateDisplay } from './utils/update-display';
import {
  resetState,
  getCurrentValue,
  setCurrentValue,
  setLastAction,
} from './state/calculator-state';
import { numeralButtonEvent } from './component-utils/numeral-button-event';
import { equalsEvent } from './component-utils/operator-events/equals-event';
import { arithmeticEvent } from './component-utils/operator-events/arithmetic-events';
import { toggleSignEvent } from './component-utils/toggle-sign-event';
import { percentageEvent } from './component-utils/percentage-event';

const numeralButtons = document.querySelectorAll('.numeral-button');
const operatorButtons = document.querySelectorAll('.operator-button');

numeralButtons.forEach((button) => {
  button.addEventListener('click', numeralButtonEvent);
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', arithmeticEvent);
});

document.getElementById('equals').addEventListener('click', equalsEvent);

document.getElementById('clear').addEventListener('click', () => {
  resetState();
});

document.getElementById('toggle-sign').addEventListener('click', () => {
  setCurrentValue({ value: toggleSignEvent(getCurrentValue()) });
  setLastAction({ latestAction: 'numCapture' });
  updateDisplay({ updateValue: getCurrentValue() });
});

document.getElementById('percentage').addEventListener('click', () => {
  setCurrentValue({ value: percentageEvent(getCurrentValue()) });
  setLastAction({ latestAction: 'numCapture' });
  updateDisplay({ updateValue: getCurrentValue() });
});

resetState();
updateDisplay({ updateValue: '0' });
