let firstNum = "";
let secondNum = "";
let op = "";
let result = "";
let onSecond = false;

function add() {
  const num1 = parseInt(firstNum, 10);
  const num2 = parseInt(secondNum, 10);
  let res = num1 + num2;
  console.log(res);
}

function sub() {
  const num1 = parseInt(firstNum, 10);
  const num2 = parseInt(secondNum, 10);
  let res = num1 - num2;
  console.log(res);
}

function mult() {
  const num1 = parseInt(firstNum, 10);
  const num2 = parseInt(secondNum, 10);
  let res = num1 * num2;
  console.log(res);
}

function div() {
  const num1 = parseInt(firstNum, 10);
  const num2 = parseInt(secondNum, 10);
  let res = num1 / num2;
  console.log(res);
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
}

function setOperator(operator) {
  op = operator;
  onSecond = true;
}

function getInput(num) {
  if (!onSecond) {
    firstNum = firstNum + num;
  } else {
    secondNum = secondNum + num;
  }
}
