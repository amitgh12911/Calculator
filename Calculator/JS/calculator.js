let btnsElement = document.querySelectorAll(".btn");
let inputElement = document.querySelector("input");
// console.log(btnsElement);

Array.from(btnsElement).forEach(e => {
    e.addEventListener("click", () => {
        // console.log(e.innerHTML);
        if (e.innerHTML == "AC") {
            inputElement.value = "";
        } else if (e.innerHTML == "=") {
            if (inputElement.value.includes("X")) {
                let perfectSymbol = inputElement.value.replace("X", "*");
                inputElement.value = eval(perfectSymbol);
            } else {
                inputElement.value = eval(inputElement.value);
            }
        } else if (e.innerHTML == "sqrt(n)") {
            inputElement.value = Math.sqrt(parseFloat(inputElement.value));
        } else if (e.innerHTML == "sin(n)") {
            inputElement.value = Math.sin(parseFloat(inputElement.value));
        } else if (e.innerHTML == "cos(n)") {
            inputElement.value = Math.cos(parseFloat(inputElement.value));
        } else if (e.innerHTML == "tan(n)") {
            inputElement.value = Math.tan(parseFloat(inputElement.value));
        } else if (e.innerHTML == "Backspace") {
            inputElement.value = inputElement.value.slice(0, -1);
        } else {
            inputElement.value += e.innerHTML;
        }
    });
});