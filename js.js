///1
function calculateAverage(arr) {
    let numbers = arr.filter(item => typeof item === 'number');
    if (numbers.length === 0) {
        return 0;
    }
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

let mixedArray = [19,'a',20,'b',15,34,'c'];
let average = calculateAverage(mixedArray);
console.log(average);
///2
// let x = (prompt('Введіть перше число:'));
// let znak = prompt('Введіть операцію (+, -, *, /, %, ^):');
// let y = (prompt('Введіть друге число:'));
// function doMath(x, znak, y) {
//     switch (znak) {
//         case '+':
//             return x + y;
//         case '-':
//             return x - y;
//         case '*':
//             return x * y;
//         case '/':
//             return x / y;
//         case '%':
//             return x % y;
//         case '^':
//             return Math.pow(x, y);
//         default:
//             return NaN;
//     }
// }
// let result = doMath(x, znak, y);
// console.log(`Результат: ${result}`);
///3
// function createMatrix(rows, cols) {
//     let matrix = [];
//     for (let i = 0; i < rows; i++) {
//         let row = [];
//         for (let j = 0; j < cols; j++) {
//             let value = prompt(`Введіть значення для рядка ${i + 1}, стовпця ${j + 1}:`);
//             row.push(value);
//         }
//         matrix.push(row);
//     }
//     return matrix;
// }
//
// let numRows = (prompt('Введіть кількість рядків:'));
// let numCols = (prompt('Введіть кількість стовпців:'));
// let userMatrix = createMatrix(numRows, numCols);
// console.log(userMatrix);
///4
// let inputString = prompt('Введіть рядок:');
// let charsToRemove = prompt('Введіть символи для видалення (без пробілу, наприклад, ld):').split('');
// function removeChars(inputString, charsToRemove) {
//     let charArray = inputString.split('');
//     let filteredArray = charArray.filter(char => !charsToRemove.includes(char));
//     return filteredArray.join('');
// }
// let resultString = removeChars(inputString, charsToRemove);
// console.log(`Результат: ${resultString}`);