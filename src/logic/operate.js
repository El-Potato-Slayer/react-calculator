import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let output;
  if (operation === '+') {
    output = Big(numberOne).plus(Big(numberTwo));
  }
  if (operation === '-') {
    output = Big(numberOne).minus(Big(numberTwo));
  }
  if (operation === '÷') {
    output = Big(numberOne).div(Big(numberTwo));
  }
  if (operation === '×') {
    output = Big(numberOne).mul(Big(numberTwo));
  }
  return output;
}
