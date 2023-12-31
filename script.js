const themeSwitch = document.getElementById("toggle-switch");
const numberButtons = document.querySelectorAll(".number-button");
const operationButtons = document.querySelectorAll(".operation-button");
const equalsButton = document.getElementById("equals");
const delResetButton = document.querySelectorAll(".del-reset-button");

const body = document.querySelector("body");
const container = document.querySelector(".container");
const display = document.querySelector(".display");
const displayTextField = document.querySelector(".display h2");
const keypad = document.querySelector(".buttons");
const topSection = document.querySelectorAll(".top");

let selectedTheme = 1;
let displayText = "";

let number1;
let number2;
let operation;

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const dotButton = document.getElementById("dot");

plusButton.addEventListener("click", () => numOp("+"));
minusButton.addEventListener("click", () => numOp("-"));
multiplyButton.addEventListener("click", () => numOp("*"));
divideButton.addEventListener("click", () => numOp("/"));
dotButton.addEventListener("click", () => numOp("."));

const theme1 = [
  "hsl(222, 26%, 31%)", // 0 Main bg
  "hsl(223, 31%, 20%)", // 1 Keypad bg
  "hsl(224, 36%, 15%)", // 2 Display bg
  "hsl(225, 21%, 49%)", // 3 Delelte Reset bg
  "hsl(224, 28%, 35%)", // 4 Delete Reset Shadow
  "hsl(6, 63%, 50%)", // 5 Equals bg
  "hsl(6, 70%, 34%)", // 6 Equals Shadow
  "hsl(30, 25%, 89%)", // 7
  "hsl(28, 16%, 65%)", // 8 Number Shadow
  "hsl(221, 14%, 31%)", // 9 Number bg
  "hsl(0, 0%, 100%)", // 10 Delete Reset color
];

const theme2 = [
  "hsl(0, 0%, 90%)",
  "hsl(0, 5%, 81%)",
  "hsl(0, 0%, 93%)",
  "hsl(185, 42%, 37%)",
  "hsl(185, 58%, 25%)",
  "hsl(25, 98%, 40%)",
  " hsl(25, 99%, 27%)",
  "hsl(45, 7%, 89%)",
  "hsl(35, 11%, 61%)",
  "hsl(60, 10%, 19%)",
  "hsl(0, 0%, 100%)",
];

const theme3 = [
  "hsl(268, 75%, 9%)",
  "hsl(268, 71%, 12%)",
  " hsl(281, 89%, 26%)",
  "hsl(285, 91%, 52%)",
  "hsl(176, 100%, 44%)",
  "hsl(177, 92%, 70%)",
  "hsl(268, 47%, 21%)",
  "hsl(290, 70%, 36%)",
  "hsl(52, 100%, 62%)",
  "hsl(198, 20%, 13%)",
  "hsl(0, 0%, 100%)",
];

function start() {
  themeSwitch.value = 1;
  themeSwitched();
}

function numOp(input) {
  updateDisplay(input);
}

function calculate() {
  try {
    let result = Math.round(10000000000 * eval(displayText)) / 10000000000;
    clearDisplay();
    updateDisplay(eval(result));
  } catch (err) {
    window.alert("Wrong input!");
  }
}

function updateDisplay(n) {
  displayText += n;
  displayTextField.innerHTML = displayText;
  console.log(displayText);
}

function clearDisplay() {
  displayText = "";
  displayTextField.innerHTML = "0";
}

function deleteNum() {
  displayText = displayText.slice(0, -1);
  console.log(displayText);
  if (displayText) displayTextField.innerHTML = displayText;
  else displayTextField.innerHTML = "0";
}

function themeSwitched() {
  selectedTheme = themeSwitch.value;
  if (selectedTheme == 1) {
    // Body and container
    body.style.backgroundColor = theme1[0];
    container.style.backgroundColor = theme1[0];
    // Top section
    topSection.forEach((elem) => {
      elem.style.color = theme1[10];
    });
    // Display
    display.style.backgroundColor = theme1[2];
    display.style.color = theme1[10];
    // Keypad
    keypad.style.backgroundColor = theme1[1];
    // Number Buttons
    numberButtons.forEach((button) => {
      button.style.backgroundColor = theme1[10];
      button.style.color = theme1[9];
      button.style.borderColor = theme1[8];
    });
    // Operation Buttons
    operationButtons.forEach((button) => {
      button.style.backgroundColor = theme1[10];
      button.style.color = theme1[9];
      button.style.borderColor = theme1[8];
    });
    // Delete Reset Button
    delResetButton.forEach((button) => {
      button.style.backgroundColor = theme1[3];
      button.style.color = theme1[10];
      button.style.borderColor = theme1[4];
    });
    // Equals Button
    equalsButton.style.backgroundColor = theme1[5];
    equalsButton.style.color = theme1[10];
    equalsButton.style.borderColor = theme1[6];
  } else if (selectedTheme == 2) {
    // Body and container
    body.style.backgroundColor = theme2[0];
    container.style.backgroundColor = theme2[0];
    // Top section
    topSection.forEach((elem) => {
      elem.style.color = theme2[9];
    });
    // Display
    display.style.backgroundColor = theme2[10];
    display.style.color = theme2[9];
    // Keypad
    keypad.style.backgroundColor = theme2[1];
    // Number Buttons
    numberButtons.forEach((button) => {
      button.style.backgroundColor = theme2[10];
      button.style.color = theme2[9];
      button.style.borderColor = theme2[8];
    });
    // Operation Buttons
    operationButtons.forEach((button) => {
      button.style.backgroundColor = theme2[10];
      button.style.color = theme2[9];
      button.style.borderColor = theme2[8];
    });
    // Delete Reset Button
    delResetButton.forEach((button) => {
      button.style.backgroundColor = theme2[3];
      button.style.color = theme2[10];
      button.style.borderColor = theme2[4];
    });
    // Equals Button
    equalsButton.style.backgroundColor = theme2[5];
    equalsButton.style.color = theme2[10];
    equalsButton.style.borderColor = theme2[6];
  } else if (selectedTheme == 3) {
    // Body and container
    body.style.backgroundColor = theme3[0];
    container.style.backgroundColor = theme3[0];
    // Top section
    topSection.forEach((elem) => {
      elem.style.color = theme3[8];
    });
    // Display
    display.style.backgroundColor = theme3[1];
    display.style.color = theme3[8];
    // Keypad
    keypad.style.backgroundColor = theme3[1];
    // Number Buttons
    numberButtons.forEach((button) => {
      button.style.backgroundColor = theme3[6];
      button.style.color = theme3[8];
      button.style.borderColor = theme3[3];
    });
    // Operation Buttons
    operationButtons.forEach((button) => {
      button.style.backgroundColor = theme3[6];
      button.style.color = theme3[8];
      button.style.borderColor = theme3[3];
    });
    // Delete Reset Button
    delResetButton.forEach((button) => {
      button.style.backgroundColor = theme3[2];
      button.style.color = theme3[10];
      button.style.borderColor = theme3[3];
    });
    // Equals Button
    equalsButton.style.backgroundColor = theme3[4];
    equalsButton.style.color = theme3[9];
    equalsButton.style.borderColor = theme3[5];
  }
}
