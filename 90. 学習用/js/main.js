"use strict";

// let hp = 100;

// while (hp > 0) {
//   console.log(`${hp} HP left!`);
//   hp -= 15;
// }

let hp = -50;

do {
  console.log(`${hp} HP left!`);
  hp -= 15;
} while (hp > 0);

function showAD() {
  console.log("=========== AD ==============");
}
showAD();

const terget1 = document.getElementById("target1");
const terget2 = document.getElementById("target2");
const terget3 = document.getElementById("target3");

terget1.addEventListener("click", () => {
  terget1.classList.toggle("circle");
});
terget2.addEventListener("click", () => {
  terget2.classList.toggle("circle");
});
terget3.addEventListener("click", () => {
  terget3.classList.toggle("circle");
});
