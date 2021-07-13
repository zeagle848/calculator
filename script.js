const display = document.querySelector("#display");
const clearButton = document.querySelector("#clear");
const numeralButtons = document.querySelectorAll(".numeral-button");
const operatorButtons = document.querySelectorAll(".operator-button");

let currentNum = "";
let firstNum = "";
let opSelected = false;
let selectedOp ="";

operatorButtons.forEach(button => {
    button.addEventListener("click", function(e){
        let operator = e.target.id;
        console.log(operator);
        if(currentNum===""){ //This is for when there is no number given

        }else if(opSelected){ //This is for when an operator has already been selected
        
        }else if(currentNum!=="" && firstNum!==""){ //This is for when two numbers have been given and the user either wants to display the result or continue operating on an existing result
            let result = operate(selectedOp, parseFloat(firstNum), parseFloat(currentNum));
            
        }else{
            firstNum = currentNum;
            currentNum = "";
            button.style.backgroundColor = "#f9b15e";
            opSelected = true;
            selectedOp = operator;
        }
    })
})

numeralButtons.forEach(button => {
    button.addEventListener("click", function(e){
        let numeral = e.target.id;
        if(currentNum.length>=9){

        }else if(currentNum.length===0&&numeral==="point"){
            currentNum+="0."
            display.textContent = currentNum;
        }
        else {
            changeBGColor();
            currentNum += returnNum(numeral);
            display.textContent = currentNum;
            opSelected = false;
        }
    })
})

clearButton.addEventListener("click", function(){
    display.textContent = "0";
    currentNum = "";
    firstNum = "";
    opSelected = false;
    changeBGColor();
})

function changeBGColor(){
    operatorButtons.forEach(button => {
        button.style.backgroundColor = "#FA8F13";
    })
}

function returnNum (numName){
    switch (numName){
        case "one":
            return "1";
        case "two":
            return "2";
        case "three":
            return "3";
        case "four":
            return "4";
        case "five":
            return "5";
        case "six":
            return "6";
        case "seven":
            return "7";
        case "eight":
            return "8";
        case "nine":
            return "9";
        case "zero":
            return "0";
        case "point":
            return ".";

    }
}

function operate(operator, a, b){
    switch (operator){
        case "add":
            return add(a, b);
        case "minus":
            return subtract(a, b);
        case "divide":
            return divide(a, b);
        case "multiply":
            return multiply(a, b);
    }
}

function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a-b;
}
function divide(a, b){
    return a/b;
}

function multiply(a, b){
    return a*b;
}