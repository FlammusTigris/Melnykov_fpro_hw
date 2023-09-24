// Початкові дані про смайлики та голоси
const smileyOptions = ["😃", "😄", "😁", "😆", "😅"];
const votes = new Array(smileyOptions.length).fill(0);
function displayOptions() {
    const votingOptions = document.getElementById("votingOptions");
    votingOptions.innerHTML = "";
    smileyOptions.forEach((smiley, index) => {
        const smileyDiv = document.createElement("div");
        smileyDiv.classList.add("smiley");
        smileyDiv.textContent = smiley;
        smileyDiv.addEventListener("click", () => {
            votes[index]++;
            displayResults();
        });
        votingOptions.appendChild(smileyDiv);
    });
}
function displayResults() {
    const results = document.getElementById("results");
    results.innerHTML = "";
    smileyOptions.forEach((smiley, index) => {
        const resultDiv = document.createElement("div");
        resultDiv.textContent = `${smiley}: ${votes[index]} голосів`;
        results.appendChild(resultDiv);
    });
}
displayOptions();
displayResults();