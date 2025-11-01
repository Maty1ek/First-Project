let myHobbies = ["tennis", "gym", "coding"];

let myHobbiesList = document.getElementById("hobbiesList");

for (let i = 0; i < myHobbies.length; i++) {
  const hobbyItem = document.createElement("li");
  hobbyItem.textContent = myHobbies[i];
  myHobbiesList.appendChild(hobbyItem);
}

let employees = ["Idris", "Chyu", "Hosea", 12, true, false, true];
console.log(employees);

let employer = "Zhan";
let idrisAge = 18;
let zhanAge = 19;
let chyuAge = 20;
let hoseaAge = 21;

let teamAges = [idrisAge, zhanAge, chyuAge, hoseaAge];

//'0'
let newArr = [[50, 60, 70], [23, 24, 26], [12, 13, 14, 15], 12, "string"];
console.log(newArr);

//   0    1    2.   3    4
let arr = ["h", "a", "c", "v", "m"];

let num = 0;

console.log(myHobbiesList);

// index = index + 1
// index++

// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);

// }

// let myCon = document.getElementById('zhanCon')
// let heading = document.getElementById('heading')

// function changeWidth(element, width) {
//     element.style.width = width
// }

// function changeFontSize(element, fontSize) {
//     element.style.fontSize = fontSize
// }

// let widthChangeBtn = document.getElementById('bgConColor')
// let fontChangeBtn = document.querySelector('#headingSize')

// widthChangeBtn.addEventListener('click', () => {

//     if(myCon.style.width == '800px') {
//         changeWidth(myCon, '1000px')
//     } else {
//         changeWidth(myCon, '800px')
//     }

// })

// fontChangeBtn.addEventListener('click', () => {

//     if(heading.style.fontSize == '30px') {
//         changeFontSize(heading, '50px')
//     } else if(heading.style.fontSize == '50px') {
//         changeFontSize(heading, '100px')
//     } else {
//         changeFontSize(heading, '30px')
//     }

// })

// console.log('Hello World!') // String
// console.log('12+23') // String
// console.log(12 + 23) // Numbers

// var a = 12 + 23
// var b = 20

// let myName = 'Zhan'
// let myAge = 18
// let yourName = ' Chyu'

// const cityName = 'KL'

// let myCon = document.getElementById('zhanCon')
// let heading = document.getElementById('heading')

// let bgChangeBtn = document.getElementById('bgConColor')
// let headingSize = document.querySelector('#headingSize')

// bgChangeBtn.addEventListener('click', () => {
//     myCon.style.background = 'red'
// })

// headingSize.addEventListener('click', () => {
//     heading.style.fontSize = '30px'
// })
