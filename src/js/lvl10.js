// lvl9.js
import {
  getScore,
  getClicValue,
  setClicValue,
  updateState,
  codyImage,
} from "./store.js";
import codyLvl10 from "../assets/images/Cody3D/png/Wink-Cody_3D.png";

const cardMuffinElement = document.getElementById("card-muffin");
const costMuffinElement = document.getElementById("cost-muffin");
const lvlMuffinElement = document.getElementById("lvl-muffin");

let lvlMuffin = 1;
let costMuffin = 2000000;

lvlMuffinElement.textContent = lvlMuffin;
costMuffinElement.textContent = costMuffin;

cardMuffinElement.onclick = function () {
  if (lvlMuffin <= 5 && getScore() >= costMuffin) {
    lvlMuffin += 1;
    lvlMuffinElement.textContent = lvlMuffin;
    const currentScore = getScore();
    const newScore = currentScore - costMuffin;
    updateState({ score: newScore });

    const currentClicValue = getClicValue();
    const newClicValue = currentClicValue + 5000;
    setClicValue(newClicValue);

    switch (lvlMuffin) {
      case 1:
        costMuffin = 5000000;
        costMuffinElement.textContent = costMuffin;
        break;
      case 2:
        autoClicValue = autoClicValue + 100000;
        costMuffin = 10000000;
        costMuffinElement.textContent = costMuffin;
        ATRate.innerText = "True - 113613 CPS";
        break;
      case 3:
        costMuffin = 20000000;
        costMuffinElement.textContent = costMuffin;
        break;
      case 4:
        costMuffin = 40000000;
        costMuffinElement.textContent = costMuffin;
        break;
      case 5:
        costMuffin = 80000000;
        costMuffinElement.textContent = costMuffin;
        break;
      case 6:
        lvlMuffinElement.textContent = "MAX";
        costMuffinElement.textContent = "-";
        codyImage.src = codyLvl10;
        break;
    }
  }
};