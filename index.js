// let myName = "Marvin";
// let myAge = 18;

// let container = document.querySelector("#marvinChan");
// let heading = document.querySelector("#heading");
// let bgButton = document.querySelector(".bgBtn");
// let fontButton = document.querySelector(".fontBtn");

//  const originalBg = container.style.backgroundColor;
//     const newBg = 'mediumpurple';

//     const originalFontSize = heading.style.fontSize;
//     const newFontSize = '40px';

//    bgButton.addEventListener('click', () => {
//         if (container.style.backgroundColor === newBg) {
//             container.style.backgroundColor = originalBg; 
//         } else {
//             container.style.backgroundColor = newBg;
//         }
//     });

//         fontButton.addEventListener('click', () => {
//         if (heading.style.fontSize === newFontSize) {
//             heading.style.fontSize = originalFontSize
//         } else {
//             heading.style.fontSize = newFontSize; 
//         }
//     });


let container = document.querySelector("#marvinChan");
let heading = document.querySelector("#marvin_heading");
let widthButton = document.querySelector(".marvin_bgWidth");
let fontButton = document.querySelector(".marvin_fontBtn");

function conChangeFun(element, newWidth) {
  element.style.width = newWidth;
}

widthButton.addEventListener("click", () => {
  if (container.style.width === "500px") {
    conChangeFun(container, "800px");
  } else {
    conChangeFun(container, "500px");
  }
});

function conChangeFont(element, newSize) {
  element.style.fontSize = newSize;
}

fontButton.addEventListener("click", () => {
  if (heading.style.fontSize === "40px") {
    conChangeFont(heading, "60px");
  } else {
    conChangeFont(heading, "40px");
  }
});
