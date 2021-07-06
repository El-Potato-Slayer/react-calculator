export default function calculate(calcData, buttonName) {
  // I have no idea what the 'next' properties is supposed to be. Mind providing an explanation?
  const data = calcData;

  if (buttonName === 'AC') {
    data.total = '0';
    data.operation = '';
  }
  if (buttonName === '+/-') {
    data.total *= -1;
    data.next *= -1;
  }
  if (buttonName === '%') {
    data.total = (data.total * 0.01).toString();
  }
  if (buttonName === '=') {
    // Need to understand what next is before I can implement all conditionals
  }
  return data;
}
