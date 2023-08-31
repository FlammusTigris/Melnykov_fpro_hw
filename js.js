let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let positiveSum = 0;
let positiveCount = 0;
let minElement = array[0];
let minIndex = 0;
let maxElement = array[0];
let maxIndex = 0;
let negativeCount = 0;
let oddPositiveCount = 0;
let evenPositiveCount = 0;
let evenPositiveSum = 0;
let oddPositiveSum = 0;
let positiveProduct = 1;
let maxOverall = array[0];
for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element > 0) {
        positiveSum += element;
        positiveCount++;
        positiveProduct *= element;
        if (element % 2 === 0) {
            evenPositiveCount++;
            evenPositiveSum += element;
        } else {
            oddPositiveCount++;
            oddPositiveSum += element;
        }
    }
    if (element < minElement) {
        minElement = element;
        minIndex = i;
    }
    if (element > maxElement) {
        maxElement = element;
        maxIndex = i;
    }
    if (element < 0) {
        negativeCount++;
    }
    if (element > maxOverall) {
        maxOverall = element;
    }
}
for (let i = 0; i < array.length; i++) {
    if (array[i] !== maxOverall) {
        array[i] = 0;
    }
}
console.log("Сума позитивних елементів: " + positiveSum );
console.log("Кількість позитивних елементів: " + positiveCount );
console.log("Мінімальний елемент: " + minElement + " (порядковий номер: " + minIndex + ")" );
console.log("Максимальний елемент: " + maxElement + " (порядковий номер: " + maxIndex + ")" );
console.log("Кількість негативних елементів: " + negativeCount );
console.log("Кількість непарних позитивних елементів: " + oddPositiveCount );
console.log("Кількість парних позитивних елементів: " + evenPositiveCount );
console.log("Сума парних позитивних елементів: " + evenPositiveSum );
console.log("Сума непарних позитивних елементів: " + oddPositiveSum );
console.log("Добуток позитивних елементів: " + positiveProduct );
console.log("Масив після обнулення: " + array );
