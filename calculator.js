let typedExpression = "";
let firstNumber = "";
    let secondNumber = "";
    let operator = "";


const display = document.querySelector("#display");

function updateDisplay() {
    display.value = typedExpression;
}

function evaluateExpression(expression) {
    return "56";
}


function createValidString(input) {
    

    // Check if the input is a valid character
    const validNumbers = "0123456789";
    const validOperators = "+-*/";


    if (validNumbers.includes(input)) {
        if (operator.length === 0) {

            if(typedExpression.length !== 0 && firstNumber.length === 0 && secondNumber.length === 0) {
                // If there's already a number typed, reset the expression  
                typedExpression = ""; // Reset the expression
                firstNumber  = ""; // Reset the first number
                secondNumber = ""; // Reset the second number
                operator = ""; // Reset the operator
            } 

            firstNumber += input; // Append to first number
        }

        else {
        
            secondNumber += input; // Append to second number
        }
        typedExpression += input;
        console.log("First Number:", firstNumber);
        console.log("Second Number:", secondNumber);
    }   

    else if (validOperators.includes(input)) {
        if (firstNumber === "") {
            console.error("Invalid input: Operator without a first number");
            return; // Ignore invalid operator input
        }
        if (operator !== "") {
            console.error("Invalid input: Multiple operators in sequence");
            return; // Ignore multiple operators in sequence
        }
        operator = input; // Set the operator
        typedExpression += operator;
    }


    else if (input === "=") {
        if (firstNumber === "" || secondNumber === "" || operator === "") { 
            console.error("Invalid input: Incomplete expression");
            return; // Ignore incomplete expressions
        }
        let result = evaluateExpression();
        typedExpression = "";
        typedExpression += result; // Append the result to the expression
        firstNumber = "";
        secondNumber = "";
        operator = "";
    }

    else if (input === "clear") {
        typedExpression = typedExpression.slice(0, -1); // Remove the last character
        if (typedExpression.length === 0) {
            firstNumber = "";
            secondNumber = "";
            operator = "";
        } 
        else if (firstNumber.length !== 0 && operator === "" && secondNumber.length === 0) {
            firstNumber = typedExpression; // Reset first number if no operator
           
        }

        else if(operator !== "" && secondNumber.length === 0) {
            operator = ""; // Reset operator if no second number
        }

        else if (secondNumber!== "" && operator !== "") {
            secondNumber = typedExpression.split(operator)[1].trim(); // Update second number
        }
    }



    if (input === "AC") {
        typedExpression = ""; // Clear the expression
        firstNumber = "";
        secondNumber = "";
        operator = "";
    }

console.log(typedExpression);
updateDisplay();
}


const buttonContainer = document.querySelector(".button-container");

buttonContainer.addEventListener("click", (event) => {
    createValidString(event.target.textContent);
});


