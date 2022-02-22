let firstNum = "";
let secondNum = "";
let op = "";
let result = "";
let display = "";
let onSecond = false;

function add() {
  const num1 = parseInt(firstNum, 10);
  const num2 = parseInt(secondNum, 10);
  result = num1 + num2;
}

function sub() {
  const num1 = parseInt(firstNum, 10);
  const num2 = parseInt(secondNum, 10);
  result = num1 - num2;
}

function mult() {
  const num1 = parseInt(firstNum, 10);
  const num2 = parseInt(secondNum, 10);
  result = num1 * num2;
}

function div() {
  const num1 = parseInt(firstNum, 10);
  const num2 = parseInt(secondNum, 10);
  result = num1 / num2;
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
}

function setOperator(operator) {
  op = operator;
  onSecond = true;
}

function getInput(num) {
  if (!onSecond) {
    firstNum = firstNum + num;
    document.getElementById("display").innerHTML = firstNum;
  } else {
    secondNum = secondNum + num;
    document.getElementById("display").innerHTML = secondNum;
  }
}
