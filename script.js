// THE STATE OF THE PROGRAM IS THAT WHEN THE EQUALS EVENT IS TRIGGERERD AND THE PROGRAM 
// THEN TRIES TO TRIGGER A DIFFERENT OPERATION, THE OPERATION BEFORE THE EQUAL SIGN OVERRULES 
// THE SELECTED-OP. 


const display = document.querySelector("#display");
const specialButtons = document.querySelectorAll(".special-button");
const numeralButtons = document.querySelectorAll(".numeral-button");
const operatorButtons = document.querySelectorAll(".operator-button");

let currentNum = "";
let firstNum = "";
let opSelected = false;
let selectedOp ="";

operatorButtons.forEach(button => {
    button.addEventListener("click", function(e){
        let operator = e.target.id;
        if(currentNum===""){ //This is for when there is no number given

        }else if(opSelected){ //This is for when an operator has already been selected
        
        }else if(currentNum!=="" && firstNum!==""){ //This is for when two numbers have been given and the user either wants to display the result or continue operating on an existing result
            let result = operate(selectedOp, parseFloat(firstNum), parseFloat(currentNum)).toString(); //Compute the result of the two inputs
            firstNum = reduceNum(result); //Make firstNum equal to our result
            currentNum = ""; //Clear currentNum. This is because once we have the result of our two inputs we want to a) display that result or b) begin a new calculation
            display.textContent = firstNum;
            if(operator === "equals"){ //If the operator selected is the '=' sign then we want to display the result and make operator equal to blank
                selectedOp = "";
                opSelected = false;
            }else{ //When any other sign is selected we want to display the result and then make selectedOp to be the selected operator
                button.style.backgroundColor = "#f9b15e";
                selectedOp = operator;
                opSelected = true;
            }
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

specialButtons.forEach(button => {
    button.addEventListener("click", function(e){
        let buttonType = e.target.id;
        if(buttonType==="clear"){
            display.textContent = "0";
            currentNum = "";
            firstNum = "";
            opSelected = false;
            changeBGColor();
        }else if(buttonType==="toggle-sign"){
            current
        }
    })
})




function reduceNum(myNum){
    let returnNum = myNum.toString();
    if(returnNum.length >= 9){
        returnNum = returnNum.slice(0, 9);
    }
    return parseFloat(returnNum);
}

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