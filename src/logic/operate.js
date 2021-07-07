import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let output;
  const num1 = Big(numberOne)
  const num2 = Big(numberTwo)
  if (operation === '+') {
    output = num1.plus(num2);
  }
  if (operation === '-') {
    output = num1.minus(num2);
  }
  if (operation === '÷') {
    output = num1.div(num2);
  }
  if (operation === '×') {
    output = num1.mul(num2);
  }
  if (operation === '%') {
    output = num1.mul(num2 * 0.01);
  }
  return output;
}
