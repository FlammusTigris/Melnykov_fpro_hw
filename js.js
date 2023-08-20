
var num1 = parseFloat(prompt("Введіть перше число:"));
var num2 = parseFloat(prompt("Введіть друге число:"));

var addition = num1 + num2;
var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;

var message = num1 + " + " + num2 + " = " + addition + "\n" +
    num1 + " - " + num2 + " = " + subtraction + "\n" +
    num1 + " * " + num2 + " = " + multiplication + "\n" +
    num1 + " / " + num2 + " = " + division;

alert(message);