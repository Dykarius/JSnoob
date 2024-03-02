const iptNumber1 = document.getElementById("number1")
const iptNumber2 = document.getElementById("number2")
const results = document.getElementById("results")
const btnCalculate = document.getElementById("calculate")
const btnClear = document.getElementById("clear")
const btnOperator = document.getElementById("operator")

let operatorSwitch = true

btnCalculate.addEventListener("click",()=>{
    const n1 = +iptNumber1.value
    const n2 = +iptNumber2.value
   results.textContent = operatorSwitch==true ? n1+n2 : n1-n2
})

btnClear.addEventListener("click",()=>{
    results.textContent = ""
    iptNumber1.value = ""
    iptNumber2.value = ""

})

btnOperator.addEventListener("click",()=>{
    operatorSwitch = !operatorSwitch
    if (operatorSwitch==true){
        btnOperator.textContent = "+"
    } else {
        btnOperator.textContent = "-"
    }
})

