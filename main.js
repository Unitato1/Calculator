const buttons = document.querySelectorAll(".btn");
const show = document.querySelector("#show");
const display = document.querySelector("#display");

const calc = new Calculator();
const number1 = new Number();
const number2 = new Number();

function Calculator() {
  this.add = (a, b) => a + b;
  this.sub = (a, b) => a - b;
  this.mul = (a, b) => a * b;
  this.div = (a, b) => a / b;
  this.mod = (a, b) => a % b;
}
function Number() {
  this.defined = false;
  this.value = 0;
}

function operate(event) {
  const btn = event.target.textContent;
  if (btn < 10) {
    if (number1.defined) {
      number2.value = number2.value * 10 + +btn;
      show.textContent = number2.value;
      display.textContent = number1.value;
    } else {
      number1.value = number1.value * 10 + +btn;
      show.textContent = number1.value;
    }
  }
  switch (btn) {
    case "+":
      number1.defined = true;
    case "-":
      number1.defined = true;
    case "/":
      number1.defined = true;
    case "*":
      number1.defined = true;
    case "=":
      number1.defined = true;
    case ".":
  }
}

buttons.forEach((button) => button.addEventListener("click", operate));
