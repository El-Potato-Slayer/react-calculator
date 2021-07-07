export default function calculate({ total, next, operation }, buttonName) {
  // I still have no idea what the 'next' property is supposed to do.
  // Mind providing a more detailed explanation?
  // If 34 + 24 is the input, is the 24 the 'next' property?
  const data = { total, next, operation };

  if (buttonName === 'AC') {
    data.total = '0';
    data.operation = '';
  }
  if (buttonName === '+/-') {
    data.total *= -1;
    data.next *= -1;
  }
  if (buttonName === '%') {
    data.total = (total * 0.01).toString();
  }
  if (buttonName === '=') {
    // Need to understand what next is before I can implement all conditionals
  }
  return data;
}
