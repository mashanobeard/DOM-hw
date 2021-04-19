//1 
let button = document.querySelector(".btn")
button.addEventListener("click",buttonClick)
function buttonClick() {
    alert ("Привет!")
}

//2
let btt = document.querySelector(".btn-btn")
btt.addEventListener("mouseover",buttonMouseover)
function buttonMouseover(){
    alert("Привет")
}

//3
let btn = document.querySelector(".btn-clicks")
btn.addEventListener("dblclick",buttonClicks)
function buttonClicks(){
    alert("Привет")
}

//4
let btnMouse = document.querySelector(".mouseout")
btnMouse.addEventListener("mouseout",buttonMouse)
function buttonMouse(){
    alert("Привет")
}

//5
let bttOnclick = document.querySelector(".btn-onclick")
bttOnclick.addEventListener("click",buttonClick1)
function buttonClick1() {
    let input = document.getElementById("new")
    alert(input.value)
}

//6
let bttClick = document.querySelector(".btn-changeclick")
bttClick.addEventListener("click",buttonClick2)
function buttonClick2() {
    let input = document.getElementById("npt")
    input.value = "Ой, я поменял свой текст!"
}

//7
//let btnImage = document.querySelector(".btn-img")
//btnImage.addEventListener("click",buttonClick3)
//function buttonClick3() {
//    document.getElementById("imag")= "images/2.jpeg"    
//}

//8
let bttStyle = document.querySelector(".btn-red")
bttStyle.addEventListener("click",buttonClick4)
function buttonClick4() {
    let input = document.getElementById("red")
    input.style.color = 'red'
}

//9
let bttChange = document.querySelector(".btn-change")
bttChange.addEventListener("click",buttonClick5)
function buttonClick5() {
    let input = document.getElementById("chg")
    input.value = "Ой, я поменял свой текст и css!"
    input.style.color = 'red'
    input.style.width = '300px'
    input.style.height = '50px'
    input.style.borderRadius = '10px'
}

//10
//11
//12
//13
let bttRight = document.querySelector(".btn-right")
bttRight.addEventListener("click",buttonClick6)
function buttonClick6() {
    let input = document.getElementById("rgh")
    input.value = "Теперь я плаваю справа!"
    input.style.cssFloat = 'right' //не уплывает
}

//14
let bttCl = document.querySelector(".btn-cl")
bttCl.addEventListener("click",buttonClick7)
function buttonClick7() {
    let input = document.getElementById("out")
    input.value = "Мои css классы: eee www ddd"
}



