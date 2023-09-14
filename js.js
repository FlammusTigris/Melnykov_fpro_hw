let input = document.getElementById('myInput');
let sideDiv = document.getElementById('sideDiv');

input.addEventListener('focus', function() {
    sideDiv.style.display = 'block';
});

input.addEventListener('blur', function() {
    sideDiv.style.display = 'none';
});