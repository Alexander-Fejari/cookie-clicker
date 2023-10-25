// lvl1.js
import { getScore, getClicValue, setClicValue, updateState } from "./store.js";
import { codyImages } from "./images.js";

// const codyImage = document.getElementById("cody-lvl-1");

// codyImage.addEventListener("click", () => {
//   const currentScore = getScore();
//   const currentClicValue = getClicValue();
//   updateState({ score: currentScore + currentClicValue });
// });

const cardBurgerElement = document.getElementById("card-burger");
const costBurgerElement = document.getElementById("cost-burger");
const lvlBurgerElement = document.getElementById("lvl-burger");

let lvlBurger = 1;
let costBurger = 100;

lvlBurgerElement.textContent = lvlBurger;
costBurgerElement.textContent = costBurger;

cardBurgerElement.onclick = function () {
  if (lvlBurger <= 5 && getScore() >= costBurger) {
    lvlBurger += 1;
    lvlBurgerElement.textContent = lvlBurger;
    const currentScore = getScore();
    const newScore = currentScore - costBurger;
    updateState({ score: newScore });

    const currentClicValue = getClicValue();
    const newClicValue = currentClicValue + 2;
    setClicValue(newClicValue);

    switch (lvlBurger) {
      case 1:
        costBurger = 100;
        costBurgerElement.textContent = costBurger;
        break;
      case 2:
        costBurger = 250;
        costBurgerElement.textContent = costBurger;
        break;
      case 3:
        costBurger = 500;
        costBurgerElement.textContent = costBurger;
        break;
      case 4:
        costBurger = 1000;
        costBurgerElement.textContent = costBurger;
        break;
      case 5:
        costBurger = 2500;
        costBurgerElement.textContent = costBurger;
        break;
      case 6:
        lvlBurgerElement.textContent = "MAX";
        costBurgerElement.textContent = "-";
        codyImage.src = codyLvl2;
        break;
    }
  }
};
