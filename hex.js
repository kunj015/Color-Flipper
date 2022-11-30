// console.log("file running")
const btn = document.getElementById('btn');
const body = document.querySelector('.main');
const navColor = document.querySelector('.navColor');
const bgColorName = document.querySelector('.bgColorName');
const navBgColorName = document.querySelector('.navBgColorName')
let color = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];



function colorFunc() {
    let hex = "";
    for(let i = 0; i < 6 ; i++){
        hex += color[Math.floor(Math.random()*color.length)];
    }
    return hex;
}



btn.addEventListener('click',()=>{
    let bgColor = colorFunc();
    let navBgColor = colorFunc();
    body.style.backgroundColor = `#${bgColor}`;
    navColor.style.backgroundColor = `#${navBgColor}`;
    btn.style.backgroundColor = `#${navBgColor}`;
    bgColorName.innerText = `Background Color : #${bgColor}`;
    navBgColorName.innerText = `Background Color : #${navBgColor}`
});




