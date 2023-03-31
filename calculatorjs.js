var numString = "";
var lastString = "";
var opArray = [];
var display = document.querySelector(".current_input")
var previousDisplay = document.querySelector(".last_input")
var resultString = "";
var equalString = "";

function sevenKey () {
    const number = document.querySelector(".sevenkey")
    numString += number.innerText
    display.innerHTML = numString
}

function nineKey () {
    const number = document.querySelector(".ninekey")
    numString += number.innerText
    display.innerHTML = numString
}

function eightKey () {
    const number = document.querySelector(".eightkey")
    numString += number.innerText
    display.innerHTML = numString
}

function sixKey () {
    const number = document.querySelector(".sixkey")
    numString += number.innerText
    display.innerHTML = numString
}

function fiveKey () {
    const number = document.querySelector(".fivekey")
    numString += number.innerText
    display.innerHTML = numString
}

function fourKey () {
    const number = document.querySelector(".fourkey")
    numString += number.innerText
    display.innerHTML = numString
}

function threeKey () {
    const number = document.querySelector(".threekey")
    numString += number.innerText
    display.innerHTML = numString
}

function twoKey () {
    const number = document.querySelector(".twokey")
    numString += number.innerText
    display.innerHTML = numString
}

function oneKey () {
    const number = document.querySelector(".onekey")
    numString += number.innerText
    display.innerHTML = numString
}

function zeroKey () {
    const number = document.querySelector(".zerokey")
    if (numString === "") return
    else {
        numString += number.innerText
        display.innerHTML = numString
    }
}

function decimalKey () {
    if (numString.length === 0) {
        numString += "0."
    }
    if (numString.includes('.')) {
        numString += ''
    } else {
        numString += '.'
    }
    display.innerHTML = numString
}
function clearKey () {
    var clear = document.querySelector(".clear")
    if (numString === "") {
        lastString = ""
        previousDisplay.innerHTML = ""
        clear.innerHTML = "AC"
    } else if ((numString.length > 0) && (lastString.length > 0)){
        numString = ""
        display.innerHTML = "0"
        clear.innerHTML = "CE"
    }
    else {
        numString = ""
        display.innerHTML = "0"
        clear.innerHTML = "AC"
    }
}

function plusKey () {
    var plus = document.querySelector(".plus_operator");
    if (numString === "" && lastString === "") return
    else if (numString.length > 0 && lastString === "") {
        lastString = numString;
        numString = "";
        opArray.push("+");
        display.innerHTML = "0";
        previousDisplay.innerHTML = lastString + " " + plus.textContent;
    }
    else if (numString === "" && lastString.length > 0) return
    else {
        var currentOperator = opArray.pop();
        switch(currentOperator) {
            case "+":
                resultString = (+(lastString) + +numString).toString();
                opArray.push("+");
                break;
            case "-":
                resultString = (+lastString - (+numString)).toString();
                opArray.push("+");
                break;
            case "*":
                resultString = (+lastString * (+numString)).toString();
                opArray.push("+");
                break;
            case "/":
                resultString = (+lastString / (+numString)).toString();
                opArray.push("+");
        }    
        numString = "";
        lastString = resultString
        display.innerHTML = "0";
        previousDisplay.innerHTML = lastString + " " + plus.textContent;
    }
}

function timesKey() {
    var times = document.querySelector(".multiply_operator");
    if (numString === "" && lastString === "") return
    else if (numString.length > 0 && lastString === "") {
        lastString = numString;
        numString = "";
        opArray.push("*");
        display.innerHTML = "0";
        previousDisplay.innerHTML = lastString + " " + times.textContent;
    }
    else if (numString === "" && lastString.length > 0) return
    else {
        var currentOperator = opArray.pop();
        switch(currentOperator) {
            case "+":
                resultString = (+(lastString) + +numString).toString();
                opArray.push("*");
                break;
            case "-":
                resultString = (+lastString - (+numString)).toString();
                opArray.push("*");
                break;
            case "*":
                resultString = (+lastString * (+numString)).toString();
                opArray.push("*");
                break;
            case "/":
                resultString = (+lastString / (+numString)).toString();
                opArray.push("*");
        }    
        numString = "";
        lastString = resultString
        display.innerHTML = "0";
        previousDisplay.innerHTML = lastString + " " + times.textContent;
    }
}

function divideKey() {
    var divide = document.querySelector(".divide_operator");
    if (numString === "" && lastString === "") return
    else if (numString.length > 0 && lastString === "") {
        lastString = numString;
        numString = "";
        opArray.push("/");
        display.innerHTML = "0";
        previousDisplay.innerHTML = lastString + " " + divide.textContent;
    }
    else if (numString === "" && lastString.length > 0) return
    else {
        var currentOperator = opArray.pop();
        switch(currentOperator) {
            case "+":
                resultString = (+(lastString) + +numString).toString();
                opArray.push("/");
                break;
            case "-":
                resultString = (+lastString - (+numString)).toString();
                opArray.push("/");
                break;
            case "*":
                resultString = (+lastString * (+numString)).toString();
                opArray.push("/");
                break;
            case "/":
                resultString = (+lastString / (+numString)).toString();
                opArray.push("/");
        }    
        numString = "";
        lastString = resultString
        display.innerHTML = "0";
        previousDisplay.innerHTML = lastString + " " + divide.textContent;
    }
}

function minusKey() {
    if (numString.includes("-")) numString += ""
    var minus = document.querySelector(".minus_operator");
    if (numString === "" && lastString === "") {
        numString += "-";
        display.innerHTML = numString;
    }
    else if (numString.length > 0 && lastString === "") {
        lastString = numString;
        numString = "";
        opArray.push("-");
        display.innerHTML = "0";
        previousDisplay.innerHTML = lastString + " " + minus.textContent;
    }
    else if (numString === "" && lastString.length > 0) {
        numString += "-";
        display.innerHTML = numString;
    }
    else {
        var currentOperator = opArray.pop();
        switch(currentOperator) {
            case "+":
                resultString = (+(lastString) + +numString).toString();
                opArray.push("-");
                break;
            case "-":
                resultString = (+lastString - (+numString)).toString();
                opArray.push("-");
                break;
            case "*":
                resultString = (+lastString * (+numString)).toString();
                opArray.push("-");
                break;
            case "/":
                resultString = (+lastString / (+numString)).toString();
                opArray.push("-");
        }    
        numString = "";
        lastString = resultString
        display.innerHTML = "0";
        previousDisplay.innerHTML = lastString + " " + minus.textContent;
    }
}

function equalKey() {
    if (numString === "" && lastString === "") return
    else if (numString.length > 0 && lastString === "") return
    else if (numString === "" && lastString.length > 0) {
        alert("You must enter a second number!")
    }
    else {
        var currentOperator = opArray.pop();
        switch(currentOperator) {
            case "+":
                resultString = (+(lastString) + +numString).toString();
                break;
            case "-":
                resultString = (+lastString - (+numString)).toString();
                break;
            case "*":
                resultString = (+lastString * (+numString)).toString();
                break;
            case "/":
                resultString = (+lastString / (+numString)).toString();
        }    
        numString = resultString;
        lastString = ""
        display.innerHTML = numString;
        previousDisplay.innerHTML = "";
    }
}

