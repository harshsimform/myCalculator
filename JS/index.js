const result = document.getElementById("result").value;
function getResult() {
  const result = document.getElementById("result").value;
  console.log(result);

  const body = document.querySelector("body");
  body.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}

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
  "(",
  ")",
  ".",
];

// display keyboard key on button click
document.addEventListener("keydown", (event) => {
  // console.log(event);
  if (arr.includes(event.key)) {
    document.getElementById("result").value += event.key;
  }
  if (event.key == "Enter") {
    document.getElementById("result").value = "ans";
  }
  if (event.key == "Backspace") {
    document.getElementById("result").value = document
      .getElementById("result")
      .value.slice(0, -1);
  }
});

// Get all the number buttons
var numberButtons = document.getElementsByClassName("numbers");

// Add a click event listener to each button
for (var i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", function () {
    // Get the value of the clicked button
    var buttonValue = this.value;

    // Get the current value of the input field
    var result = document.getElementById("result").value;

    // Add the button value to the input field
    document.getElementById("result").value = result + buttonValue;
  });
}
