let secentDisplay = document.getElementById("secent-display");
let resultDisplay = document.getElementById("first-display");
let result = 0;
let calculationChain = "";
let operatorsActive = false;
let numbersActive = false;
let currentResult = false;
let activeOperator = "";

const operators = ["+", "-", "*", "/"];

// Verarbeitet das Tippen der Ziffern 0-9
function appendNumber(number) {
  result += number;
  numbersActive = true;
  console.log(result);
  console.log(numbersActive);

  updateNumbersResultDisplay(number);
}

// Verarbeitet +, -, *, /
function handleOperator(op) {
  operatorsActive = true;
  activeOperator = op;
  console.log(activeOperator);
  updateOperatorsResultDisplay(op);
  calculateAutomatic();
}

// Die reine Mathe-Logik (Input -> Output)
function calculateAutomatic() {
  if (currentResult) {
    secentDisplay.innerText = result + activeOperator;
    resultDisplay.innerText = result;
  }
}

// Speziell für das Gleichheitszeichen
function finalizeResult(equal) {
  if (currentResult) {
    secentDisplay.innerText += resultDisplay.innerText + "=";
    resultDisplay.innerText = result;
  }
}

//Löscht alles auf resultDisplay
function deleteButton() {
  resultDisplay.innerText = 0;
}

// Bringt alles auf den Bildschirm (First & Secent Display) ↓

// ANZEIGEN von Nummern
function updateNumbersResultDisplay(numbers) {
  if (numbersActive) {
    if (resultDisplay.innerText === "0") {
      resultDisplay.innerText = numbers;
    } else {
      resultDisplay.innerText += numbers;
    }
  }

  if (operators.some((el) => secentDisplay.innerText.includes(el))) {
    resultDisplay.innerText = numbers;
    currentResult = true;
  }
}
// ANZEIGEN von Operatoren
function updateOperatorsResultDisplay(op) {
  if (!operators.some((el) => resultDisplay.innerText.endsWith(el))) {
    resultDisplay.innerText += op;
    console.log("hat ein operator hinzugefügt");
    //schickt rechnug nach oben
    secentDisplay.innerText = resultDisplay.innerText;
    resultDisplay.innerText = resultDisplay.innerText.slice(0, -1);
  } else {
    resultDisplay.innerText = resultDisplay.innerText.slice(0, -1) + op;
    console.log("hat ein operator hinzugefügt aber auch den letzten gelöscht");
  }

  if (result === 0) {
    resultDisplay.innerText = resultDisplay.innerText.slice(0, -1);
    console.log("Hat den Operator wieder gelöscht");
    // updateOperatorSecentDisplay(op);
  }
}
// function updateOperatorSecentDisplay(op) {
//   console.log(secentDisplay.innerText);
//   if (secentDisplay.innerText === "0") {
//     secentDisplay.innerText += op;
//   } else {
//     secentDisplay.innerText = secentDisplay.innerText.slice(0, -1) + op;
//   }
// }
