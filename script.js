const value1 = parseFloat(prompt('Enter first number: '));
const value2 = parseFloat(prompt('Enter second number: '));
const operator = prompt('Enter operator(-,+,*,/)');

let result = 0;
if (isNaN(value1) || isNaN(value2)) {
  alert('Invalid Input. Refresh the page and provide valid input');
}
else {
  if (operator == '-') {
    result = value1 - value2;
  } else if (operator == '+') {
    result = value1 + value2;
  } else if (operator == '*') {
    result = value1 * value2;
  } else if (operator == '/') {
    result = value1 / value2;
  }
}
document.write(value1 + operator + value2 + ' = ' + result);