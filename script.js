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

const allKeys = [...document.querySelectorAll(".key")];
const onlyNumbersKey = allKeys.filter((key) => !isNaN(key.innerText));
console.log(allKeys);

let resultDisplay = document.getElementById("first-display");
onlyNumbersKey.forEach((key) => {
  key.addEventListener("click", () => {
    resultDisplay.innerText = key.innerText;
  });
});
