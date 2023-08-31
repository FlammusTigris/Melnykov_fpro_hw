
let arrLength = +prompt("Введіть довжину масиву:", '0');
let arrElements = [];
// Запит користувача на введення елементів масиву
for (let  i = 0; i < arrLength; i++) {
    let  element = +prompt("Введіть елемент ",'0');
    arrElements.push(element);
}
console.log("Початковий масив:", arrElements);
arrElements.sort((a, b) => {
    return a - b;
});
arrElements.splice(1, 3);

for (let  i = 0; i < arrElements.length; i++) {
    console.log("Поточний масив:", arrElements.slice(0, i + 1));
}
