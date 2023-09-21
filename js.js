document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("registrationForm");
    let userDataTable = document.getElementById("userDataTable");
    let table = userDataTable.querySelector("table");
    let submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function () {
        table.innerHTML = "";
        let formData = new FormData(form);

        for (const [key, value] of formData.entries()) {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${key}</td><td>${value}</td>`;
            table.appendChild(row);
        }
        form.style.display = "none";
        userDataTable.style.display = "block";
    });
});