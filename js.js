function generateKey(length, characters) {
    let key = '';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charactersLength);
        key += characters.charAt(randomIndex);
    }
    return key;
}
let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let key = generateKey(16, characters);
console.log(key);