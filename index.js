
const inputLabel = document.getElementById("calc-display");
        
const numbers = document.getElementsByClassName("numbers");

const clearAllButton = document.getElementById("clear-all-button");

const clearButton = document.getElementById("clear-button");

const resultButton = document.getElementById("result-button");

const operators = document.getElementsByClassName("operators");

const modifiers = document.getElementsByClassName("modifiers");

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function(){
        const pushed = this.value;
        inputLabel.value = inputLabel.value + pushed;
})
}
        
clearAllButton.addEventListener("click", function(){
    inputLabel.value = "";
})

clearButton.addEventListener("click", function(){
    const maxLength = inputLabel.value.length
    inputLabel.value =inputLabel.value.substr(0, maxLength - 1)
})

operators.addEventListener("click", function(){

    
})