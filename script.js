let darrenContainer = document.getElementById("darren_div");
let darrenHeading1 = document.getElementById("darren_h1");

function darrenChangeWidth(element, width) {
    element.style.width = width;
}
function darrenChangeFontSize(element, fontSize) {
    element.style.fontSize = fontSize;
}

let darrenChangeWidthBtn = document.getElementById("darren_changeWidthBtn");
let darrenChangeHeadingSize = document.getElementById("darren_changeHeadingSizeBtn");
let darrenChangeBgColor = document.getElementById("darren_changeBgColor");

darrenChangeBgColor.addEventListener("click", () => {
    if (darrenContainer.style.backgroundColor == "rgb(234, 87, 234)") {
        darrenContainer.style.backgroundColor = "lightblue";
}
    else {
        darrenContainer.style.backgroundColor = "rgb(234, 87, 234)";
}
})

darrenChangeWidthBtn.addEventListener("click", () => {
    if (darrenContainer.style.width == "500px") {
        darrenChangeWidth(darrenContainer, "1000px");
    }
    else  {
        darrenChangeWidth(darrenContainer, "500px");
}
})

darrenChangeHeadingSize.addEventListener("click", () => {
    if (darrenHeading1.style.fontSize == "50px") {
        darrenChangeFontSize(darrenHeading1, "70px");
    }
    else if (darrenHeading1.style.fontSize == "70px") {
        darrenChangeFontSize(darrenHeading1, "100px");
    }
    else {
        darrenChangeFontSize(darrenHeading1, "50px");
    }
});
const darrenHobbies = ['Pickleball','Tennis','Table tennis','Watching movies'];
const darrenHobbiesList = document.getElementById("myhobbies");

for (let i = 0; i < darrenHobbies.length; i++) {
    const li = document.createElement("li");
    li.textContent = darrenHobbies[i];
    darrenHobbiesList.appendChild(li);
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