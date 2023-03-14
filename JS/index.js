// import { evaluateExpression } from './utils/utils.js';
import {
  calculate,
  calculateSqrt,
  calculateCubeSqrt,
  getAbsolute,
} from "./utils/utils.js";
// let result = document.getElementById('result').value;

// (2nd) toggle button functionality
const toggleButton = document.querySelector("#toggle-button");
const buttons1 = document.querySelectorAll(".button1");
const buttons2 = document.querySelectorAll(".button2");

toggleButton.addEventListener("click", () => {
  buttons1.forEach((button1) => {
    button1.classList.toggle("hidden");
  });
  buttons2.forEach((button2) => {
    button2.classList.toggle("hidden");
  });
});

// show dropdown menu on Trigonimetry button click
const dropbtn1 = document.getElementById("dropbtn1");
const dropdownContent1 = document.getElementById("dropdown_content1");

dropbtn1.addEventListener("click", () => {
  dropdownContent1.style.display =
    dropdownContent1.style.display === "none" ? "block" : "none";
});

// show dropdown menu on Function button click
const dropbtn = document.getElementById("dropbtn");
const dropdownContent = document.getElementById("dropdown_content");

dropbtn.addEventListener("click", () => {
  dropdownContent.style.display =
    dropdownContent.style.display === "none" ? "block" : "none";
});

// Event listener for both dropdown, display none when user clicks outside dropdown buttons
document.addEventListener("click", (event) => {
  if (
    !dropbtn.contains(event.target) &&
    !dropdownContent.contains(event.target)
  ) {
    dropdownContent.style.display = "none";
  }
  if (
    !dropbtn1.contains(event.target) &&
    !dropdownContent1.contains(event.target)
  ) {
    dropdownContent1.style.display = "none";
  }
});

const arr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "/",
  "*",
  "%",
  "(",
  ")",
  ".",
  "π",
  "e",
  "!",
];

// display keyboard key on screen when keyboard numbers or operators click
document.addEventListener("keydown", (event) => {
  // console.log(event);
  if (arr.includes(event.key)) {
    document.getElementById("result").value += event.key;
  }
  if (event.key === "=") {
    try {
      // let result = document.getElementById('result').value;
      // result = result?.replaceAll('π', '3.14');
      // result = result?.replaceAll('e', '2.7182');
      // document.getElementById('result').value = eval(result);
      // console.log(result);
      let result = document.getElementById("result").value;
      calculate(result);
      if (result === "") {
        document.getElementById("result").value = "";
      }
    } catch (error) {
      document.getElementById("result").value = "Malformed Expression";
    }
  }
  if (event.key === "Backspace") {
    document.getElementById("result").value = document
      .getElementById("result")
      .value.slice(0, -1);
  }
  // prevent from Enter key pressing
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

// Get all the number buttons
let numberButtons = document.getElementsByClassName("calcBtn");
// Add a click event listener to each button
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", function () {
    // Get the value of the clicked button
    let buttonValue = this.value;

    // Get the current value of the input field
    let result = document.getElementById("result").value;

    // Add the button value to the input field
    document.getElementById("result").value = result + buttonValue;
  });
}

// to get result on screen when equal button pressed by user
const equalBtn = document.getElementById("eval");
equalBtn.addEventListener("click", () => {
  try {
    let result = document.getElementById("result").value;
    calculate(result);
    if (result === "") {
      document.getElementById("result").value = "";
    }
  } catch (error) {
    document.getElementById("result").value = "Malformed Expression";
  }
});

// event listener to solve two power x
let count = 0;
const twoPowx = document.getElementById("2_power_X");
twoPowx.addEventListener("click", function () {
  const userIp = document.getElementById("result").value;
  const output = `2**${userIp}`;
  document.getElementById("result").value = output;
});

// add Eventlistener to solve root x
const rootXbtn = document.getElementById("root_x");
rootXbtn.addEventListener("click", () => {
  calculateSqrt(result);
});

// add Eventlistener to solve 3 root x
const threeRootXbtn = document.getElementById("3_root_x");
threeRootXbtn.addEventListener("click", () => {
  calculateCubeSqrt(result);
});

// add Eventlistener to solve abs, |x|
const absolutex = document.getElementById("x_abs");
absolutex.addEventListener("click", () => {
  getAbsolute(result);
});
