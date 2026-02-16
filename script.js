const inputA = document.getElementById("inputA")
const inputB = document.getElementById("inputB")
const inputC = document.getElementById("inputC")
const inputD = document.getElementById("inputD")
const calc = document.getElementById("calc-btn")
const inver_btn = document.getElementById("btn-invers")
const diret_btn = document.getElementById("btn-diret")

const inputs = [inputA, inputB, inputC]
let inversamente = false 

inver_btn.addEventListener("click", () => {
    inver_btn.classList.add("sel")
    diret_btn.classList.remove("sel")

    inversamente = true 
    
})

diret_btn.addEventListener("click", () => {
    diret_btn.classList.add("sel")
    inver_btn.classList.remove("sel")

    inversamente = false
})

const calcular = () => {

    const a = parseFloat(inputA.value)
    const b = parseFloat(inputB.value)
    const c = parseFloat(inputC.value)

    let resultado = 0

    if(inversamente) {
        if(c === 0){
            inputC.style.border = "solid red 1px"
            alert("Na regra inversa, o valor de C não pode ser 0 !")
            return
        }
        else {
            resultado = (a*b)/c
        }
    }

    else {
        if(a === 0){
            inputA.style.border = "solid red 1px"
            alert("Na regra direta, o valor de A não pode ser 0 !")
            return
        }
        else {
            resultado = (c*b)/a
        }
    }

    inputD.value = resultado.toFixed(2)

}

calc.addEventListener("click", () => {

    let valido = true;

    inputs.forEach(input => {
        if(input.value.trim() === ""){
            input.style.border = "solid red 1px"
            valido = false
}})

    if(valido){
        calcular()   
    }
})

inputs.forEach(input => {
    input.addEventListener("input", () => {
        input.style.border = "solid darkgray 1px"
    })
})






