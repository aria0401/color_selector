"use strict";

window.addEventListener("load", start);

function start() {
  let colorWell = document.querySelector("#selector");
  colorWell.addEventListener("input", getHex);
}
function getHex(event) {
  const viewer = document.querySelector("#viewer");
  const hex = document.querySelector("#hex");
  let hexValue = event.target.value;
  viewer.style.backgroundColor = hexValue;
  hex.textContent = hexValue;
  console.log(hexValue);
  hexToRGB(hexValue);
}

function hexToRGB(color) {
  const rgb = document.querySelector("#rgb");
  let r = parseInt(color.substring(1, 3), 16);
  let g = parseInt(color.substring(3, 5), 16);
  let b = parseInt(color.substring(5), 16);
  let rgbValue = `${r}, ${g}, ${b}`;
  rgb.textContent = rgbValue;

  console.log(`rgb is: ${rgbValue}`);

  //   rgbToHsl(rgbValue);
  rgbToHsl();
}

function rgbToHsl() {
  //her some code to make de r, g, and b values.. when the rest works
  let r = 127;
  let g = 39;
  let b = 85;

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  console.log("hsl", h, s, l); // just for testing
}
