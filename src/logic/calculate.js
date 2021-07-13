import operate from './operate';

export default function calculate({ total, next, operation }, buttonName) {
  const data = { total, next, operation };
  const isNumber = !Number.isNaN(parseInt(buttonName, 10));
  const isOperation = /[-+÷×]/.test(buttonName);
  const isFirstNum = !operation;

  if ((isNumber || !total) && isFirstNum && !isOperation) {
    if (total === null) {
      data.total = buttonName;
    } else {
      data.total += buttonName;
    }
  } else if (isNumber && !isFirstNum) {
    if (!next) {
      data.next = buttonName;
    } else {
      data.next += buttonName;
    }
  } else if (buttonName !== '+/-' && isOperation) {
    if (total && total[total.length - 1] === '.') {
      data.total += '0';
    }
    if (next && next[next.length - 1] === '.') {
      data.next += '0';
    }
    if (total) {
      data.operation = buttonName;
    }
  }

  switch (buttonName) {
    case 'AC':
      data.total = '0';
      data.next = '';
      data.operation = '';
      break;

    case '+/-':
      if (!next) {
        data.total = (total * 0.01).toString();
      } else {
        data.next = (next * 0.01).toString();
      }
      break;

    case '%':
      if (!next) {
        data.total = (total * 0.01).toString();
      } else {
        data.next = (next * 0.01).toString();
      }
      break;

    case '.':
      if (!next && !/[.]/.test(total)) {
        data.total = `${total}.`;
      } else if (next && !/[.]/.test(next)) {
        data.next = `${next}.`;
      }
      break;

    case '=':
      data.total = operate(total, next, operation).toString();
      data.next = '';
      data.operation = '';
      break;

    default:
      break;
  }
  // if (buttonName === 'AC') {
  //   data.total = '0';
  //   data.next = '';
  //   data.operation = '';
  // }
  // if (buttonName === '+/-') {
  //   if (!next) {
  //     data.total *= -1;
  //   } else {
  //     data.next *= -1;
  //   }
  // }
  // if (buttonName === '%') {
  //   if (!next) {
  //     data.total = (total * 0.01).toString();
  //   } else {
  //     data.next = (next * 0.01).toString();
  //   }
  // }
  // if (buttonName === '.') {
  //   if (!next && !/[.]/.test(total)) {
  //     data.total = `${total}.`;
  //   } else if (next && !/[.]/.test(next)) {
  //     data.next = `${next}.`;
  //   }
  // }
  // if (buttonName === '=') {
  //   data.total = operate(total, next, operation).toString();
  //   data.next = '';
  //   data.operation = '';
  // }

  return data;
}
