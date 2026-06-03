const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");
let currentExpression = "";

function updateDisplay() {
    display.textContent = currentExpression === "" ? "0" : currentExpression;
}


function replaceAllSymbols(str) {
    return str.replaceAll("÷", "/").replaceAll("×", "*").replaceAll("−", "-");
}


function calculateResult() {
    let result = eval(replaceAllSymbols(currentExpression));
    currentExpression = String(result);
    updateDisplay();
}


function handlePlusMinus() {
    let result = eval(replaceAllSymbols(currentExpression)) * -1;
    currentExpression = String(result);
    updateDisplay();
}
