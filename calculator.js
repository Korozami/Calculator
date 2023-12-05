//containers for outputs
let total = ''
let arr = [];
let numStr = ''
let funcStr = ''

//basic functions
function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (number, number2, func) {
    let num1 = parseFloat(number)
    let num2 = parseFloat(number2)
    if(func == "+") {
        return add(num1, num2)
    } else if (func == "-") {
        return subtract(num1, num2)
    } else if (func == "*") {
        return multiply(num1, num2)
    } else if (func == "/") {
        if(num2 != 0) {
            return divide(num1, num2)
        } else {
            return "Cannot divide by zero"
        }
    } else {
        return 'Error'
    }
}

//grabbing element to display them later on
const funcs = document.querySelectorAll('.function');
let display = document.querySelector('.solution')
let solution = document.createElement('div')
solution.classList.add('.solution')

//adding eventlistener to numbers
const numbers = document.querySelectorAll('.number');
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        let value = button.innerText;
        numStr += value.toString()
        solution.textContent = `${numStr}`;
        display.replaceWith(solution);
    })
})

//adding eventlisteners to the operations
funcs.forEach((func) => {
    func.addEventListener('click', () => {
        let val = func.innerText;
        if(arr[0] === "Cannot divide by zero") arr = []
        if(arr.length === 1 && numStr != '' && funcStr != "=") {
            let answer = operate(arr[0], numStr, funcStr)
            numStr = answer
            total = answer
            arr = []
            arr.push(numStr)
            numStr = '';
        } else if (numStr != "") {
            arr.push(numStr);
            numStr = '';
        }
        if(total != ''){
            solution.textContent = `${total}`;
            display.replaceWith(solution);
        }
        funcStr = val;
    })
})

//adding eventlistener to equal
const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    if(arr.length === 0 && numStr != '' && funcStr != '') {
        let answer = operate(arr[0], numStr, funcStr)
        numStr = answer
        total = answer
        arr = []
        arr.push(numStr)
        numStr = '';
    }
    if(total != ''){
        solution.textContent = `${total}`;
        display.replaceWith(solution);
    }
})

//adding eventlistener to clear
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    arr = [];
    numStr = '';
    funcStr = '';
    total = '';
    solution.textContent = `0`;
    display.replaceWith(solution);
})

//adding eventlistener to decimal
const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => {
    let dot = "."
    if(!numStr.includes(dot)) {
        numStr += '.'
        solution.textContent = `${numStr}`;
        display.replaceWith(solution);
    }
})

//adding eventlistener to negative/positive
const negativeChange = document.querySelector('#negativePositive')
negativeChange.addEventListener('click', () => {
    //if display is number change to positive/negative
    if(numStr != '') {
        numStr = Number(numStr) * -1;
        numStr = numStr.toString()
        solution.textContent = `${numStr}`;
        display.replaceWith(solution);
    } else if (arr[0]) {
        //if display is solution change to positive/negative
        arr[0] = Number(arr[0]) * -1
        total = arr[0]
        solution.textContent = `${total}`;
        display.replaceWith(solution);
    }
})


//adding eventlistener to percent
const percent = document.querySelector('#percent');
percent.addEventListener('click', () => {
    if(numStr != '') {
        numStr = Number(numStr) * .01;
        numStr = numStr.toString()
        solution.textContent = `${numStr}`;
        display.replaceWith(solution);
    } else if (arr[0]) {
        //if display is solution change to positive/negative
        arr[0] = Number(arr[0]) * .01;
        total = arr[0]
        solution.textContent = `${total}`;
        display.replaceWith(solution);
    }
})
