let chyuCon = document.getElementById("chyuCon");
let chyuName = document.getElementById("chyuName");

let chyubgChangeBtn = document.getElementById("qconbgwidth");
let chyusizeChangeBtn = document.querySelector("#qconsize");

function chyuchangeBgwidth(element, width) {
  element.style.width = width;
}


chyubgChangeBtn.addEventListener("click", () => {
  if (chyuCon.style.width === "700px") {
    chyuchangeBgwidth(chyuCon, "1000px");
  } else {
    chyuchangeBgwidth(chyuCon, "700px");
  }
});

function chyuchangeFontSize(element, size) {
  element.style.fontSize = size;
}

chyusizeChangeBtn.addEventListener("click", () => {
  if (chyuName.style.fontSize === "30px") {
    chyuchangeFontSize(chyuName, "60px");
  } else if (chyuName.style.fontSize === "60px") {
    chyuchangeFontSize(chyuName, "90px");
  } else {
    chyuchangeFontSize(chyuName, "30px");
  }
});

let chyuHobbies = ["listening to music", "traveling", "coding"];

let chyuHobbiesList = document.getElementById('hobbylist');

for (let i = 0; i < chyuHobbies.length; i++) {
    let hobbyitem = document.createElement('li');
    console.log(hobbyitem);
    hobbyitem.textContent = myHobbies[i];
    console.log(hobbyitem.textContent);
    console.log(hobbyitem);
    chyuHobbiesList.appendChild(hobbyitem);
    console.log(chyuHobbiesList);
    
}

