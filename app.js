const buttons = document.querySelectorAll('.button');
let num1 = '';
let operator = null;
let num2 = '';
let result = '';
const display = document.querySelector('.display');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.innerText;

    if (event.target.classList.contains('number')) {
      handleNumber(value);
    } else if (event.target.classList.contains('operator')) {
      handleOperator(value);
    } else if (event.target.classList.contains('equals')) {
      calculateResult();
    }
  });
});

function handleNumber(number) {
  if (!operator) {
    num1 += number;
    display.innerText = num1;
  } else {
    num2 += number;
    display.innerText = num2;
  }
}

function handleOperator(op) {
  if (op === 'C') {
    clearCalculator();
  } else if (num1 && !num2) {
    operator = op;
    display.innerText = operator;
  }
}

function calculateResult() {
  if (num1 && operator && num2) {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (operator === '+') {
      result = n1 + n2;
    } else if (operator === '-') {
      result = n1 - n2;
    } else if (operator === '*') {
      result = n1 * n2;
    } else if (operator === '/') {
      result = n2 !== 0 ? Math.floor(n1 / n2) : 'Error';
    }

    display.innerText = result;
    num1 = result.toString();
    num2 = '';
    operator = null;
  }
}

function clearCalculator() {
  num1 = '';
  num2 = '';
  operator = null;
  result = '';
  display.innerText = 0;
}
