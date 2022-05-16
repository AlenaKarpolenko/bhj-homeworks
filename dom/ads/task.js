const rotatorCase = document.querySelectorAll(".rotator__case");
const firstText = rotatorCase.item(0);
const lastText = rotatorCase.item(rotatorCase.length - 1);

function intervalFunc() {
    const rotatorCaseActive = document.querySelector(".rotator__case_active");
    const nextText = rotatorCaseActive.nextElementSibling; // сосед

    if (nextText == null) {
        firstText.classList.add("rotator__case_active");
        lastText.classList.remove("rotator__case_active");
    } else {
        rotatorCaseActive.classList.remove("rotator__case_active");
        nextText.classList.add("rotator__case_active");
    }
}

setInterval(intervalFunc, 1000);