let container = document.getElementById("darren_div");
let heading1 = document.getElementById("darren_h1");

function changeWidth(element, width) {
    element.style.width = width;
}
function changeFontSize(element, fontSize) {
    element.style.fontSize = fontSize;
}

let changeWidthBtn = document.getElementById("darren_changeWidthBtn");
let changeHeadingSize = document.getElementById("darren_changeHeadingSizeBtn");
let changeBgColor = document.getElementById("darren_changeBgColor");

changeBgColor.addEventListener("click", () => {
    if (container.style.backgroundColor == "rgb(234, 87, 234)") {
        container.style.backgroundColor = "lightblue";
}
    else {
        container.style.backgroundColor = "rgb(234, 87, 234)";
}
})

changeWidthBtn.addEventListener("click", () => {
    if (container.style.width == "500px") {
        changeWidth(container, "1000px");
    }
    else  {
        changeWidth(container, "500px");
}
})

changeHeadingSize.addEventListener("click", () => {
    if (heading1.style.fontSize == "50px") {
        changeFontSize(heading1, "70px");
    }
    else if (heading1.style.fontSize == "70px") {
        changeFontSize(heading1, "100px");
    }
    else {
        changeFontSize(heading1, "50px");
    }
});
const hobbies = ['Pickleball','Tennis','Table tennis','Watching movies'];
const myHobbiesList = document.getElementById("myhobbies");

for (let i = 0; i < hobbies.length; i++) {
    const li = document.createElement("li");
    li.textContent = hobbies[i];
    myHobbiesList.appendChild(li);
}

// let container = document.getElementById("darren_div");
// let heading1 = document.getElementById("darren_h1");
// let changeHeadingSize = document.getElementById("changeHeadingSize");

//  changeBgColor.addEventListener("click", () => {
//     container.style.backgroundColor = "lightblue";
// });

// changeHeadingSize.addEventListener("click", () => {
//     heading1.style.fontSize = "20px";
// });