document.addEventListener('DOMContentLoaded', function () {
  let display = document.getElementById('display');
  let clearButton = document.getElementById('clear');
  let equalButton = document.getElementById('equal');
  let operatorButtons = document.querySelectorAll('.operator');
  let numberButtons = document.querySelectorAll('.number');

  let currentOperand = '';
  let firstOperand = null;
  let operator = null;

  function updateDisplay(value) {
    display.textContent = value;
  }

  function clear() {
    currentOperand = '';
    firstOperand = null;
    operator = null;
    updateDisplay('0');
  }

  function calculate() {
    let result = null;
    let secondOperand = parseFloat(currentOperand);

    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
      default:
        return;
    }

    updateDisplay(result.toString());
    firstOperand = result;
    currentOperand = '';
    operator = null;
  }

  clearButton.addEventListener('click', clear);

  equalButton.addEventListener('click', function () {
    if (operator && currentOperand !== '') {
      calculate();
    }
  });

  operatorButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      if (currentOperand !== '' && operator !== null) {
        calculate();
      }

      operator = button.value;
      firstOperand = parseFloat(currentOperand);
      currentOperand = '';
    });
  });

  numberButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      currentOperand += button.value;
      updateDisplay(currentOperand);
    });
  });
});
