let currentDisplay = '';
let firstOperand = '';
let operator = '';

function appendToDisplay(value) {
    currentDisplay += value;
    document.getElementById('display').value = currentDisplay;
}

function clearDisplay() {
    currentDisplay = '';
    firstOperand = '';
    operator = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    if (operator === '' || firstOperand === '' || currentDisplay === '') {
        return;
    }

    const secondOperand = parseFloat(currentDisplay);

    switch (operator) {
        case '+':
            currentDisplay = (firstOperand + secondOperand).toString();
            break;
        case '-':
            currentDisplay = (firstOperand - secondOperand).toString();
            break;
        case '*':
            currentDisplay = (firstOperand * secondOperand).toString();
            break;
        case '/':
            currentDisplay = (firstOperand / secondOperand).toString();
            break;
    }

    firstOperand = parseFloat(currentDisplay);
    operator = '';
    document.getElementById('display').value = currentDisplay;
}

document.getElementById('display').addEventListener('input', function() {
    currentDisplay = document.getElementById('display').value;
});

