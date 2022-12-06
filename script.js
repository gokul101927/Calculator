const operators = document.querySelectorAll(".operator");
const operands = document.querySelectorAll(".operand");
const display = document.querySelector('.display');
const clear = document.querySelector('.clear');
const buttons = document.querySelectorAll('.btn');

let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

function updateDisplay() {
    display.textContent = displayValue;
    if(displayValue.length > 9) {
        display.textContent = displayValue.substring(0, 9);
    }
}

const sum = function (allOperator) {
    return allOperator.reduce((total, current) => total + current, 0);
}

const subtract = function (allOperator) {
    return allOperator.reduce((total, current) => total - current);
}

const divide = function (firstOperator, secondOperator) {
    return secondOperator === 0 ? "Can't divide by zero" : firstOperator / secondOperator;
}

const multiply = function (allOperator) {
    return allOperator.length ? allOperator.reduce((accumulator, nextItem) => accumulator * nextItem) : 0;
}

clear.addEventListener('click', () => {
    display.textContent = '0';
})

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('operand')) {
           inputOperand(btn.value);
           updateDisplay();
        }

        if (btn.classList.contains('operator')) {
            if (secondOperand === 0) {
                operator = btn.innerHTML;
                firstOperand = operand;
                operand = 0;
            }
        }
            

        if (btn.classList.contains('equals')) {
            secondOperand = operand;
            let result = operate(+firstOperand, +secondOperand, operator);
            console.log(result);
            updateDisplay(result);
        }

    })
})

function operate(firstOperator, secondOperator, operand) {
    if (operand === "+") {
        return sum([firstOperator, secondOperator]);
    } else if (operand === "-") {
        return subtract([firstOperator, secondOperator]);
    } else if (operand === "/") {
        return divide(firstOperator, secondOperator);
    } else if (operand === "*") {
        return multiply([firstOperator, secondOperator]);
    }
}


function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}
