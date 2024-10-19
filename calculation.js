// calculation.js

function calculate() {
    var operand1 = parseFloat(document.getElementsByName("operand1")[0].value);
    var operand2 = parseFloat(document.getElementsByName("operand2")[0].value);
    var operator = document.querySelector('input[name="operator-2"]:checked').value;
    var result = document.getElementsByName("result")[0];

    switch (operator) {
        case "+":
            result.value = operand1 + operand2;
            break;
        case "-":
            result.value = operand1 - operand2;
            break;
        case "*":
            result.value = operand1 * operand2;
            break;
        case "/":
            if (operand2 !== 0) {
                result.value = operand1 / operand2;
            } else {
                result.value = "Error: Division by zero";
            }
            break;
        default:
            result.value = "Invalid operator";
            break;
    }
}
