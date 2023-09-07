let num = parseFloat(prompt('Введіть число:'));
let degree = parseInt(prompt('Введіть ступінь:'));
function pow(num, degree) {
    if (degree === 0) {
        return 1;
    } else if (degree < 0) {
        return 1 / (num * pow(num, -degree - 1));
    } else {
        return num * pow(num, degree - 1);
    }
}
let result = pow(num, degree);
alert('Результат: ' + result);