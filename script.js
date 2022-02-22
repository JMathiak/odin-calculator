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
  if (secondNum !== "0") {
    const num1 = parseFloat(firstNum, 10);
    const num2 = parseFloat(secondNum, 10);
    result = num1 / num2;
    let res = result.toFixed(2);
    result = res;

    if (result % 1 === 0) {
      let res = result;
      result = parseInt(res);
    }
  } else {
    result = "ERR!";
  }
}

function operate() {
  if (op !== "") {
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
    if (result !== "ERR!") {
      firstNum = result;
      inEquation = true;
      onSecond = false;
    } else {
      firstNum = "0";
      inEquation = false;
      onSecond = false;
    }
  }
}

function setOperator(operator) {
  op = operator;
  onSecond = true;
  hasDec = false;
  document.getElementById("decimal").disabled = false;
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
    document.getElementById("decimal").disabled = true;
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

/* To Do:
 *Add negative functionality
 *Add percent functionality
 *Reformat decimal functionality
 */
