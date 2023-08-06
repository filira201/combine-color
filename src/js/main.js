import "../css/style.css";

const button = document.querySelector(".button-primary");
const inputNmae = document.querySelector(".user-name-input");
let userName = "";
let gameDiv = document.getElementById("app");

button.disabled = true;

inputNmae.addEventListener("input", () => {
  if (inputNmae.value.trim() === "") button.disabled = true;
  if (inputNmae.value.trim() !== "") button.disabled = false;
});

function createPeople() {
  return `<div class="people">
    <h3 class="name">${userName}</h3>
    <div class="headP"></div>
    <div class="neckP"></div>
    <div class="torsoP">
      <div class="leftHandP"></div>
      <div class="breastP"></div>
      <div class="rightHandP"></div>
    </div>
    <div class="beltP"></div>
    <div class="legsP">
      <div class="shortsLeftP">
        <div class="leftShortsLegP"></div>
        <div class="leftLegP"></div>
      </div>
      <div class="shortsRightP">
        <div class="rightShortsLegP"></div>
        <div class="rightLegP"></div>
      </div>
    </div>
  </div>`;
}

function checkTShirtColor() {
  let tshirtColor = document.querySelector(".t-shirtColor");
  tshirtColor.addEventListener("input", () => {
    document.querySelector(".breastP").style.background = tshirtColor.value;
  });
}

function checkShortsColor() {
  let shortsColor = document.querySelector(".shortsColor");
  shortsColor.addEventListener("input", () => {
    document.querySelector(".leftShortsLegP").style.background =
      shortsColor.value;
    document.querySelector(".rightShortsLegP").style.background =
      shortsColor.value;
  });
}

function checkEndButton() {
  let endButton = document.querySelector(".endButton");
  endButton.addEventListener("click", () => {
    tshirtColor.remove();
    shortsColor.remove();
    document.querySelector(".labelTshirt").remove();
    document.querySelector(".shortsLabel").remove();
    endButton.remove();

    createViewResult();
  });
}

function createViewResult() {
  const result = document.createElement("p");
  result.classList.add("view-result");
  let randomResult = Math.floor(Math.random() * 11);
  result.innerHTML = `Congratulations your result: <span class="result-gradient">${randomResult}/10<span>`;

  gameDiv.prepend(result);
}

button.addEventListener("click", () => {
  userName = inputNmae.value.toUpperCase();

  gameDiv.innerHTML = createPeople();

  gameDiv.innerHTML += `<div class="changeColors">
  <input type="color" class="t-shirtColor" id="tshirtColor" value="#460fec">
  <label for"tshirtColor" class="labelTshirt">T-shirt Color</label>
  <input type="color" class="shortsColor" id="shortsColor" value="#f30505">
  <label for"shortsColor" class="shortsLabel">Shorts Color</label>
  </div>`;

  gameDiv.innerHTML += `<div class="endGame">
  <button class="endButton">View result</button>
  </div>`;

  checkTShirtColor();

  checkShortsColor();

  checkEndButton();
    
});
