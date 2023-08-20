
var operation = prompt("Виберіть дію (+, -, *, / ):");

var num1 = parseFloat(prompt("Введіть перше число:"));

var num2 = parseFloat(prompt("Введіть друге число:"));

var result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else {
    alert("Неправильна дія! Введіть +, -, *, / .");
}

if (result !== undefined) {
    var message = num1 + " " + operation + " " + num2 + " = " + result;
    alert(message);
}
