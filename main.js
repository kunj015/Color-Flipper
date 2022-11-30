const btn = document.getElementById('btn');
const body = document.querySelector('.main');
const navColor = document.querySelector('.navColor');
const bgColorName = document.querySelector('.bgColorName');
const navBgColorName = document.querySelector('.navBgColorName');
let color = ["aliceblue","antiquewhite","aqua","aquamarine","azure","bisque","blanchedalmond","blue","beige","blueviolet","brown"];



btn.addEventListener('click',()=>{
    let bgColor = color[getRandomNumber()];
    let navBgColor = color[getRandomNumber()]
    if (bgColor === navBgColor) {
        bgColor = color[getRandomNumber()]
    }
    body.style.backgroundColor = bgColor;
    navColor.style.backgroundColor = navBgColor;
    btn.style.backgroundColor =navBgColor;
    navBgColorName.innerText = `Background Color : ${navBgColor.charAt(0).toUpperCase() + navBgColor.slice(1)}`
    bgColorName.innerText = `Background Color : ${bgColor.charAt(0).toUpperCase() + bgColor.slice(1)}`;
    if (bgColor === "blue") {
        navColor.style.backgroundColor = "antiquewhite"
    }
});


function getRandomNumber(){
    let randomNumber = Math.floor(Math.random()*color.length);
    return randomNumber;
}

