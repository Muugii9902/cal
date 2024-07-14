// calculator
const display = document.getElementById("display");
function appendToDisplay(input) {
  display.value += input;
}
let num1 = 0;
let num2 = 0;
let opbtn = " ";
function pressOp(op) {
  num1 = display.value;
  opbtn = op;
  display.value = "";
}
// function hhm() {
//   if (opbtn != " ") {
//     display.value = " ";
//     // appendToDisplay(input);
//   }
// }

// hhm();
// function calculate() {
//   num2 = display.value;
//   display.value = eval(` ${Number(num1)} ${opbtn}  ${Number(num2)}`);
// }

function calculate() {
  num2 = display.value;
  if (opbtn == "+") {
    display.value = Number(num1) + Number(num2);
  }
  if (opbtn == "-") {
    display.value = Number(num1) - Number(num2);
  }
  if (opbtn == "*") {
    display.value = Number(num1) * Number(num2);
  }
  if (opbtn == "/") {
    display.value = Number(num1) / Number(num2);
  }
}
function clearDisplay() {
  display.value = "";
}

// function appendToDisplay(input) {
//   display.value += input;
//   let num1 = display.value;
// }
// function clearDisplay() {
//   display.value = "";
// }
// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = "Error";
//   }
// }

// function calculate1() {
//   if (button == "+") {
//   }
// }
