let secentDisplay = document.getElementById("secent-display");
let firstDisplay = 0;
let textContainer = 0;
let resultDisplay = document.getElementById("first-display");

const allKeys = [...document.querySelectorAll(".key")];
const onlyNumbersKey = allKeys.filter((key) => !isNaN(key.innerText));

// Holt sich die Nummern und gibt sie aus
if (resultDisplay == 0)
  onlyNumbersKey.forEach((key) => {
    key.addEventListener("click", () => {
      resultDisplay.innerText += key.innerText;
    });
  });

// funktion zum Löschen des first displays
function deleteButton() {
  resultDisplay.innerText = "0";
}

// funktion zum addieren
function additionButton() {
  if (!resultDisplay.innerText.endsWith("+")) {
    resultDisplay.innerText += "+";
    secentDisplay.innerText = resultDisplay.innerText;
  } else {
    return;
  }
}
// Anfangswert "0" entfernen sobald etwas etwas eingetippt wird
// Sobald ein Operator geklickt wurden ist,
// soll der wert im secentDisplay GESPIECHERT Werden
