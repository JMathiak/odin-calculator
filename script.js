let firstNum = "0";
let secondNum = "0";
let op = "";
let result = "";
let display = "";
let onSecond = false;
let inEquation = false;
let hasDec = false;

function add() {
  const num1 = parseFloat(firstNum, 10);
  const num2 = parseFloat(secondNum, 10);
  result = num1 + num2;
  let res = result.toFixed(2);
  result = res;

  if (result % 1 === 0) {
    let res = result;
    result = parseInt(res);
  }
}

function sub() {
  const num1 = parseFloat(firstNum, 10);
  const num2 = parseFloat(secondNum, 10);
  result = num1 - num2;
  let res = result.toFixed(2);
  result = res;

  if (result % 1 === 0) {
    let res = result;
    result = parseInt(res);
  }
}

function mult() {
  const num1 = parseFloat(firstNum, 10);
  const num2 = parseFloat(secondNum, 10);
  result = num1 * num2;
  let res = result.toFixed(2);
  result = res;

  if (result % 1 === 0) {
    let res = result;
    result = parseInt(res);
  }
}

function div() {
  const num1 = parseFloat(firstNum, 10);
  const num2 = parseFloat(secondNum, 10);
  result = num1 / num2;
  let res = result.toFixed(2);
  result = res;

  if (result % 1 === 0) {
    let res = result;
    result = parseInt(res);
  }
}

function operate() {
  if (op === "+") {
    add();
  } else if (op === "-") {
    sub();
  } else if (op === "*") {
    mult();
  } else if (op === "/") {
    div();
  }
  document.getElementById("display").innerHTML = result;
  firstNum = result;
  inEquation = true;
  onSecond = false;
}

function setOperator(operator) {
  op = operator;
  onSecond = true;
  hasDec = false;
}

function getInput(num) {
  if ((!hasDec && num === ".") || num !== ".") {
    if (!onSecond) {
      if (firstNum === "0" && num !== ".") {
        firstNum = "";
      }
      firstNum = firstNum + num;
      document.getElementById("display").innerHTML = firstNum;
    } else {
      if (secondNum === "0" && num !== ".") {
        secondNum = "";
      }
      secondNum = secondNum + num;
      document.getElementById("display").innerHTML = secondNum;
    }
  }
  if (num === ".") {
    hasDec = true;
  }
}

function allClear() {
  op = "";
  firstNum = "0";
  secondNum = "0";
  document.getElementById("display").innerHTML = 0;
  onSecond = false;
  hasDec = false;
}
