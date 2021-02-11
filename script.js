const slidesConteiner = document.querySelector(".slider__cards");
const buttonLeft = document.querySelector(".slider-button__left");
const buttonRight = document.querySelector(".slider-button__right");

const animalTitle = [
  "Deer",
  "Squirrel",
  "Bird",
  "Deer",
  "Squirrel",
  "Bird",
  "Deer",
  "Squirrel",
  "Bird",
  "Deer",
  "Squirrel"
];
const animalSubtitle = [
  "Naturalist investigation",
  "Kamikaze squirrels",
  "Birds Fight club",
  "Naturalist investigation",
  "Kamikaze squirrels",
  "Birds Fight club",
  "Naturalist investigation",
  "Kamikaze squirrels",
  "Birds Fight club",
  "Naturalist investigation",
  "Kamikaze squirrels"
];

let slides = [];

let currentPosition = 0;

function createSlide(parent,index,contentTitle,contentSubtitle) {
  let el = document.createElement("div");
  el.className = "slider-card";

  let img = document.createElement("img");
  img.src = `assets/card__${index}.jpg`;

  let h4 = document.createElement("h4");
  h4.className = "card__title";
  h4.innerHTML = contentTitle;

  let h5 = document.createElement("h5");
  h5.className = "card__subtitle";
  h5.innerHTML = contentSubtitle;
  
  parent.appendChild(el).appendChild(img);
  parent.appendChild(el).appendChild(h4);
  parent.appendChild(el).appendChild(h5);
  return el;
}

for (let i = 1; i < 11; i++) {
  slides.push(createSlide(slidesConteiner, i,animalTitle[i-1],animalSubtitle[i-1]));
}

function setPosition(position) {
  if (position > 0) {
    return false;
  }
  if (position < -(slides.length - 1) * 100) {
    return false;
  }
  currentPosition = position;
  slides.forEach(slide => (slide.style.transform = `translateX(${position}%)`));
}

buttonRight.onclick = () => {
  setPosition(currentPosition - 100);
};
buttonLeft.onclick = () => {
  setPosition(currentPosition + 100);
};
