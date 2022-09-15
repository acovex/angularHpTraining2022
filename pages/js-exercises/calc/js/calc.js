console.warn("works");
const operatorsEnum = {
  sum: "+",
  rest: "-",
  mult: "*",
  div: "/",
};
let arrayOperators = [];
let arrayNumbers = [];
let calcNumbersCreated = 0;

function createNewCalc() {
  calcNumbersCreated++;
}

function showCalcNumbers(idSpan) {
  const span = document.querySelector(`#${idSpan}`);
  span.textContent = displayCalcNumbers();
}

function clearDisplay(idSpan) {
  const span = document.querySelector(`#${idSpan}`);
  span.textContent = "";
  arrayOperators = [];
  arrayNumbers = [];
}

function addOperator(operator, idSpan) {
  if (arrayNumbers.length > arrayOperators.length) {
    arrayOperators.push(operator);
  } else if (arrayOperators.length) {
    arrayOperators[arrayOperators.length - 1] = operator;
  }
  showCalcNumbers(idSpan);
}

function addDot(idSpan) {
  if (arrayNumbers.length && arrayNumbers.length > arrayOperators.length) {
    let lastNumber = `${arrayNumbers[arrayNumbers.length - 1]}`;
    const lastNumberHasDot = new RegExp(/\./, "g").test(`${lastNumber}`);
    if (!lastNumberHasDot) {
      lastNumber = `${lastNumber}.`;
      arrayNumbers[arrayNumbers.length - 1] = lastNumber;
    }
    showCalcNumbers(idSpan);
  }
}

function addNumber(number, idSpan) {
  if (arrayNumbers.length === arrayOperators.length) {
    arrayNumbers.push(number);
  } else {
    const numberGood = `${arrayNumbers[arrayNumbers.length - 1]}${number}`;
    arrayNumbers[arrayNumbers.length - 1] = +numberGood;
  }
  showCalcNumbers(idSpan);
}

function displayCalcNumbers() {
  const operatorsLength = arrayOperators.length;
  const numbersLength = arrayNumbers.length;
  const limit =
    operatorsLength > numbersLength ? operatorsLength : numbersLength;
  let diplayFinal = "";
  for (let index = 0; index < limit; index++) {
    if (arrayNumbers[index] !== undefined) {
      diplayFinal = `${diplayFinal} ${arrayNumbers[index]}`;
    }
    if (arrayOperators[index] !== undefined) {
      diplayFinal = `${diplayFinal} ${arrayOperators[index]}`;
    }
  }
  return diplayFinal;
}
