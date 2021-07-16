// THE STATE OF THE PROGRAM IS THAT WHEN THE EQUALS EVENT IS TRIGGERERD AND THE PROGRAM 
// THEN TRIES TO TRIGGER A DIFFERENT OPERATION, THE OPERATION BEFORE THE EQUAL SIGN OVERRULES 
// THE SELECTED-OP. 


const display = document.querySelector("#display");
const specialButtons = document.querySelectorAll(".special-button");
const numeralButtons = document.querySelectorAll(".numeral-button");
const operatorButtons = document.querySelectorAll(".operator-button");

let currentValue;
let leftOperand;
let operator;
let state;

function resetState() {
    currentValue = '0';
    leftOperand = '';
    operator = '';
    state = 'numCapture';
    updateDisplay(currentValue);
}

function updateDisplay(value) {
    display.textContent = value;
}

numeralButtons.forEach((button) => {
    button.onclick = function(event) {
        // If the input is longer than 9 characters do nothing
        if (currentValue.length >= 9 
            || (event.target.value === "." && currentValue.includes("."))
        ) return; 

        if (state === 'result') {
            leftOperand = '';
        }

        // If the state is numCapture and the current value is not 0, append currentValue with the number selected
        if (state === 'numCapture' && currentValue !== '0') { 
            currentValue += event.target.value;
        } 
        // If the current state is NOT numCapture or the initial value is 0 then make currentValue equal to number selected
        else { 
            if (event.target.value === ".") {
                currentValue = "0.";
            }
            currentValue = event.target.value;
        }

        state = 'numCapture';
        updateDisplay(currentValue);
    }
});

operatorButtons.forEach((button) => {
    button.onclick = function(event) {
        if (state === 'numCapture') {
            // If leftOperand is undefined or the last button pressed was equals then make leftOperand equal to currentValue
            if (!leftOperand) { 
                leftOperand = currentValue;
            } 
            // If we have just entered a number after selecting an operator then compute the result and dislay it
            else {
                currentValue = leftOperand = operate(operator, leftOperand, currentValue); 
                updateDisplay(currentValue);
            }
        }
        
        state = 'operatorCapture';
        operator = event.target.value;
    };
});

document.getElementById('equals').onclick = function() {
    if (leftOperand && operator) {
        currentValue = leftOperand = operate(operator, leftOperand, currentValue);
        updateDisplay(currentValue);
        state = 'result';
        operator = '';
    }
};

document.getElementById('clear').onclick = function() {
    resetState();
};

document.getElementById('toggle-sign').onclick = function() {
    currentValue =
        currentValue.includes('-') 
        ? currentValue.substring(1, currentValue.length) 
        : `-${currentValue}`;
    updateDisplay(currentValue);
    state = 'numCapture';
};

document.getElementById('percentage').onclick = function() {
    currentValue = operate('divide', currentValue, '100');
    state = 'numCapture';
};

function reduceFloatLength(float) {
    let numString = float.toString();

    return numString.length >= 9 
        ? numString.slice(0, 9) 
        : numString;
}

function changeBGColor() {
    operatorButtons.forEach(button => {
        button.style.backgroundColor = "#FA8F13";
    });
}

function operate(operator, leftOperand, rightOperand) {
    const leftOperandFloat = parseFloat(leftOperand);
    const rightOperandFloat = parseFloat(rightOperand);
    switch (operator){
        case "add":
            return reduceFloatLength(leftOperandFloat + rightOperandFloat);
        case "minus":
            return reduceFloatLength(leftOperandFloat - rightOperandFloat);
        case "divide":
            return reduceFloatLength(leftOperandFloat / rightOperandFloat);
        case "multiply":
            return reduceFloatLength(leftOperandFloat * rightOperandFloat);
    }
}

resetState();