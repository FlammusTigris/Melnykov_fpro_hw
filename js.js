const numImages = 3;
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
function setCurrentImage() {
    sliderImage.src = `img/${currentIndex + 1}.jpg`;
    sliderImage.alt = `Зображення ${currentIndex + 1}`;
    if (currentIndex === 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }
    if (currentIndex === numImages - 1) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
}
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        setCurrentImage();
    }
});
nextBtn.addEventListener("click", () => {
    if (currentIndex < numImages - 1) {
        currentIndex++;
        setCurrentImage();
    }
});

setCurrentImage();