// calculator
const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
  let num1 = display.value;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function calculate1() {
  if (button == "+") {
  }
}
