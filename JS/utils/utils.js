// function to calculate factorial and normal calculation
export function calculate(input) {
  const result = document.getElementById("result");
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
  console.log(baseNum);
  const numberNum = Number(number);
  console.log(numberNum);

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
