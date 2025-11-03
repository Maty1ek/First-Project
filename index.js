let danielbutton1 = document.querySelector("#danielbackcolor");
let danielbutton2 = document.querySelector("#danielheadsize");
let danielbutton3 = document.querySelector("#danielheadcolor");
let danielbutton4 = document.querySelector("#danielwidthsize")
let danielbello = document.querySelector(".danielbello");
let danielheading1 = document.querySelector(".danielbello h1");
let danielheading2 = document.querySelector(".danielbello h2");

function danielchangeFontTwice(element, size){
  element.style.fontSize = size;
}

function danielchangeWidth(element, width){
  element.style.width = width;
}

danielbutton1.addEventListener("click", () => {
  if (danielbello.style.backgroundColor === 'bisque') {
    danielbello.style.backgroundColor = 'red';
  } else {
    danielbello.style.backgroundColor = 'bisque';
  }
});

danielbutton2.addEventListener("click", () => {
  if(danielheading1.style.fontSize == '50px') {
    danielchangeFontTwice(danielheading1,'60px');
  } else  if(daniielheading1.style.fontSize == '60px') { 
    danielchangeFontTwice(danielheading1, '70px');
    } else {
      danielchangeFontTwice(danielheading1, '50px');
  }
});

// danielbutton2.addEventListener("click", () => {
//     danielheading1.style.fontSize = '60px';
//     danielheading2.style.fontSize = '20px';
//   })

danielbutton3.addEventListener("click", () => {
  if (danielheading1.style.color === 'brown' && danielheading2.style.color === 'black') {
    danielheading1.style.color = 'black';
    danielheading2.style.color = 'brown';
    }  else  {
      danielheading1.style.color = 'brown';
      danielheading2.style.color = 'black';
    }
  });

danielbutton4.addEventListener("click", () => {
  if (danielbello.style.width === '800px') {
    danielchangeWidth(danielbello, '900px');
  } else {
    danielchangeWidth(danielbello,'800px');
  }
});
let danhobi = ["Playing games","Reading books", "Sleeping"];
let danlist = document.getElementById("danielhobbies");
for (let i=0; i< danhobi.length; i++){
  const li = document.createElement("li");
  li.innerText = danhobi[i];
  danlist.appendChild(li);
}
  
