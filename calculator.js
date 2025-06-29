let typedExpression = "";


function createValidString(input) {
typedExpression += input;
updateDisplay();
}

const buttonContainer = document.querySelector(".button-container");
const numberButtons = document.querySelector(".number-buttons");

numberButtons.addEventListener("click", (event) => {
    
    createValidString(event.target.textContent);

});

const display = document.getElementById("display");

function updateDisplay() {
    display.value = typedExpression;
}
