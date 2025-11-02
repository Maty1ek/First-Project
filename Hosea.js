let hoseaCon = document.querySelector(".hosea_intro_con");
let headingOn = document.querySelector(".hosea_age");


let bgChangeButtonHosea = document.getElementById("bgChaHosea");
let ftSizeButtonHosea = document.getElementById("fontSizeChaHosea");
let widChangeButtonHosea = document.getElementById("bgWidHosea");


function widChangeButtonFuncHosea(element, width) {
  element.style.width = width;
}
function ftSizeButtonFuncHosea(element, fontSize) {
  element.style.fontSize = fontSize;
}
function backgroundColorFuncHosea(element, backgroundColor) {
  element.style.backgroundColor = backgroundColor;
}


widChangeButtonHosea.addEventListener("click", () => {
  if (hoseaCon.style.width == "600px") {
    widChangeButtonFuncHosea(hoseaCon, "1000px")
  } else {
    widChangeButtonFuncHosea(hoseaCon, "600px")
  }
});
ftSizeButtonHosea.addEventListener("click", () => {
  if (headingOn.style.fontSize == "40px") {
    ftSizeButtonFuncHosea(headingOn, "50px")
  } else if (headingOn.style.fontSize== "50px"){
   ftSizeButtonFuncHosea(headingOn, "60px")
  } else {
    ftSizeButtonFuncHosea(headingOn, "40px")
  }
   });

bgChangeButtonHosea.addEventListener("click", () => {
  if (hoseaCon.style.backgroundColor == "aqua") {
    backgroundColorFuncHosea(hoseaCon, "red")
} else if (hoseaCon.style.backgroundColor =="red") { 
    backgroundColorFuncHosea(hoseaCon,"green")
}
  else if (hoseaCon.style.backgroundColor== "green") {
    backgroundColorFuncHosea(hoseaCon,"yellow")
  }
    else if (hoseaCon.style.backgroundColor== "yellow") {
    backgroundColorFuncHosea(hoseaCon,"white")
  }
   else {
    backgroundColorFuncHosea(hoseaCon, "aqua")
   }
  
});



let hoseaHobbies= ['I love playing MLBB, COC, or Clash Royale because I like strategy game', 'I like reading fantasy novel especially about detective or mythology']
let TheHobby= document.getElementById("hobbyListHosea")

for (let index= 0; index < hoseaHobbies.length; index++) {

const hoseaHobby = document.createElement('li')

hoseaHobby.textContent= hoseaHobbies [index]

TheHobby.appendChild(hoseaHobby)

}