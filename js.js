const inputField = document.getElementById("myInput");
const body = document.body;
function createDiv() {
    let div = document.createElement("div");
    div.textContent = "Бу!";
    div.id = "myDiv";
    body.appendChild(div);
    let inputRect = inputField.getBoundingClientRect();
    div.style.top = inputRect.top + "px";
    div.style.left = (inputRect.right + 10) + "px";
    div.style.display = "block";
}
function removeDiv() {
    let div = document.getElementById("myDiv");
    if (div) {
        body.removeChild(div);
    }
}
inputField.addEventListener("mouseenter", createDiv);
inputField.addEventListener("mouseout", removeDiv);