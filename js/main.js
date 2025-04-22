document.getElementById('cal').onclick = function () {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var oper = document.getElementById("oper").value;
  var result = document.getElementById('result');
  var error = document.getElementById('error');

  if (isNaN(num1) || isNaN(num2)) {
    result.innerText = '';
    error.innerText = 'Error: Please enter valid numbers';
    return;
  }

  if (oper == '+') {
    result.innerText = num1 + num2;
    error.innerText = '';
  } else if (oper == '*') {
    result.innerText = num1 * num2;
    error.innerText = '';
  } else if (oper == '-') {
    result.innerText = num1 - num2;
    error.innerText = '';
  } else if (oper == '/') {
    if (num2 !== 0) {
      result.innerText = num1 / num2;
      error.innerText = '';
    } else {
      result.innerText = '';
      error.innerText = 'Error: Division by zero is not allowed';
    }
  } else {
    result.innerText = '';
    error.innerText = 'Error: Invalid operator';
  }
};
