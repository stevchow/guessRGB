let numCircles = 9;
let colors = generateRandomColor(numCircles);
const circles = document.querySelectorAll(".circle");
const displayRGB = document.querySelector("#displayRGB");
const msgDisplay = document.querySelector("#message");
const resetButton = document.querySelector("#reset");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");
let pickedColor = pickColor();
const h1 = document.querySelector("h1");

displayRGB.textContent = pickedColor.toUpperCase();

easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numCircles = 3;
  colors = generateRandomColor(numCircles);
  pickedColor = pickColor();
  displayRGB.textContent = pickedColor.toUpperCase();
  //push random color to each circle
  for (let i = 0; i < circles.length; i++) {
    if (colors[i]) circles[i].style.backgroundColor = colors[i];
    else circles[i].style.display = "none";
  }
  h1.style.backgroundColor = "rgb(233, 224, 224)"
});
hardBtn.addEventListener("click", function() {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numCircles = 9;
  colors = generateRandomColor(numCircles);
  pickedColor = pickColor();
  displayRGB.textContent = pickedColor.toUpperCase();
  //push random color to each circle
  for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
    circles[i].style.display = "block";
  }
  h1.style.backgroundColor = "rgb(233, 224, 224)"
});

resetButton.addEventListener("click", function reset() {
  //generate random color
  colors = generateRandomColor(numCircles);
  //assign new pickedColor
  pickedColor = pickColor();
  displayRGB.textContent = pickedColor.toUpperCase();
  //push random color to each circle
  for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "rgb(233, 224, 224)";
});

for (let i = 0; i < circles.length; i++) {
  circles[i].style.backgroundColor = colors[i];
  circles[i].addEventListener("click", function() {
    let clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      resetButton.textContent = "Play Again?";
      msgDisplay.textContent = "correct";
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "rgb(233, 224, 224)";
      msgDisplay.textContent = "Try Again!";
    }
  });
}

function changeColor(color) {
  for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = color;
  }
}

function pickColor() {
  let randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

function generateRandomColor(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(pickRandomColor()); //to push random color into array as big as num arguments
  }
  return arr;
}

function pickRandomColor() {
  let r = Math.floor(Math.random() * 256); // generate random RED from 0 to 255 not 256
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
