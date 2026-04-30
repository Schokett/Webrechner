let secentDisplay = document.getElementById("secent-display");
let secentCurrentCalculation = secentDisplay.innerText;
let textContainer = null;
let resultDisplay = document.getElementById("first-display");
let isNewEntry = false;
let calculationChain = "";

const operators = ["+", "-", "*", "/"];
const allKeys = [...document.querySelectorAll(".key")];
const onlyNumbersKey = allKeys.filter((key) => !isNaN(key.innerText));

// Holt sich die Nummern und gibt sie aus
onlyNumbersKey.forEach((key) => {
  key.addEventListener("click", () => {
    if (isNewEntry || resultDisplay.innerText === "0") {
      resultDisplay.innerText = "";
      isNewEntry = false;
    }
    resultDisplay.innerText += key.innerText;
  });
});

// funktion zum Löschen des first displays
function deleteButton() {
  resultDisplay.innerText = "0";
}

function handleOperator(op) {
  const currentFullNumber = resultDisplay.innerText;
  if (resultDisplay.innerText === "" || resultDisplay.innerText === "0") return;
  const endsWithOperator = operators.some((o) => calculationChain.trim().endsWith(o));

  if (endsWithOperator && op !== "=") {
    calculationChain = calculationChain.trim().slice(0, -1).trim() + " ";
  }
  calculationChain += currentFullNumber + " " + op + " ";
  if (secentDisplay.innerText === "0" || secentDisplay.innerText == "") {
    secentDisplay.innerText = currentFullNumber + op;
  } else {
    let calculate = secentDisplay.innerText + currentFullNumber;
    let result = eval(calculate);
    resultDisplay.innerText = result;
    secentDisplay.innerText = result + op;
  }
  isNewEntry = true;
}

function sideDisplayContainerCalculation() {
  var Element = document.getElementById("text-container");

  Element.innerText += calculationChain;

  // const endsWithOperator = operators.some((op) => calculationChain.trim().endsWith(op));

  // if (!endsWithOperator) {
  //   Element.innerText = calculationChain;
  // } else {
  //   calculationChain.slice(-1);
  //   Element.innerText = calculationChain;
  // }

  console.log(calculationChain);
}

// *** --------------- AUFGABEN ---------------***
//gleich danach muss die Rechen aufgabe rechts angeigt werden (egal ob nach einen operator oder einem ist gleich)
// nach dem eine Zahl und ein OP oben sind schiebt er keine zahl von unten mehr hoch , das muss aber !
