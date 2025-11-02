let myCon = document.querySelector('.oomats_intro')
let myHeading = document.getElementById('oomatsHeading')
let myHobbyList = document.getElementById('oomatsHobby')
let myBgColor = document.getElementById('oomatsChangeBgColor')

let conWidthChange = document.getElementById('oomatsChangeBgBtng')
let headingBtn = document.getElementById('oomatsChangeHeadingtn')

function changeWidth(element, width){
    element.style.width = width
}

function changeFontSize(element, fontsize){
    element.style.fontSize = fontsize
}

headingBtn.addEventListener('click', () => {
if (myHeading.style.fontSize == "50px") {
    changeFontSize(myHeading, "100px")
} else if (myHeading.style.fontSize == "100px"){
    changeFontSize(myHeading, "150px") 
} else {
    changeFontSize(myHeading, "50px")  
}
})

conWidthChange.addEventListener('click', () => {
if (myCon.style.width == "580px") {
    changeWidth(myCon, "700px")
} else {
   changeWidth(myCon, "580px")
}
})

myBgColor.addEventListener('click', () => {
if (myCon.style.backgroundColor == "beige") {
    myCon.style.backgroundColor = "blue"
} else {
    myCon.style.backgroundColor = "beige"
}
})


let hobbies = ["football", "volleyball", "listening to music", "cooking"]; 

for (let index = 0; index < hobbies.length; index++) {
    let item = document.createElement("li");
    item.textContent = hobbies[index];
    myHobbyList.appendChild(item);
}
