const buttons = document.querySelectorAll(".btn");

const calc = new Calculator();
function Calculator() {
  this.add = (a, b) => a + b;
  this.sub = (a, b) => a - b;
  this.mul = (a, b) => a * b;
  this.div = (a, b) => a / b;
  this.mod = (a, b) => a % b;
}

function operate(event) {
  const btn = event.target.textContent;
  if (btn < 10) {
  }
  switch (btn) {
    case "+":
    case "-":
    case "/":
    case "*":
    case "=":
    case ".":
  }
}

buttons.forEach((button) => button.addEventListener("click", operate));
