let state = {
  currentValue: '0',
  leftOperand: '',
  operator: '',
  lastAction: 'numCapture',
};

const display = document.querySelector('#display');

function updateDisplay(value) {
  display.textContent = value;
}

export function getCurrentValue() {
  return state.currentValue;
}

export function getLeftOperand() {
  return state.leftOperand;
}

export function getOperator() {
  return state.operator;
}

export function getLastAction() {
  return state.lastAction;
}

export function setCurrentValue({ value }) {
  state = {
    ...state,
    currentValue: value,
  };
}

export function setLeftOperand({ value }) {
  state = {
    ...state,
    leftOperand: value,
  };
}

export function setOperator({ newOperator }) {
  state = {
    ...state,
    operator: newOperator,
  };
}

export function setLastAction({ latestAction }) {
  state = {
    ...state,
    lastAction: latestAction,
  };
}
export function resetState() {
  state = {
    currentValue: '0',
    leftOperand: '',
    operator: '',
    lastAction: 'numCapture',
  };
  updateDisplay(state.currentValue);
}
