import "./style.css";

const display = document.querySelector("#display");
const numeralButtons = document.querySelectorAll(".numeral-button");
const operatorButtons = document.querySelectorAll(".operator-button");

let currentValue;
let leftOperand;
let operator;
let lastAction;

function updateDisplay(value) {
  display.textContent = value;
}

function resetState() {
  currentValue = "0";
  leftOperand = "";
  operator = "";
  lastAction = "numCapture";
  updateDisplay(currentValue);
}

function parseStringForDisplay(float) {
  const numString = float.toString();
  const number = float;
  const pointIndex = numString.indexOf(".");
  if (pointIndex === -1) {
    return numString.length >= 9 ? number.toExponential(2) : number;
  }
  return pointIndex >= 9 ? number.toExponential(2) : number.toFixed(2);
}

function operate(operator, leftOperand, rightOperand) {
  const leftOperandFloat = parseFloat(leftOperand);
  const rightOperandFloat = parseFloat(rightOperand);

  switch (operator) {
    case "add":
      return parseStringForDisplay(leftOperandFloat + rightOperandFloat);
    case "minus":
      return parseStringForDisplay(leftOperandFloat - rightOperandFloat);
    case "divide":
      return parseStringForDisplay(leftOperandFloat / rightOperandFloat);
    case "multiply":
      return parseStringForDisplay(leftOperandFloat * rightOperandFloat);
    default:
      return "";
  }
}

numeralButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // If the input is longer than 9 characters do nothing
    if (
      (currentValue.length >= 9 && lastAction === "numCapture") ||
      (event.target.value === "." && currentValue.includes("."))
    )
      return;

    if (lastAction === "result") {
      leftOperand = "";
    }

    // If the lastAction is numCapture and the current value is not 0, append currentValue
    // with the number selected
    if (
      lastAction === "numCapture" &&
      currentValue !== "0" &&
      currentValue !== "-0"
    ) {
      currentValue += event.target.value;
    }
    // If the current lastAction is NOT numCapture or the initial value is 0 then make
    // currentValue equal to number selected
    else {
      if (event.target.value === ".") {
        currentValue = `${currentValue}.`;
      }
      currentValue = event.target.value;
    }

    lastAction = "numCapture";
    updateDisplay(currentValue);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (lastAction === "numCapture") {
      // If leftOperand is undefined or the last button pressed was equals then make
      // leftOperand equal to currentValue
      if (!leftOperand) {
        leftOperand = currentValue;
      }
      // If we have just entered a number after selecting an operator then compute
      // the result and dislay it
      else {
        leftOperand = operate(operator, leftOperand, currentValue);
        currentValue = leftOperand;
        updateDisplay(currentValue);
      }
    }

    lastAction = "operatorCapture";
    operator = event.target.value;
  });
});

document.getElementById("equals").addEventListener("click", () => {
  if (leftOperand && operator) {
    leftOperand = operate(operator, leftOperand, currentValue);
    currentValue = leftOperand;

    updateDisplay(currentValue);

    lastAction = "result";
    operator = "";
  }
});

document.getElementById("clear").addEventListener("click", () => {
  resetState();
});

document.getElementById("toggle-sign").addEventListener("click", () => {
  currentValue = currentValue.includes("-")
    ? currentValue.substring(1, currentValue.length)
    : `-${currentValue}`;
  updateDisplay(currentValue);
  lastAction = "numCapture";
});

document.getElementById("percentage").addEventListener("click", () => {
  currentValue = operate("divide", currentValue, "100");
  lastAction = "numCapture";
  updateDisplay(currentValue);
});

resetState();
