const input = document.getElementById("input")
const clear = document.getElementById("clear")
const num = document.querySelectorAll(".num")


function Display(val){
    input.innerText += val
}

function Answer(){
    let x = input.innerText
    let y = eval(x)
    input.innerText = y
}

function Clear(){
    input.innerText = ""
}

