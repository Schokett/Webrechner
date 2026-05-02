let secentDisplay = document.getElementById("secent-display");
let resultDisplay = document.getElementById("first-display");
let result = 0;
let calculationChain = "";
let operatorsActive = false;
let numbersActive = false;

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
  updateOperatorsResultDisplay(op);
}

// Die reine Mathe-Logik (Input -> Output)
function calculate() {}

// Speziell für das Gleichheitszeichen
function finalizeResult(equal) {
  // console.log(equal);
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
}
// ANZEIGEN von Operatoren
function updateOperatorsResultDisplay(op) {
  if (!operators.some((el) => resultDisplay.innerText.endsWith(el))) {
    resultDisplay.innerText += op;
    console.log("hat ein operator hinzugefügt");
  } else {
    resultDisplay.innerText = resultDisplay.innerText.slice(0, -1) + op;
    console.log("hat ein operator hinzugefügt aber auch den letzten gelöscht");
  }

  if (result === 0) {
  }
}
