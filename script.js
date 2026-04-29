// function keyAction7() {
//   const keysElement = document.getElementById("7");
//   console.log(keysElement);
// }
// function keyAction8() {
//   const keysElement = document.getElementById("8");
//   console.log(keysElement);
// }
let secentDisplay = 0;
let firstDisplay = 0;
let textContainer = 0;

// Holt sich die Nummern und gibt sie aus
const allKeys = [...document.querySelectorAll(".key")];
const onlyNumbersKey = allKeys.filter((key) => !isNaN(key.innerText));

let resultDisplay = document.getElementById("first-display");
onlyNumbersKey.forEach((key) => {
  key.addEventListener("click", () => {
    resultDisplay.innerText += key.innerText;
  });
});

// funktion zum Löschen des first displays
function deleteButton() {
  let resultDisplay = document.getElementById("first-display");
  resultDisplay.innerText -= resultDisplay.innerText;
}

// funktion zum addieren
function additionButton() {}
