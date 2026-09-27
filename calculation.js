// calculation.js

var VALID_USERS = {
    "admin": "password123",
    "user": "calc2024"
};

function login() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value;
    var errorMsg = document.getElementById("error-msg");

    if (VALID_USERS[username] && VALID_USERS[username] === password) {
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("currentUser", username);
        document.getElementById("login-section").style.display = "none";
        document.getElementById("calculator-section").style.display = "block";
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "Invalid username or password.";
    }
}

function logout() {
    sessionStorage.removeItem("loggedIn");
    sessionStorage.removeItem("currentUser");
    document.getElementById("calculator-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

// Restore session on page load
window.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem("loggedIn") === "true") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("calculator-section").style.display = "block";
    }
});

function calculate() {
    var operand1 = parseFloat(document.getElementsByName("operand1")[0].value);
    var operand2 = parseFloat(document.getElementsByName("operand2")[0].value);
    var operatorEl = document.querySelector('input[name="operator-2"]:checked');
    var result = document.getElementsByName("result")[0];

    if (!operatorEl) {
        result.value = "Select an operator";
        return;
    }

    var operator = operatorEl.value;

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
