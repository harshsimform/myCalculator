// function to calculate factorial and normal calculation
export function calculate(input) {
  let result = document.getElementById("result");
  // check if the input includes the "!" symbol
  if (input.includes("!")) {
    // calculate factorial using the factorial function
    let num = parseInt(input.slice(0, -1));
    let resultFact = factorial(num);
    result.value = resultFact;
  }
  // check if the input includes the "π" or "e" and calculate them
  else if (input.includes("π") || input.includes("e")) {
    input = input?.replaceAll(/π/g, "3.14");
    input = input?.replaceAll(/e/g, "2.7182");
    let resultPieEuler = eval(input).toFixed(4);
    result.value = resultPieEuler;
  }
  // check if input includes log
  else if (input.includes("log")) {
    result.value = evaluateLog(input);
  }
  // check and evaluate if input includes ln
  else if (input.includes("ln")) {
    result.value = evaluateNaturalLog(input);
  }
  // check and evaluate root
  else if (input.includes("√")) {
    result.value = calculateRoot(input);
  }
  // evaluate the input using the eval function
  else {
    let resultEval = eval(input);
    result.value = resultEval;
  }
}

// factorial function from previous example
function factorial(num) {
  if (typeof num !== "number" || num < 0 || Math.floor(num) !== num) {
    return "Invalid input";
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

// function to calculate log
function evaluateLog(input) {
  // split the input value into the number before and after 'log'
  const [base, number] = input.split("log");

  // convert the base and number to numbers using the Number() method
  const baseNum = Number(base) || 10;
  // console.log(baseNum);
  const numberNum = Number(number);
  // console.log(numberNum);

  // calculate the logarithm with the specified base using the Math.log() method and display the result
  const tempAnswer = Math.log(numberNum) / Math.log(baseNum);
  const resultLog = tempAnswer.toString();
  const decimalIndex = resultLog.indexOf(".");
  const multipliedNum =
    decimalIndex > 0 && resultLog[decimalIndex - 1] === "0"
      ? Number(resultLog) * 10
      : tempAnswer;
  return multipliedNum;
}

// function to calculate Natural Log
function evaluateNaturalLog(input) {
  const match = input.match(/^(\d*)ln(.+)$/);
  let coefficient = 1;
  let x = parseFloat(input);

  if (!match) {
    let resultNaturalLog = "Malformed Expresiion";
    return resultNaturalLog;
  }
  coefficient = match[1] ? parseInt(match[1]) : 1;
  x = parseFloat(match[2]);
  let resultNaturalLog = coefficient * Math.log(x);
  return resultNaturalLog;
}

// function to calculate Square root
export function calculateSqrt(input) {
  const userInput = parseFloat(input.value);
  if (isNaN(userInput)) {
    result.value = "";
  } else {
    result.value = Math.sqrt(userInput);
  }
}

// function to calculate cube root
export function calculateCubeSqrt(input) {
  const userInput = parseFloat(input.value);
  if (isNaN(userInput)) {
    result.value = "";
  } else {
    result.value = Math.cbrt(userInput);
  }
}

// function to calculate root
function calculateRoot(input) {
  const parts = input.split("√");
  const x = parseFloat(parts[1]);

  if (isNaN(x)) {
    return "Invalid Input";
  } else if (parts.length === 1) {
    return Math.sqrt(x);
  } else if (parts.length === 2) {
    const y = parseFloat(parts[0]);
    if (isNaN(y)) {
      return "Invalid Input";
    } else {
      return Math.pow(x, 1 / y);
    }
  } else {
    return "Invalid input";
  }
}

// function to generate absolute value
export function getAbsolute() {
  result.value = Math.abs(result.value);
}
