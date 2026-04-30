let secentDisplay = document.getElementById("secent-display");
let secentCurrentCalculation = secentDisplay.innerText;
let textContainer = 0;
let resultDisplay = document.getElementById("first-display");
let isNewEntry = false;

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
  const operators = ["+", "-", "*", "/"];
  const currentFullNumber = resultDisplay.innerText;

  if (resultDisplay.innerText === "" || resultDisplay.innerText === "0") return;
  if (secentDisplay.innerHTML === "0" || secentDisplay.innerText == "") {
    secentDisplay.innerText = currentFullNumber + op;
  } else {
    let calculate = secentDisplay.innerText + currentFullNumber;
    let result = eval(calculate);
    resultDisplay.innerText = result;
    secentDisplay.innerText = result + op;
  }
  isNewEntry = true;
}

// *** --------------- AUFGABEN ---------------***
//gleich danach muss die Rechen aufgabe rechts angeigt werden (egal ob nach einen operator oder einem ist gleich)
