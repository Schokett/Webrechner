let secentDisplay = document.getElementById("secent-display");
let resultDisplay = document.getElementById("first-display");
let result = "";
let calculationChain = "";

const operators = ["+", "-", "*", "/"];

//Löscht alles auf resultDisplay
function deleteButton() {
  resultDisplay.innerText = "0";
}
// Verarbeitet das Tippen der Ziffern 0-9
function appendNumber(number) {
  if (resultDisplay.innerText === "0") {
    resultDisplay.innerText = number;
  } else {
    resultDisplay.innerText += number;
  }
}

// Verarbeitet +, -, *, /
function handleOperator(op) {
  if (
    resultDisplay.innerText !== "0" &&
    !operators.some((op) => resultDisplay.innerText.includes(op))
  ) {
    resultDisplay.innerText += op;
  } else {
    resultDisplay.innerText = resultDisplay.innerText.slice(0, -1) + op;
  }
}

// Die reine Mathe-Logik (Input -> Output)
function calculate() {}

// Bringt alles auf den Bildschirm (First & Secent Display)
function updateDisplay() {}

// Speziell für das Gleichheitszeichen
function finalizeResult(equal) {
  // console.log(equal);
}
