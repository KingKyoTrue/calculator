
const inputLabel = document.getElementById("calc-display");
        
const numbers = document.getElementsByClassName("numbers");

const clearAllButton = document.getElementById("clear-all-button");

const clearButton = document.getElementById("clear-button");

const resultButton = document.getElementById("result-button");

const operators = document.getElementsByClassName("operators");

const modifiers = document.getElementsByClassName("modifiers");


for(const element of numbers){
    element.addEventListener("click", function(){
        const pushed = this.value;
        inputLabel.value = inputLabel.value + pushed;
})
}

for(const element of operators){
    element.addEventListener("click",function(){
        const pushed = this.innerHTML;
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

resultButton.addEventListener("click", function(){
    inputLabel.value = eval(inputLabel.value);
})

inputLabel.addEventListener("input", function(){
    const isValidInput = inputLabel.value.match(/^[0-9\+\-\*\/]$/)
    if (isValidInput){
        console.log("valid input");
    } else {
        console.log("invalid input");
    }
});