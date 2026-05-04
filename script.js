let secentDisplay = document.getElementById("secent-display");
let resultDisplay = document.getElementById("first-display");
let chainContainer = document.getElementById("chain-container");
let resultContainer = document.getElementById("result-container");
let result = 0;
let calculationChain = "";
let numbersActive = false;
let currentResult = false;
let isNewNumber = false;
let activeOperator = "";
let currentNumberString = "";

const operators = ["+", "-", "*", "/"];

// Verarbeitet das Tippen der Ziffern 0-9
function appendNumber(number) {
  console.log("numbers: " + number);
  console.log("result1: " + result);
  //aktuelle Zahl aufbauen.
  currentNumberString += number;
  console.log("eingabe: " + currentNumberString);
  calculationChain += number;
  numbersActive = true;
  updateNumbersResultDisplay(number);
}

// Verarbeitet +, -, *, /
function handleOperator(op) {
  let input = currentNumberString === "" ? resultDisplay.innerText : currentNumberString;
  let number = parseFloat(currentNumberString);
  if (isNaN(number)) number = 0;
  if (activeOperator === "") {
    result = number;
  } else {
    switch (activeOperator) {
      case "+":
        result += number;
        break;
      case "-":
        result -= number;
        break;
      case "*":
        result *= number;
        break;
      case "/":
        result /= number;
        break;
      default:
    }
    currentResult = true;
  }
  currentNumberString = "";

  if (activeOperator !== "") {
    siteContainerResult();
  }
  activeOperator = op;
  isNewNumber = true;
  calculationChain += op;
  updateOperatorsResultDisplay(op);
  calculateAutomatic();
}

function calculateAutomatic() {
  if (currentResult) {
    resultDisplay.innerText = result;
  }
  secentDisplay.innerText = result + activeOperator;
}

// Speziell für das Gleichheitszeichen
function finalizeResult(equal) {
  let number = parseFloat(currentNumberString);
  if (isNaN(number) || activeOperator === "") return;

  switch (activeOperator) {
    case "+":
      result += number;
      break;
    case "-":
      result -= number;
      break;
    case "*":
      result *= number;
      break;
    case "/":
      result /= number;
      break;
  }
  console.log("chain " + calculationChain);
  secentDisplay.innerText += resultDisplay.innerText + "=";
  resultDisplay.innerText = result;
  activeOperator = "";
  currentResult = false;
  siteContainerResult();
}

//Löscht alles auf resultDisplay
function deleteButton() {
  resultDisplay.innerText = 0;
}

// Bringt alles auf den Bildschirm (First & Secent Display) ↓

// ANZEIGEN von Nummern
function updateNumbersResultDisplay(numbers) {
  if (numbersActive) {
    if (isNewNumber || resultDisplay.innerText === "0") {
      resultDisplay.innerText = numbers;
      isNewNumber = false;
    } else {
      resultDisplay.innerText += numbers;
    }
  }
}
// ANZEIGEN von Operatoren
function updateOperatorsResultDisplay(op) {
  if (!operators.some((el) => resultDisplay.innerText.endsWith(el))) {
    resultDisplay.innerText += op;
    secentDisplay.innerText = resultDisplay.innerText;
    resultDisplay.innerText = resultDisplay.innerText.slice(0, -1);
  } else {
    resultDisplay.innerText = resultDisplay.innerText.slice(0, -1) + op;
  }
}

function siteContainerResult() {
  let historyList = document.getElementById("history-container");

  let htmlSnippet = `
    <div class="result-container">
      <p id="chain-container" class="text-container">${calculationChain} = ${result}</p>
    </div>
  `;
  historyList.innerHTML = htmlSnippet + historyList.innerHTML;
}
