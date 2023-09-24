let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));
let num3 = parseFloat(prompt("Введіть третє число:"));
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Будь ласка, введіть коректні числа.");
} else {
    let average = (num1 + num2 + num3) / 3;
    alert("Середнє арифметичне чисел: " + average);
}