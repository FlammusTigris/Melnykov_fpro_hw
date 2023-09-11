let userInput1 = Number(prompt('Введіть число:'));
let userInput2 = Number(prompt('Введіть ще одне число:'));
let userInput3 = Number(prompt('Введіть ще одне число:'));
function createSumFunction() {
    let sum = 0;
    return function (x) {
        if (typeof x === 'number') {
            sum += x;
        } else {
            console.log("Помилка: Введений параметр не є числом.");
        }
        return sum;
    };
}
let sum = createSumFunction();
console.log(`sum(${userInput1}) = ${sum(userInput1)}`);
console.log(`sum(${userInput2}) = ${sum(userInput2)}`);
console.log(`sum(${userInput3}) = ${sum(userInput3)}`);