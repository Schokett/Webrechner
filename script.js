let secentDisplay = document.getElementById("secent-display");
let secentCurrentCalculation = secentDisplay.innerText;
let firstDisplay = 0;
let textContainer = 0;
let resultDisplay = document.getElementById("first-display");

const allKeys = [...document.querySelectorAll(".key")];
const onlyNumbersKey = allKeys.filter((key) => !isNaN(key.innerText));

// Holt sich die Nummern und gibt sie aus
onlyNumbersKey.forEach((key) => {
  key.addEventListener("click", () => {
    if (resultDisplay.innerText === "0") {
      resultDisplay.innerText = "";
    }
    resultDisplay.innerText += key.innerText;
  });
});

// funktion zum Löschen des first displays
function deleteButton() {
  resultDisplay.innerText = "0";
}

function handleOperator(op) {
  const operators = ["+", "-", "*", "/"];
  const currentFullNumber = resultDisplay.innerText;

  const lastChar = resultDisplay.innerText.slice(-1);
  if (resultDisplay.innerText === "" || resultDisplay.innerText === "0") return;
  resultDisplay.innerText += op;

  //nach dem operator klickt wird der result display zum secent überreicht
  if (secentDisplay.innerText === "0" || secentDisplay.innerText === "") {
    secentDisplay.innerText = currentFullNumber + op;
    console.log(currentFullNumber);
  } else {
    secentDisplay.innerText += currentFullNumber + op;
  }
  // resultdisplay wird gecleart und schickt den wert an secentDisplay
  resultDisplay.innerText = "";
  // secentCurrentCalculation.innerText = currentFullNumber + op;

  // secentDisplay muss den letzten wert speichern den er hatt und einem neuen Wert empfangen können.

  // secent display angezeigt werden.
  // KONTROLLE : wenn man zb 2+2= macht soll 4 rauskommen wenn mann aber 2+2+= drückt soll 8 rauskommen da er "2+2=4" die 4+4 rechnet!
  //gleich danach muss die Rechen aufgabe rechts angeigt werden (egal ob nach einen operator oder einem ist gleich)
}
function equalsButton() {
  console.log("ich bin die = funktion");
}
console.log(secentCurrentCalculation);
// *** --------------- AUFGABEN ---------------***
// 1.
// Operator funktion =

// 2.
// Sobald ein Operator geklickt wurden ist,
// soll der wert im secentDisplay GESPIECHERT Werden
