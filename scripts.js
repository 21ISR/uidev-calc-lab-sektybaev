const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".button");
let currentExpression = "";

function updateDisplay() {
    display.textContent = currentExpression === "" ? "0" : currentExpression;
}


function calculate() {
    currentExpression = currentExpression.replaceAll("÷", "/");
    currentExpression = currentExpression.replaceAll("×", "*");
    currentExpression = currentExpression.replaceAll("−", "-");
    currentExpression = String(eval(currentExpression));
    updateDisplay();
}

function handle(event) {
    let value = event.target.textContent;
    
    if (value === "=") calculate();
    else if (value === "AC") {
        currentExpression = "";
        updateDisplay();
    }
    else if (value === "+/-") {
        if (currentExpression !== "") {
            currentExpression = currentExpression.replaceAll("÷", "/");
            currentExpression = currentExpression.replaceAll("×", "*");
            currentExpression = currentExpression.replaceAll("−", "-");
            currentExpression = String(eval(currentExpression) * -1);
            updateDisplay();
        }
    }
    else if (value === "%") {
        if (currentExpression !== "") {
            currentExpression = currentExpression.replaceAll("÷", "/");
            currentExpression = currentExpression.replaceAll("×", "*");
            currentExpression = currentExpression.replaceAll("−", "-");
            let result = eval(currentExpression);
            currentExpression = result + "%";
            updateDisplay();
        }
    }
    else {
        
        if (currentExpression.includes("%")) {
            let numbers = currentExpression.split("%");
            let firstNumber = parseFloat(numbers[0]);
            let secondNumber = parseFloat(value);
            let result = (firstNumber / 100) * secondNumber;
            currentExpression = String(result);
            updateDisplay();
        }
        else if (display.textContent === "0" && value !== ".") {
            currentExpression = value;
            updateDisplay();
        } else {
            currentExpression = currentExpression + value;
            updateDisplay();
        }
    }
}

buttons.forEach(button => button.addEventListener("click", handle));
updateDisplay();