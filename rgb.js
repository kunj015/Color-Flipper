// console.log("file running")
const btn = document.getElementById('btn');
const body = document.querySelector('.main');
const navColor = document.querySelector('.navColor');
const bgColorName = document.querySelector('.bgColorName');
const navBgColorName = document.querySelector('.navBgColorName')




function colorFunc() {
    let value = Math.floor(Math.random()*255)
    return value;
}



btn.addEventListener('click',()=>{
    let value1 = colorFunc();
    let value2 = colorFunc();
    let value3 = colorFunc();
    // let alphaValue = Math.random()
    let value4 = colorFunc();
    let value5 = colorFunc();
    let value6 = colorFunc();
    // console.log(value1,value2,value3,value4,value5,value6,alphaValue)

    let bgColor = "rgb"+"("+value1+","+value2+","+value3+")";
    // console.log(bgColor)
    let navBgColor = "rgb"+"("+value4+","+value5+","+value6+")";
    // console.log(navBgColor)
    body.style.backgroundColor = bgColor;
    navColor.style.backgroundColor = navBgColor;
    btn.style.backgroundColor = navBgColor;
    bgColorName.innerText = `Background Color : ${bgColor}`;
    navBgColorName.innerText = `Background Color : ${navBgColor}`
});

